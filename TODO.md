# Backend Fix Complete

**Status:** Fixed npm scripts & DB error.

1. [x] npm scripts (dev/start) in root & server/
2. [x] Fixed body-parser deprecation
3. [x] Fixed DB connect (MONGO_URI), catch error
4. [x] Created .env.example

**Run:**
```
cd Backend-MERN_Quiz_APP
npm install
cp .env.example .env  # Edit MONGO_URI (local MongoDB or Atlas)
npm run dev
```

Expected: "Listening on 5000" without crash.
