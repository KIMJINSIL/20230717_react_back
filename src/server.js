import "dotenv/config";
import "./db.js";
import express from "express";
import morgan from "morgan";
import rentalRouter from "./routers/rentalRouter.js";
import cors from "cors";
import foodsRouter from "./routers/foodsRouter.js";
import userRouter from "./routers/userRouter.js";

const PORT = 8080;
const app = express();

const corsOptions = {
    origin: [
        "http://localhost:3000","https://leafy-basbousa-e3138f.netlify.app"],
    methods: ["GET", "POST"],
    credentials: true,
}

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api/rental", rentalRouter);
app.use("/api/foods", foodsRouter);
app.use("/api/users",userRouter);


const handleListening = () =>
    console.log(`😍Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
