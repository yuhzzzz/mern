import "express-async-errors";
import express from "express";
import morgan from "morgan";
const app = express();
import dotenv from "dotenv";
dotenv.config();

//routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobRoutes.js";

//db and authenticateUser
import connectDB from "./db/connect.js";

//middlewares
import notFoundMiddleware from "./middleware/notFound.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send({ msg: "welcome" });
// });

app.get("/api/v1", (req, res) => {
  res.send({ msg: "API" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`server up and running on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
