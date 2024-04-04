import express, { Request, Response } from "express";
import swaggerUi from 'swagger-ui-express';
import userRoutes from "./routes/user.routes";
import specs from "./swaggerConfig";
const app = express()
const http = require("url");
const API_VERSION = "/api/v1";
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(userRoutes);
app.listen(4000, () => {
  console.log("application run 4000");
});


