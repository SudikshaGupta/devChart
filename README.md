# devChart

## Project Overview

devChart is a full-stack task management web application that helps users organize and track their work using a Kanban-style dashboard. Tasks can be created, edited, deleted, prioritized, and moved between different stages through drag-and-drop functionality.

The application is built using Next.js and MongoDB Atlas and provides a clean and responsive interface with support for both light and dark themes.

---

## Features Implemented

- Create new tasks
- Edit existing tasks
- Delete tasks
- Assign tasks to team members
- Set due dates
- Priority management (High, Medium, Low)
- Kanban board with three stages:
  - To Do
  - In Progress
  - Done
- Drag and drop task movement
- Dark mode and light mode
- Sort tasks by priority
- Responsive user interface
- MongoDB Atlas database integration

---

## Technology Stack Used

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend
- Next.js API Routes
- Mongoose

### Database
- MongoDB Atlas

### Deployment
- Vercel

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/SudikshaGupta/devChart.git
```

### 2. Move into the project directory

```bash
cd devChart
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create an environment file

Create a file named `.env.local` and add:

```env
MONGODB_URI=your_mongodb_connection_string
```

### 5. Start the development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Deployment Instructions

The project is deployed using **Vercel**.

To deploy:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the required environment variable:

```
MONGODB_URI
```

4. Deploy the project.

The live application will be generated automatically.

---

## Screenshots of the Working Website

### Home Page

<img width="955" height="460" alt="image" src="https://github.com/user-attachments/assets/d60a5901-33ed-42c5-930a-4b82d23d428a" />

### Dashboard

<img width="959" height="505" alt="image" src="https://github.com/user-attachments/assets/3483ad41-1d77-4727-8634-7df63431f5a0" />

<img width="959" height="508" alt="image" src="https://github.com/user-attachments/assets/19b088d3-11bb-4a7a-a293-a695480a5c9c" />


### Create Task Page

<img width="959" height="506" alt="image" src="https://github.com/user-attachments/assets/8e210222-5803-4f76-87f8-5c2fc62d64d7" />

---

## Known Limitations

- User authentication is not implemented.
- Tasks are shared across all users.
- No search or filtering functionality.
- No notifications or reminders.
- No file attachments for tasks.
- No team collaboration or role management.

---

## Live Demo

https://dev-chart-theta.vercel.app/

---

## GitHub Repository

https://github.com/SudikshaGupta/devChart

---

## Author

**Sudiksha Gupta**

Developed as a Full Stack Web Development project using Next.js, TypeScript, Tailwind CSS, MongoDB Atlas, and Mongoose.
