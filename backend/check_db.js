const mongoose = require('mongoose');
const PostQuiz = require('./src/model/quizdata.model.js');
require('dotenv').config();

const connect = () => mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/quizdb');

async function checkData() {
    try {
        await connect();
        console.log("Connected to MongoDB");
        const quizzes = await PostQuiz.find();
        console.log("Number of quizzes found:", quizzes.length);
        quizzes.forEach(q => {
            console.log(`Title: ${q.title}, Questions: ${q.questionArray?.length || 0}`);
        });
        process.exit(0);
    } catch (err) {
        console.error("Error:", err);
        process.exit(1);
    }
}

checkData();
