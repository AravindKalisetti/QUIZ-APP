The Online Quiz Game is a full-stack web application developed using the MERN Stack (MongoDB, Express.js, React.js, Node.js). This platform allows users to register, log in, and participate in quizzes across different categories. It provides an interactive and user-friendly environment for testing knowledge and improving skills.

🚀 Features
👤 User Authentication (Register / Login)
📝 Multiple Choice Quiz System
⏱️ Timer-based quizzes
📊 Score Calculation & Result Display
📂 Category-wise Quiz Selection
🔒 Secure Backend with JWT Authentication
🌐 Responsive UI for all devices
🛠️ Tech Stack
Frontend
React.js
HTML5
CSS3
JavaScript
Backend
Node.js
Express.js
Database
MongoDB (MongoDB Atlas)
Other Tools
Axios (API calls)
JWT (Authentication)
Mongoose (ODM)
📂 Project Structure
ONLINE-QUIZ-GAME/
│
├── client/              # React Frontend
│   ├── src/
│   └── public/
│
├── server/              # Node.js Backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── config/
│
├── .env
├── package.json
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/ONLINE-QUIZ-GAME.git
cd ONLINE-QUIZ-GAME
2️⃣ Install Dependencies
Backend
cd server
npm install
Frontend
cd client
npm install
3️⃣ Environment Variables

Create a .env file in the server folder and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
4️⃣ Run the Application
Start Backend
cd server
npm start
Start Frontend
cd client
npm start
🔄 Application Flow
User registers and logs into the system
Selects a quiz category
Answers multiple-choice questions
System calculates score automatically
Final result is displayed to the user
📊 Future Enhancements
🧠 AI-based question recommendations
🏆 Leaderboard system
📱 Mobile application version
🎯 Difficulty level selection
📈 Performance analytics dashboard
⚠️ Challenges Faced
Handling authentication securely
Managing state between frontend and backend
Fixing CORS issues during deployment
Ensuring smooth API communication
📸 Screenshots (Optional)

Add screenshots of your project UI here

👨‍💻 Author

Aravind Kalisetti

📜 License

This project is licensed under the MIT License.
