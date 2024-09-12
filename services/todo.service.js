import { Tasksets } from "../entities/todo.entity.js";
async function gettasksets() {
  return await Tasksets.scan.go();
}
async function createtaskset(data) {
  return await Tasksets.create(data).go();
}
async function deletetasksetById(taskset_Id) {
  await Tasksets.delete({ taskset_Id: taskset_Id }).go();
}
export { gettasksets, createtaskset, deletetasksetById };
