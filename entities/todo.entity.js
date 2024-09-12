import { Entity } from "electrodb"; // ORM
import { client } from "../util/dbconnection.js";

const Tasksets = new Entity(
  {
    model: {
      entity: "Tasksets",
      version: "1",
      service: "TasksetsService",
    },
    attributes: {
      taskset_Id: {
        type: "string",
        required: true,
      },
      taskset_name: {
        type: "string",
        required: true,
      },
      // user_Id: {
      //   type: "string",
      //   required: true,
      // },
      tasklist: {
        // New attribute added here
        type: "list",
        items: { type: "string" },
        default: [], // Optional: set a default value
      },
    },
    indexes: {
      primary: {
        pk: {
          field: "pk",
          facets: ["taskset_Id"],
        },
        sk: {
          field: "sk",
          facets: [],
        },
      },
    },
  },
  { client, table: "tasksets" }
);

export { Tasksets };
