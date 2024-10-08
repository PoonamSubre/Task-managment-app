# Task Management App

## Overview

This is a simple task management application built with FastAPI for the backend and React for the frontend. The application allows users to create, read, update, and delete tasks.

## Table of Contents

- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Live Demo](#live-demo)

## Backend Setup

### Prerequisites

- Python 3.7+
- SQLite (for local development)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/task-management-app.git
   cd task-management-app/backend

2. **Create a virtual environment and activate it:**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`

4. **Install the dependencies:**

    ```bash
    pip install -r requirements.txt

5. **Run the application:**
   ```bash
   uvicorn app.main:app --reload

6. **Backend is now running at:**
   ```bash
   http://127.0.0.1:8000

### API Endpoints

- GET /api/tasks: Retrieve all tasks
- POST /api/tasks: Create a new task
- PUT /api/tasks/{task_id}: Update a task's status
- DELETE /api/tasks/{task_id}: Delete a task

  # Frontend Setup

  ### Prerequisites

  - Node.js
  - npm or yarn

  ###  Installation

1. **Navigate to the frontend directory:**
   ```bash
   cd ../frontend

2. **Install the dependencies:**
   ```bash
   npm install

3. **Run the application:**
   ```bash
   npm start

4. **Frontend is now running at:**
   ```bash
   http://localhost:3000

###  Live Demo
   - Frontend URL: https://task-managment-app-bvfl.vercel.app
   - Backend URL: https://task-managment-app-19.onrender.com/api/tasks

### Contributing

We welcome contributions! Please fork the repo, create a new branch, and submit a pull request. Thank you!
    
