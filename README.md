# ✈️ SearchFlights

**SearchFlights** is a flight search and booking application built using **Next.js** and **MongoDB**, designed to help users search, save, and manage flight details.

---

## 📌 Project Overview

- **Tech Stack:** Next.js, MongoDB, Node.js  
- **Deployment:** Hosted on Railway  
- **Functionality:**  
  ✅ Search flights by destination & date  
  ✅ Save flights for later viewing  
  ✅ Retrieve saved flights  

---

## 🛠️ Project Setup & Execution  

### 1️⃣ Creating the Project  
I created the project using **Next.js** with the following command:  
```sh
npx create-next-app@latest searchflights
cd searchflights
```

### 2️⃣ Installing Dependencies  
I installed the required dependencies:
```sh
npm install
```

### 3️⃣ Setting Up MongoDB Atlas  
I created a MongoDB Atlas cluster and obtained the connection string.  
Then, I whitelisted my IP (`0.0.0.0/0` for open access).

### 4️⃣ Configuring Environment Variables  
I created a `.env.local` file in the root directory and added the following:
```env
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_API_BASE_URL=https://your-deployment-url/api
```
- Replaced `your_mongodb_connection_string` with my MongoDB Atlas connection string.
- Replaced `your-deployment-url` with my Railway deployment URL.
- I also set these variables in Railway → Project Settings → Variables.

### 5️⃣ Implementing Flight Search & Save Features  
- I set up API routes in the `/pages/api/` directory.
- I integrated MongoDB to store and retrieve flight data.
- I used the fetch API to communicate with the backend.

### 6️⃣ Running the Application Locally  
To test the application on my local machine, I ran:
```sh
npm run dev
```
🔗 App was available at `http://localhost:3000`

---

## 🔗 API Integration  
| Method | Endpoint            | Description                        |
|--------|---------------------|------------------------------------|
| GET    | `/api/flights`      | Fetch available flights           |
| POST   | `/api/save-flight`  | Save a flight to favorites        |
| GET    | `/api/saved-flights` | Retrieve saved flights            |

Ensure that API calls correctly reference the `NEXT_PUBLIC_API_BASE_URL`.

---

## 🚀 Deployment on Railway  
1️⃣ I pushed my code to GitHub.  
2️⃣ Connected the repository to Railway for deployment.  
3️⃣ Set up environment variables (`MONGODB_URI`, `NEXT_PUBLIC_API_BASE_URL`).  
4️⃣ Railway automatically built and deployed the application.  

Images
![Screenshot 2025-03-17 232002](https://github.com/user-attachments/assets/194334c4-6c52-4705-884f-972343c43970)

![Screenshot 2025-03-17 232048](https://github.com/user-attachments/assets/e1c45c97-7e22-441c-8891-73aecbfca95c)

![{263CA1F6-A11D-45A1-8FC0-84BC8B348BF3}](https://github.com/user-attachments/assets/bb304168-312a-4660-a927-5b76442c9ce8)

