import express from "express";
import schemaRoutes from "./routes/schemaRoutes";
import dataRoutes from "./routes/dataRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/schema", schemaRoutes);
app.use("/data", dataRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
