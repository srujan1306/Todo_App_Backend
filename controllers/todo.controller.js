import { Tasksets } from "../entities/todo.entity.js";
import {
  gettasksets,
  createtaskset,
  deletetasksetById,
} from "../services/todo.service.js";
import { v4 as uuidv4 } from "uuid";
async function gettasksetsCtr(request, response) {
  const allcourses = await gettasksets();
  response.send(allcourses.data);
}
async function createtasksetCtr(request, response) {
  const data = request.body;
  data.taskset_Id = uuidv4();
  const addtaskset = await createtaskset(data);
  response.send(addtaskset.data);
}
async function deletetasksetByIdCtr(request, response) {
  const { taskset_Id } = request.params;
  const task_to_deleted = await Tasksets.get({ taskset_Id: taskset_Id }).go();

  if (task_to_deleted.data) {
    await deletetasksetById(taskset_Id);
    response.send({
      msg: "task deleted successfully",
      data: task_to_deleted.data,
    });
  } else {
    response.status(404).send({ msg: "course not found" });
  }
}

// async function getusertasksCtr(request, response) {
//   const user_id = request.params;
//   console.log(user_id);
//   const task_of_user = await Tasksets.get({ user_Id: user_id }).go();
//   if (task_of_user.data) {
//     response.send({
//       msg: "task retrieved successfully",
//       data: task_of_user.data,
//     });
//   } else {
//     response.status(404).send({ msg: "tasks not found" });
//   }
// }
async function getusertasksCtr(request, response) {
  const { user_Id } = request.params; // Adjust if necessary based on your route
  console.log({ user_Id });
  if (!user_Id) {
    return response.status(400).send({ msg: "Missing user_Id parameter" });
  }

  try {
    // Query the secondary index by user_Id
    const tasks = await Tasksets.query.byUserIndex1({ user_Id }).go();

    if (tasks.data.length > 0) {
      response.send({
        msg: "Tasks retrieved successfully",
        data: tasks.data,
      });
    } else {
      response.status(404).send({ msg: "Tasks not found" });
    }
  } catch (error) {
    console.error(error);
    response.status(500).send({ msg: "Internal server error" });
  }
}

export {
  gettasksetsCtr,
  createtasksetCtr,
  deletetasksetByIdCtr,
  getusertasksCtr,
};
