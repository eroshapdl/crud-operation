import express from "express";
import bodyParser from "body-parser";


import usersRoutes from "./routes/users.js";


const app = express();


const PORT = 5000;

app.use(bodyParser.json());


app.use("/people", usersRoutes);

app.get("/", (req, res) => res.send("this is users api"));


app.all("*", (req, res) =>res.send("the route does not exist"));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
