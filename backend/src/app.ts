import morgan from 'morgan';
import express from 'express';
import { config } from 'dotenv';
import appRouter from './routes/index.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

config();
const app = express();

const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
//? MIDLLEWARES
app.use(cors({origin: [frontendUrl],methods:["GET","POST","DELETE"]
    ,credentials:true}));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(morgan("dev"));


app.use("/api/v1", appRouter);

app.use(require("@sentry/node").Handlers.errorHandler());

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

export default app;