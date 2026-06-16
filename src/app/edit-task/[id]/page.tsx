"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function EditTask() {

    const { id } = useParams();
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("low");
    const [status, setStatus] = useState("todo");
    const [assignedTo, setAssignedTo] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {

        async function fetchTask() {

            const response = await fetch(`/api/tasks`);

            const tasks = await response.json();

            const task = tasks.find((t: any) => t._id === id);

            if (!task) return;

            setTitle(task.title);
            setDescription(task.description);
            setPriority(task.priority);
            setStatus(task.status);
            setAssignedTo(task.assignedTo);
            setDueDate(task.dueDate?.split("T")[0] || "");
        }

        fetchTask();

    }, [id]);
    useEffect(() => {
    const saved = localStorage.getItem("darkMode");

    if (saved !== null) {
        setDarkMode(JSON.parse(saved));
    }
}, []);
    async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch(`/api/tasks/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            description,
            priority,
            status,
            assignedTo,
            dueDate,
        }),
    });

    router.push("/dashboard");
}
   

return (
    <>
        <Navbar />

         <div
            className={`min-h-screen ${
                darkMode
                    ? "bg-gray-900 text-white"
                    : "bg-[#ead2b3] text-black"
            }`}
        >
               <div
                className={`max-w-3xl mx-auto mt-10 p-8 rounded-2xl shadow-xl ${
                    darkMode
                        ? "bg-gray-800 text-white"
                        : "bg-white text-black"
                }`}
            >
            <h1 className="text-5xl font-bold text-center text-teal-600 mb-8">
                Edit Task
            </h1>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
            >

                <input
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    placeholder="Task Title"
                   className={`w-full p-3 rounded-xl border-2 ${
    darkMode
        ? "bg-gray-700 text-white border-gray-600"
        : "bg-white text-black border-gray-300"
}`}
                />

                <textarea
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    placeholder="Description"
                    className={`w-full p-3 rounded-xl border-2 ${
    darkMode
        ? "bg-gray-700 text-white border-gray-600"
        : "bg-white text-black border-gray-300"
}`}
                />

                <select
                    value={priority}
                    onChange={(e)=>setPriority(e.target.value)}
                    className={`w-full p-3 rounded-xl border-2 ${
    darkMode
        ? "bg-gray-700 text-white border-gray-600"
        : "bg-white text-black border-gray-300"
}`}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>

                <select
                    value={status}
                    onChange={(e)=>setStatus(e.target.value)}
                    className={`w-full p-3 rounded-xl border-2 ${
    darkMode
        ? "bg-gray-700 text-white border-gray-600"
        : "bg-white text-black border-gray-300"
}`}
                >
                    <option value="todo">To Do</option>
                    <option value="inprogress">In Progress</option>
                    <option value="done">Done</option>
                </select>

                <input
                    value={assignedTo}
                    onChange={(e)=>setAssignedTo(e.target.value)}
                    placeholder="Assigned To"
                   className={`w-full p-3 rounded-xl border-2 ${
    darkMode
        ? "bg-gray-700 text-white border-gray-600"
        : "bg-white text-black border-gray-300"
}`}
                />

                <input
                    type="date"
                    value={dueDate}
                    onChange={(e)=>setDueDate(e.target.value)}
                    className={`w-full p-3 rounded-xl border-2 ${
    darkMode
        ? "bg-gray-700 text-white border-gray-600"
        : "bg-white text-black border-gray-300"
}`}
                />

                <button
                    type="submit"
                    className={`text-5xl font-bold text-center mb-8 ${
    darkMode ? "text-cyan-400" : "text-teal-600"
}`}
                >
                    Save Changes
                </button>

            </form>
            </div>
        </div>
    </>
);
};
