# 📄 Resume Generator Application with Geolocation Tracking

## 🌟 Project Overview
The **Resume Generator Application** allows users to input their details via a form, generate a resume **in PDF format**, and store the data in a **backend database (MySQL/MongoDB)**. The application integrates the **IPStack API** to fetch the user's geolocation automatically.

## 🚀 Features
✅ **Dynamic Resume Form**: Users can enter personal details, work experience, skills, and projects.  
✅ **Geolocation Tracking**: Automatically detects and fills in the user's **City, Region, and Country**.  
✅ **Resume Templates**: Users can choose from **three resume templates**.  
✅ **PDF Resume Generation**: Converts the resume into a **downloadable PDF** using **WeasyPrint**.  
✅ **Database Storage**: Saves user resume details in **MySQL/MongoDB**.  
✅ **RESTful API**: Built with **FastAPI**, providing endpoints for form submission, PDF generation, and fetching location.

---

## 🛠 Tech Stack
**Frontend:**  
- HTML, CSS (Tailwind/Bootstrap)  
- JavaScript (Fetch API for backend communication)

**Backend:**  
- **FastAPI (Python)**  
- **MySQL / MongoDB** (Choose one)  
- **WeasyPrint** (For PDF Generation)  
- **IPStack API** (For Geolocation)

---

## 📥 Installation Guide

### 🔹 Step 1: Clone the Repository

git clone https://github.com/yourusername/resume-generator.git
cd resume-generator

Step 2: Set Up Virtual Environment
python -m venv venv

Windows
venv\Scripts\activate

Mac/Linux
source venv/bin/activate

Step 3: Install Dependencies
pip install -r requirements.txt

Step 4: Configure Database (MySQL)
CREATE DATABASE resumes_db;

Update database.py with your database credentials:
DATABASE_URL = "mysql+pymysql://root:password@localhost/resumes_db"

Running the Application
1️⃣ Start the Backend Server
Run the FastAPI server:
uvicorn main:app --reload
