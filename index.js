import express from "express";
import cors from "cors";
import usersRouter from "./routes/users.route.js";
import todoRouter from "./routes/todo.route.js";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 4000;

// routes
// app.use("/Todo", todoRouter);
app.use("/users", usersRouter);
app.use("/todo", todoRouter);

app.listen(PORT, () => {
  console.log("Server is listening on port 3000");
});
