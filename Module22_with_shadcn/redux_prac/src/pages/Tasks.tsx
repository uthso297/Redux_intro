import TaskCard from "@/modules/TaskCard";
import type { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";

const Tasks = () => {
    const tasks = useSelector((state: RootState) => state.tasks.task)
    const handleDelete = (id: string) => {
        // setTasks((prev) => prev.filter((task) => task.id !== id));
        console.log('deleting', id);
    };

    const handleToggleComplete = (id: string) => {
        // setTasks((prev) =>
        //     prev.map((task) =>
        //         task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
        //     )
        // );
        console.log('toogling', id);
    };
    console.log(tasks);
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <h1 className="text-2xl font-bold mb-6">Task List</h1>
            {tasks.length === 0 ? (
                <p className="text-gray-500">No tasks available.</p>
            ) : (
                tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        onDelete={handleDelete}
                        onToggleComplete={handleToggleComplete}
                    />
                ))
            )}
        </div>
    );
};

export default Tasks;