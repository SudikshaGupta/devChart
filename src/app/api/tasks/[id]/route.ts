import connectDB from "@/lib/mongodb";
import Task from "@/models/Tasks";

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectDB();

        const { id } = await params;

        await Task.findByIdAndDelete(id);

        return Response.json(
            { message: "Task deleted successfully" },
            { status: 200 }
        );

    } catch (error) {
        console.log(error);

        return Response.json(
            { message: "Failed to delete task" },
            { status: 500 }
        );
    }
}
export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectDB();

        const { id } = await params;
        const body = await request.json();

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            body,
            { new: true }
        );

        return Response.json(updatedTask);

    } catch (error) {
        console.log(error);

        return Response.json(
            { message: "Failed to update task" },
            { status: 500 }
        );
    }
}