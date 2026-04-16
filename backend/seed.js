const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const PostQuiz = require('./src/model/quizdata.model.js');
require('dotenv').config();

const connect = () => mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/quizdb');

async function seedData() {
    try {
        await connect();
        console.log("Connected to MongoDB for seeding...");

        // Clear existing data
        await PostQuiz.deleteMany({});
        console.log("Cleared old quiz data.");

        // Read db.json from frontend
        const dbPath = path.join(__dirname, '../frontend/db.json');
        const rawData = fs.readFileSync(dbPath, 'utf8');
        const jsonData = JSON.parse(rawData);

        const seededQuizzes = jsonData.map(quiz => {
            return {
                title: quiz.title,
                questionArray: quiz.questions.map(q => {
                    return {
                        questions: q.que,
                        correctAnswer: q.correctAnswer,
                        options: q.answer.map((opt, index) => ({
                            option: opt,
                            isCorrect: opt === q.correctAnswer,
                            id: index + 1
                        }))
                    };
                })
            };
        });

        await PostQuiz.insertMany(seededQuizzes);
        console.log(`Successfully seeded ${seededQuizzes.length} quizzes!`);
        
        process.exit(0);
    } catch (err) {
        console.error("Seeding Error:", err);
        process.exit(1);
    }
}

seedData();
