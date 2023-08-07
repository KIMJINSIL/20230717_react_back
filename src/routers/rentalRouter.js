import express from "express";
import { rentalNotice, rentalNoticeDetial, rentalNoticeWrite } from "../controllers/rentalControllers.js";

const rentalRouter = express.Router()

rentalRouter.get("/notice", rentalNotice)
rentalRouter.post("/notice-write", rentalNoticeWrite)
rentalRouter.get("/notice-detail/:id", rentalNoticeDetial)

export default rentalRouter;