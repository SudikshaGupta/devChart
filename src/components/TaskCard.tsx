import Link from "next/link";

type TaskCardProps = {
    title: string;
    description: string;
    priority: string;
    completed?: boolean;
    assignedTo?: string;
    dueDate?: string;
    id?: string;
    darkMode?: boolean;
    onDelete?: (id: string) => void;
};

const TaskCard = ({
    id,
    title,
    description,
    priority,
    assignedTo,
    dueDate,
    darkMode,
    onDelete,
}: TaskCardProps) => {

    const bgClass =
        priority.toLowerCase() === "high"
            ? "bg-red-400"
            : priority.toLowerCase() === "medium"
            ? "bg-yellow-300"
            : "bg-green-300";
            


    return (
        <div
    draggable
    
    onDragStart={(e) => {
        if (id) {
            e.dataTransfer.setData("taskId", id);
        }
    }}
    className={`w-72 rounded-xl p-4 mb-4 cursor-grab shadow-lg hover:scale-105 transition-all duration-200 ${
    darkMode
? "bg-slate-800 text-white border border-slate-600"
        : bgClass
}`}
>
            <h2 className="font-bold text-xl mb-3">
     {title}
</h2>

<p className="mb-2">
    <span className="font-semibold">Description:</span> {description}
</p>

<p className="mb-2">
    <span className="font-semibold">Priority: </span> 
     <span
        className={
            darkMode
                ? priority.toLowerCase() === "high"
                    ? "text-red-400 font-bold"
                    : priority.toLowerCase() === "medium"
                    ? "text-yellow-300 font-bold"
                    : "text-green-400 font-bold"
                : ""
        }
    >
        {priority}
        </span>
</p>

{assignedTo && (
    <p className="mb-2">
        <span className="font-semibold">Assigned To:</span> {assignedTo}
    </p>
)}

{dueDate && (
    <p className="mb-2">
        <span className="font-semibold">Due Date:</span>{" "}
        {new Date(dueDate).toLocaleDateString()}
    </p>
)}
            <div className="flex justify-between mt-4">

    <Link
    href={`/edit-task/${id}`}
    className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
>
    Edit
</Link>

    <button
        onClick={() => id && onDelete && onDelete(id)}
        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
    >
         Delete
    </button>

</div>

        </div>
    );
};

export default TaskCard;