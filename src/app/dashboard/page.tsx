"use client";

import Navbar from "@/components/Navbar"
import TaskCard from "@/components/TaskCard";
import React,{ useState, useEffect } from "react";

type Task = {
    _id: string;
    title: string;
    description: string;
    priority: string;
    completed: boolean;
    status: string;
    assignedTo?: string;
    dueDate?: string;
};

export default function Home(){

    const [tasks,setTasks] = useState<Task[]>([]);
    const [darkMode, setDarkMode] = useState(false);
    const [sortBy, setSortBy] = useState("none");

    async function fetchTasks() {

      const response = await fetch("/api/tasks");
      const data = await response.json();
      setTasks(data);
    }

    useEffect(() => {
      fetchTasks();
    }, []);
    useEffect(() => {
    const saved = localStorage.getItem("darkMode");

    if (saved !== null) {
        setDarkMode(JSON.parse(saved));
    }
}, []);

const priorityOrder = {
    high: 3,
    medium: 2,
    low: 1,
};

const sortedTasks = [...tasks];

if (sortBy === "high") {
    sortedTasks.sort(
        (a, b) =>
            priorityOrder[b.priority.toLowerCase() as keyof typeof priorityOrder] -
            priorityOrder[a.priority.toLowerCase() as keyof typeof priorityOrder]
    );
}

if (sortBy === "low") {
    sortedTasks.sort(
        (a, b) =>
            priorityOrder[a.priority.toLowerCase() as keyof typeof priorityOrder] -
            priorityOrder[b.priority.toLowerCase() as keyof typeof priorityOrder]
    );
}

const todoTasks = sortedTasks.filter(task => task.status === "todo");
const progressTasks = sortedTasks.filter(task => task.status === "inprogress");
const doneTasks = sortedTasks.filter(task => task.status === "done");
    
    async function deleteTask(id: string) {

    await fetch(`/api/tasks/${id}`, {
        method: "DELETE",
    });

    fetchTasks();
   
}
async function moveTask(id: string, status: string) {

    await fetch(`/api/tasks/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
    });

    fetchTasks();
}


    return (
      <>
        <Navbar />
        <div
  ></div>
        <div
    className={`min-h-screen p-4 ${
        darkMode
            ? "bg-gray-900 text-white"
            : "bg-[#ead2b3] text-black"
    }`}
>

   <div className="flex justify-between items-center p-4">

    <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="border rounded-lg p-2"
    >
        <option value="none">No Sort</option>
        <option value="high">High → Low</option>
        <option value="low">Low → High</option>
    </select>

    <p className="text-lg font-semibold">
        Total: {tasks.length}
    </p>

    <button
        onClick={() => {
            const mode = !darkMode;
            setDarkMode(mode);
            localStorage.setItem("darkMode", JSON.stringify(mode));
        }}
        className="px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700"
    >
        {darkMode ? "Light Mode" : "Dark Mode"}
    </button>

</div>

<div className="grid grid-cols-3 gap-6 p-4">

    <div
    onDragOver={(e) => e.preventDefault()}
    onDrop={(e) => moveTask(e.dataTransfer.getData("taskId"), "todo")}
>
    <h2 className="text-3xl font-bold mb-4">
        To Do ({todoTasks.length})
    </h2>

        {todoTasks.length === 0 ? (
    <p className="text-gray-500 italic">
        No tasks here.
    </p>
) : (
    todoTasks.map(task => (
        <TaskCard
            key={task._id}
            id={task._id}
            title={task.title}
            description={task.description}
            priority={task.priority}
            completed={task.completed}
            assignedTo={task.assignedTo}
            dueDate={task.dueDate}
            darkMode={darkMode}
            onDelete={deleteTask}
        />
    ))
)}
    </div>

    <div
     onDragOver={(e) => e.preventDefault()}
    onDrop={(e) => moveTask(e.dataTransfer.getData("taskId"), "inprogress")}>
        <h2 className="text-3xl font-bold mb-4">
        In Progress ({progressTasks.length})
        </h2>

        {progressTasks.length === 0 ? (
    <p className="text-gray-500 italic">
        No tasks here.
    </p>
) : (
    progressTasks.map(task => (
        <TaskCard
            key={task._id}
            id={task._id}
            title={task.title}
            description={task.description}
            priority={task.priority}
            completed={task.completed}
            assignedTo={task.assignedTo}
            dueDate={task.dueDate}
            darkMode={darkMode}
            onDelete={deleteTask}
        />
    ))
)}
    </div>

    <div
     onDragOver={(e) => e.preventDefault()}
    onDrop={(e) => moveTask(e.dataTransfer.getData("taskId"), "done")}
>
        <h2 className="text-3xl font-bold mb-4">
         Done ({doneTasks.length})
        </h2>

        {doneTasks.length === 0 ? (
    <p className="text-gray-500 italic">
        No tasks here.
    </p>
) : (
    doneTasks.map(task => (
        <TaskCard
            key={task._id}
            id={task._id}
            title={task.title}
            description={task.description}
            priority={task.priority}
            completed={task.completed}
            assignedTo={task.assignedTo}
            dueDate={task.dueDate}
            darkMode={darkMode}
            onDelete={deleteTask}
        />
    ))
)}
    </div>

</div>
</div> 
      </>
    );
}