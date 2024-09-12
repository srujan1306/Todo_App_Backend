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
export { gettasksetsCtr, createtasksetCtr, deletetasksetByIdCtr };
