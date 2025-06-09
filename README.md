
# 🏥 Healthcare Patient Management System

A simple full-stack web application to manage patient records, including their personal and medical details. Built using Node.js, Express, MongoDB, and plain HTML/CSS/JavaScript.

---

## 🔧 Tech Stack

- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via MongoDB Atlas)

---

## 📦 Features

- ✅ Add New Patient
- ✅ View All Patients
- ✅ Delete Patient Records
- 📌 Patient Fields:
  - Name
  - Age
  - Gender
  - Contact
  - Allergies
  - Medical History
  - Prescriptions
  - Doctor Notes
  - Visit Dates

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/patient-management-system.git
cd patient-management-system
```

### 2. Setup Backend

cd backend
npm install
```

```
MONGO_URI=mongodb+srv://Shreyam:mongodb05@healthcaredb.flxl5z3.mongodb.net/patientDB?retryWrites=true&w=majority&appName=HealthcareDB

Start the server:

```bash
node server.js
```

You should see:

```
MongoDB connected
Server running on port 5000
```

---

### 3. Setup Frontend

Go back to the root folder and open `index.html` in any browser:

```bash
cd ..
start index.html


## 📄 License

This project is licensed under the MIT License.

---

## 📁 Project Structure

```
📦 patient-management-system/
├── 📁 backend/
│   ├── models/
│   │   └── Patient.js
│   ├── routes/
│   │   └── patientRoutes.js
│   ├── server.js
│   └── .env
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧪 API Testing (optional via cURL)

```bash
curl -X POST http://localhost:5000/api/patients \
-H "Content-Type: application/json" \
-d "{\"name\":\"Test\",\"age\":25,\"gender\":\"Male\",\"contact\":\"1234567890\",\"allergies\":[],\"medicalHistory\":[],\"prescriptions\":[],\"doctorNotes\":[],\"visitDates\":[]}"
```

---

> Made with ❤️ for learning and building full-stack skills.
