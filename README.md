# 🚀 Node.js CI/CD Pipeline

This is a simple Node.js application demonstrating a CI/CD pipeline using **GitHub Actions** and **Docker**.

---

## 📦 Features

- Node.js + Express server
- Docker support
- CI/CD with GitHub Actions

---

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/rxm-gupta/nodejs-cicd-pipeline.git
cd nodejs-cicd-pipeline
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the app
```bash
npm start
```
➡️ Visit: [http://localhost:3000](http://localhost:3000)

### 4. Run tests (if available)
```bash
npm test
```

---

## 🐳 Docker Support

### Build the Docker image
```bash
docker build -t nodejs-cicd-app .
```

### Run the Docker container
```bash
docker run -p 3000:3000 nodejs-cicd-app
```

---

## ⚙️ CI/CD with GitHub Actions

The GitHub Actions workflow (located in `.github/workflows/`) performs:

- 🔍 Dependency Installation
- ✅ Test Execution
- 🐳 Docker Image Build

---

## 👨‍💻 Author

Built with ❤️ by [@rxm-gupta](https://github.com/rxm-gupta)
