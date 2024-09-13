import express from "express";
import {
  gettasksetsCtr,
  createtasksetCtr,
  deletetasksetByIdCtr,
  getusertasksCtr,
} from "../controllers/todo.controller.js";
const router = express.Router();

router.get("/tasksets", gettasksetsCtr);
router.post("/addtaskset", createtasksetCtr);
router.delete("/deletetaskset/:taskset_Id", deletetasksetByIdCtr);
router.patch("/lists/:id", (req, res) => {
  res.send("Hello World !");
});

//routes for logged in user
router.get("/usertasks/:user_Id", getusertasksCtr);

export default router;
