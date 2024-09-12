import express from "express";
import {
  gettasksetsCtr,
  createtasksetCtr,
  deletetasksetByIdCtr,
} from "../controllers/todo.controller.js";
const router = express.Router();

router.get("/tasksets", gettasksetsCtr);
router.post("/addtaskset", createtasksetCtr);
router.delete("/deletetaskset/:taskset_Id", deletetasksetByIdCtr);
router.patch("/lists/:id", (req, res) => {
  res.send("Hello World !");
});
router.delete("/lists/:id", (req, res) => {
  res.send("Hello World !");
});
export default router;
