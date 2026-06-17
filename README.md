# devChart

devChart is a full-stack Task Management Web Application built using Next.js, TypeScript, Tailwind CSS, MongoDB Atlas, and Mongoose.

The application provides a Kanban-style dashboard where users can create, edit, delete, organize, and manage tasks efficiently.

---

## Features

- Create new tasks
- Edit existing tasks
- Delete tasks
- Assign tasks to team members
- Set due dates
- Priority levels (High, Medium, Low)
- Kanban dashboard with three stages:
  - To Do
  - In Progress
  - Done
- Drag and drop task movement
- Dark mode support
- Sort tasks by priority
- MongoDB Atlas integration
- Responsive user interface

---

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- MongoDB Atlas
- Mongoose
- Vercel

---

## Project Structure

```
src/
│
├── app/
│   ├── dashboard/
│   ├── create-task/
│   ├── edit-task/
│   └── api/
│
├── components/
│   ├── Navbar.tsx
│   └── TaskCard.tsx
│
├── models/
│   └── Tasks.ts
│
└── lib/
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/SudikshaGupta/devChart.git
```

Move into the project directory:

```bash
cd devChart
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file:

```env
MONGODB_URI=your_mongodb_connection_string
```

Run the development server:

```bash
npm run dev
```

Open the application at:

```
http://localhost:3000
```

---

## Usage

- Create tasks with title, description, priority, assignee, and due date.
- Move tasks between "To Do", "In Progress", and "Done" using drag and drop.
- Edit or delete tasks whenever required.
- Sort tasks based on priority.
- Switch between light and dark mode.

---

## Live Demo

https://dev-chart-theta.vercel.app/

---

## GitHub Repository

https://github.com/SudikshaGupta/devChart

---

## Author

Sudiksha Gupta

This project was developed as a Full Stack Web Development project using Next.js and MongoDB Atlas.
