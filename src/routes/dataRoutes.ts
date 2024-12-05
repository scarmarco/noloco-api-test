import { Router, Request, Response } from "express";
import { converToCamelCase } from "../utils/convertoToCamelCase";
import { doOperation } from "../utils/operation";
import { config } from "../config";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { where } = req.body;
  const [[fieldName, operation]] = Object.entries(where);
  const [[op, value]] = Object.entries(operation);

  try {
    const response = await fetch(config.DATA_URL);
    const dataSet = await response.json();
    const normalizedData = converToCamelCase(dataSet);
    const operationResult = doOperation(normalizedData, fieldName, op, value);
    res.status(201).json(operationResult);
  } catch (err) {
    console.error(err);
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const response = await fetch(config.DATA_URL);
    const dataSet = await response.json();
    const result = dataSet.find((data) => data.id === +id);
    res.json(result);
  } catch (err) {
    console.error(err);
  }
});

export default router;
