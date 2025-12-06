import { Request, Response } from "express";
import { GeminiFileParserService } from "../services/gemini-file-parser.service";

export class FileParserController {

    constructor(private geminiFileParserService: GeminiFileParserService) {

    }

  async parseFile(req:Request, res:Response) {   
    var r = await this.geminiFileParserService.parse(req.body.data);
    res.status(200).json(r);
  }
}