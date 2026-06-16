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
    className={`w-72 rounded-xl p-3 mb-3 cursor-grab ${
    darkMode
? "bg-slate-800 text-white border border-slate-600"
        : bgClass
}`}
>
            <h2 className="font-bold text-xl">
                {title}
            </h2>
            <p className="mt-2">
                {description}
            </p>
            <p className="mt-3">
                 {priority}
            </p>
            {assignedTo && (
                <p>
                     {assignedTo}
                </p>
            )}
            {dueDate && (
                <p>
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