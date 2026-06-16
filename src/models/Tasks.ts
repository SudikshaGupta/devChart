import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "todo",
    },
    assignedTo: {
        type: String,
        default: "",
    },
    dueDate: {
        type: String,
        default: "",
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const Task =
    mongoose.models.Task || mongoose.model("Task", TaskSchema);

export default Task;