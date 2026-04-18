require("dotenv").config();

const express = require('express');
const connect = require("./configs/db.js");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
const Port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: "http://13.48.249.24",
  methods: ["GET", "POST", "PUT", "DELETE"],
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

// MongoDB connect with retry
async function connectWithRetry(retries = 5, delay = 3000) {
    for (let i = 1; i <= retries; i++) {
        try {
            await connect();
            console.log("✅ MongoDB Atlas connected successfully!");
            return;
        } catch (error) {
            console.log(`⚠️  MongoDB connection attempt ${i}/${retries} failed: ${error.message}`);
            if (i < retries) {
                console.log(`🔄 Retrying in ${delay / 1000}s...`);
                await new Promise(res => setTimeout(res, delay));
            } else {
                console.log("❌ All MongoDB connection attempts failed.");
                console.log("👉 Fix: Go to MongoDB Atlas → Network Access → Add your IP address.");
            }
        }
    }
}

// Server start — starts regardless of DB connection
app.listen(Port, "0.0.0.0", function () {
    console.log(`🚀 Server running on port ${Port}`);
    connectWithRetry();
});