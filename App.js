import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import cors from "cors";
import modules from "./Kanbas/Database/modules.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import UserRoutes from "./User/routes.js";
import session from "express-session";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"

mongoose.connect(CONNECTION_STRING);

const app = express();

// var cors = require('cors');    
// app.use(cors({credentials: true, origin: process.env.NETLIFY_URL || 'http://localhost:3000'}));

app.use(cors({
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
    credentials: true  
})
);

const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
  }
  app.use(session(sessionOptions));
  


app.use(express.json());
const port = process.env.PORT || 4000;

Hello(app);
Lab5(app);
app.listen(process.env.PORT || 4000);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
UserRoutes(app);



