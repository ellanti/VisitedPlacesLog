import express from "express";
import cors from "cors";
import placesRouter from "./routers/visitedplacesRouter";

const app = express();
app.set("port", process.env.PORT || 5000);
app.use(cors());
app.use(express.json());

app.use("/api/v1/", placesRouter);

app.listen(app.get("port"), () => {
  console.log("Server is running");
});

export default app;
