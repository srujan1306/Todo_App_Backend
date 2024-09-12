import { Entity } from "electrodb";
import { client } from "../util/dbconnection.js";
const Users = new Entity(
  {
    model: {
      entity: "Users",
      version: "2",
      service: "UserService",
    },
    attributes: {
      user_Id: {
        type: "string",
        required: true,
      },
      username: {
        type: "string",
        required: true,
      },
      password: {
        type: "string",
        required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["username"],
        },
        sk: {
          // highlight-next-line
          field: "sk",
          facets: [],
        },
      },
    },
    // add your DocumentClient and TableName as a second parameter
  },
  { client, table: "users" }
);

export { Users };
