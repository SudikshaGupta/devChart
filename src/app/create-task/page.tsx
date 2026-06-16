"use client";

import Navbar from '@/components/Navbar'
import React, { useState, useEffect } from "react";

const CreateTask = () => {

const [title,setTitle] = useState("");
const [description,setDescription] = useState("");
const [priority,setPriority] = useState("low");
const [status, setStatus] = useState("todo");
const [assignedTo, setAssignedTo] = useState("");
const [dueDate, setDueDate] = useState("");
const [darkMode, setDarkMode] = useState(false);
useEffect(() => {
    const saved = localStorage.getItem("darkMode");

    if (saved !== null) {
        setDarkMode(JSON.parse(saved));
    }
}, []);

async function handleSubmit(event: React.FormEvent){
    event.preventDefault();

    try{
        const response = await fetch("/api/tasks",{
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, description, priority, status, assignedTo, dueDate }),
        });

        const data = await response.json();
        console.log(data);

        setTitle("");
        setDescription("");
        setPriority("low");
        setStatus("todo");
        setAssignedTo("");
        setDueDate("");

        alert("Task created successfully!");
    } catch (error) {
        console.error("Error creating task:", error);
        alert("Failed to create task.");
    }
}

    return (
        <div>
            <Navbar />
            <div
className={`min-h-screen ${
darkMode
? "bg-gray-900 text-white"
: "bg-[#ead2b3] text-black"
}`}
>
            <h1 className="text-6xl font-bold m-3 p-3 text-teal-200 text-outline-black">Want to create a new task?</h1>

            <form onSubmit={handleSubmit} className="flex justify-center flex-col gap-4 m-4 p-3">

                <h3 className="text-2xl">Whats the task name?</h3>
                <input type="text" placeholder="Task name" value={title}  onChange={(event)=>{setTitle(event.target.value)}} className={`w-full p-3 rounded-xl ${
    darkMode
        ? "bg-gray-700 text-white"
        : "bg-white text-black"
}`} />

                <h3 className="text-2xl">Describe it!!</h3>
                <textarea  placeholder="Task description" value={description} onChange={(event)=>{setDescription(event.target.value)}} className={`w-full p-3 rounded-xl ${
    darkMode
        ? "bg-gray-700 text-white"
        : "bg-white text-black"
}`} ></textarea>

                <h3 className="text-2xl">How important is it?</h3>
                <select
                    value={priority}
                    onChange={(event)=>{setPriority(event.target.value)}}
                    className={`w-full p-3 rounded-xl ${
    darkMode
        ? "bg-gray-700 text-white"
        : "bg-white text-black"
}`}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <h3 className="text-2xl">Task Status</h3>

<select
    value={status}
    onChange={(e)=>setStatus(e.target.value)}
    className={`w-full p-3 rounded-xl ${
darkMode
? "bg-gray-700 text-white"
: "bg-white text-black"
}`}
>
    <option value="todo">To Do</option>
    <option value="inprogress">In Progress</option>
    <option value="done">Done</option>
</select>

<h3 className="text-2xl">Assigned To</h3>

<input
    type="text"
    placeholder="Member name"
    value={assignedTo}
    onChange={(e)=>setAssignedTo(e.target.value)}
    className={`w-full p-3 rounded-xl ${
darkMode
? "bg-gray-700 text-white"
: "bg-white text-black"
}`}
/>

<h3 className="text-2xl">Due Date</h3>

<input
    type="date"
    value={dueDate}
    onChange={(e)=>setDueDate(e.target.value)}
    className={`w-full p-3 rounded-xl ${
darkMode
? "bg-gray-700 text-white"
: "bg-white text-black"
}`}
/>              

                <button type="submit"  className="w-full p-3 bg-teal-500 text-white font-bold rounded-xl hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-white appearance-none" >Create Task</button>

            </form>
        </div>
        </div>
    )
}

export default CreateTask