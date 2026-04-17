# QuizLab - Full-Stack MERN Online Quiz Application

QuizLab is a modern, interactive platform where users can learn, attempt quizzes, and track their progress on a comprehensive leaderboard. Administrators have full access to add new quizzes and manage user data.

## 🚀 Features

- **Dynamic Quizzes:** Attempt quizzes across various subjects (HTML, CSS, JavaScript, React, MongoDB, etc.).
- **Interactive Learning:** Study efficiently using interactive Flashcards and comprehensive Learning Guides.
- **Leaderboard System:** Track top performers, earn points, and compare your scores with other learners.
- **Admin Panel:** Secure dashboard to create/edit quizzes, view stats, and manage users.
- **User Dashboard:** Track past quiz results, view detailed correct/incorrect answers, and manage your profile.
- **Modern UI:** Sleek, responsive, and dynamic interface built with React and Tailwind CSS.

## 💻 Tech Stack

- **Frontend:** React.js, Redux, Tailwind CSS, React Router v6
- **Backend:** Node.js, Express.js, Mongoose
- **Database:** MongoDB Atlas
- **Deployment:** Vercel 

## 🛠️ Installation & Setup (Local Development)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AravindKalisetti/QUIZ-APP.git
   cd QUIZ-APP
   ```

2. **Install Frontend Dependencies:**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies:**
   ```bash
   cd ../backend
   npm install
   ```

4. **Environment Configuration:**
   - Create a `.env` file in the `backend` directory.
   - Add your MongoDB URI and secret keys:
     ```env
     PORT=8080
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     ```

5. **Start the Application:**
   - **Backend Server:**
     ```bash
     cd backend
     npm start
     ```
   - **Frontend App:**
     ```bash
     cd frontend
     npm start
     ```

## 🎥 Updated Interface
*(You can upload and add screenshots of your new sleek QuizLab UI here to showcase your updated Landing Page, Quizzes, Flashcards, and Leaderboard!)*

---
**Developed by [Aravind Kalisetti](https://github.com/AravindKalisetti)**
