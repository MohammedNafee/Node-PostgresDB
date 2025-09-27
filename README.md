# Connecting-Node-to-PostgresDB

A simple Node.js + TypeScript project that demonstrates how to connect to a PostgreSQL database using environment variables.

---

## 🚀 Features

* Connects Node.js to PostgreSQL using the `pg` library.
* Environment variables managed with `.env`.
* Written in TypeScript for type safety.
* Clean project structure with `src` (source) and `dist` (compiled) directories.

---

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MohammedNafee/Connecting-Node-to-PostgresDB.git
   cd Connecting-Node-to-PostgresDB
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root:

   ```env
   POSTGRES_HOST=
   POSTGRES_DB=
   POSTGRES_USER=
   POSTGRES_PASSWORD=
   ```

---

## 🛠️ Usage

### Build and run

```bash
npm run build
npm start
```

---

## 🧪 Testing Database Connection

To test whether the connection works, run:

```bash
node dist/server.js
```
---

## 📂 Project Structure

```
Connecting-Node-to-PostgresDB/
│── src/            # Source TypeScript code
│   └── server.ts    # Entry point
│       database.ts
│── dist/           # Compiled JavaScript code
│── .env            # Environment variables (ignored by Git)
│── .gitignore
│── package.json
│── tsconfig.json
```

---

## 📖 Learn More

* [pg (node-postgres)](https://node-postgres.com/)
* [dotenv](https://www.npmjs.com/package/dotenv)

---

## 👤 Author

**Mohammed Nafee**

