import { Router, Request, Response } from "express";
import { buildSchemaFromJSON } from "../utils/buildSchema";
import { config } from "../config";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const response = await fetch(config.DATA_URL);
    const data = await response.json();
    res.json(buildSchemaFromJSON(data));
  } catch (err) {
    console.error(err);
  }
});

export default router;
