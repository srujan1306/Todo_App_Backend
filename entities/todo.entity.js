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
      user_Id: {
        type: "string",
        required: true,
      },
      tasklist: {
        type: "list",
        items: { type: "string" },
        default: [],
      },
    },
    indexes: {
      primary: {
        pk: {
          field: "pk",
          facets: ["taskset_Id"], // Primary key facet
        },
        sk: {
          field: "sk",
          facets: [], // Sort key is empty for primary index
        },
      },
      byUserIndex1: {
        index: "byUserIndex1", // Specify the index name here
        pk: {
          field: "user_Id",
          facets: ["user_Id"], // Partition key for secondary index
        },
      },
    },
  },
  { client, table: "task_sets" }
);

export { Tasksets };
