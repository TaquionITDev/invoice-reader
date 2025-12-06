import { Router } from "express";
import { FileParserController } from "../controllers/file-parser.controller";
import { GeminiFileParserService } from "../services/gemini-file-parser.service";
const fileParseRouter = Router();


var geminiFileParserService = new GeminiFileParserService();
var fileParserController = new FileParserController(geminiFileParserService);

fileParseRouter.get("/health", (req, res) => {
    res.status(200).send("OK");
});
fileParseRouter.post("/parse-file", fileParserController.parseFile.bind(fileParserController));
export default fileParseRouter;