import express from "express";
import { see, edit,upload,deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

// upload가 :id보다 위에있어야지 인식됨
// :id가 위에있으면 /upload는 인식 못함
// 리퀘스트는 제일 위에있는것부터 순차적으로 확인함

videoRouter.get("/:id(\\d+)",see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/upload",upload);

export default videoRouter;
