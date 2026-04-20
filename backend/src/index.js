const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const express = require('express');
const connectDB = require("./configs/db.js");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
const Port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000", "http://13.48.249.24"],
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Global Request Logger
app.use((req, res, next) => {
    console.log(`📡 [${new Date().toLocaleTimeString()}] ${req.method} request to: ${req.url}`);
    next();
});

// Routes
const loginAuth = require("./controller/auth.controller.js");
app.use("/", loginAuth);

const quizAdd = require("./controller/quizAdd.controller.js");
app.use("/admin", quizAdd);

const quiz = require("./controller/displayQuiz.controller.js");
app.use("/quiz", quiz);

const user = require("./controller/auth.controller.js");
app.use("/user", user);

const userResult = require("./controller/userData.controller.js");
app.use("/userResult", userResult);

// Connect to Database
connectDB();

// Server start
app.listen(Port, "0.0.0.0", function () {
    console.log(`Server running on port ${Port}`);
});