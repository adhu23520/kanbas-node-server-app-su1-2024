import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import cors from "cors";
import modules from "./Kanbas/Database/modules.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";

const app = express();
app.use(cors());
app.use(express.json());

Hello(app);
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);

app.listen(process.env.PORT || 4000)
