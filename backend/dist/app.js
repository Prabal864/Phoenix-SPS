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
app.use(cors({ origin: [frontendUrl], credentials: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(morgan("dev"));
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map