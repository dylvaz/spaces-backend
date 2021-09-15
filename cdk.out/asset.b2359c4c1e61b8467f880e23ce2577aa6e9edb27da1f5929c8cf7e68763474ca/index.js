var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// services/SpacesTable/Read.ts
__export(exports, {
  handler: () => handler
});
var import_aws_sdk = __toModule(require("aws-sdk"));
var TABLE_NAME = process.env.TABLE_NAME;
var PRIMARY_KEY = process.env.PRIMARY_KEY;
var dbClient = new import_aws_sdk.DynamoDB.DocumentClient();
var scanTable = async () => {
  const queryResponse = await dbClient.scan({
    TableName: TABLE_NAME
  }).promise();
  return JSON.stringify(queryResponse.Items);
};
var queryWithPrimaryPartition = async (queryParams) => {
  const keyValue = queryParams[PRIMARY_KEY];
  const queryResponse = await dbClient.query({
    TableName: TABLE_NAME,
    KeyConditionExpression: "#key = :value",
    ExpressionAttributeNames: {
      "#key": PRIMARY_KEY
    },
    ExpressionAttributeValues: {
      ":value": keyValue
    }
  }).promise();
  return JSON.stringify(queryResponse.Items);
};
var queryWithSecondaryPartition = async (queryParams) => {
  const queryKey = Object.keys(queryParams)[0];
  const queryValue = queryParams[queryKey];
  const queryResponse = await dbClient.query({
    TableName: TABLE_NAME,
    IndexName: queryKey,
    KeyConditionExpression: "#key = :value",
    ExpressionAttributeNames: {
      "#key": queryKey
    },
    ExpressionAttributeValues: {
      ":value": queryValue
    }
  }).promise();
  return JSON.stringify(queryResponse.Items);
};
var handler = async (event, context) => {
  const result = {
    statusCode: 200,
    body: "Hello from DynamoDB"
  };
  try {
    if (event.queryStringParameters) {
      if (PRIMARY_KEY in event.queryStringParameters) {
        result.body = await queryWithPrimaryPartition(event.queryStringParameters);
      } else {
        result.body = await queryWithSecondaryPartition(event.queryStringParameters);
      }
    } else {
      result.body = await scanTable();
    }
  } catch (err) {
    result.body = err;
    console.error(err);
  }
  return result;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});