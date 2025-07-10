import type { Itask } from '@/Redux/features/taksks/taskSlice';
import React from 'react';
// import { AddTask } from './AddTask';

type TaskCardProps = {
  task: Itask;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
};

const TaskCard: React.FC<TaskCardProps> = ({ task, onDelete, onToggleComplete }) => {
  return (
    <>
    

      <div className={`border rounded-md shadow-md p-4 mb-4 w-full max-w-md bg-white ${task.isCompleted ? 'opacity-50' : ''}`}>
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold text-gray-800">{task.title}</h2>
          <span
            className={`text-xs px-2 py-1 rounded-full ${task.priority === 'high'
                ? 'bg-red-100 text-red-700'
                : task.priority === 'medium'
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-green-100 text-green-700'
              }`}
          >
            {task.priority}
          </span>
        </div>
        <p className="text-sm text-gray-600 mt-1">{task.description}</p>
        <p className="text-sm text-gray-500 mt-2">Due: {task.dueDate}</p>

        <div className="flex gap-2 mt-4">
          <button
            onClick={() => onToggleComplete(task.id)}
            className={`px-3 py-1 text-sm rounded-md ${task.isCompleted ? 'bg-green-200 text-green-800' : 'bg-blue-200 text-blue-800'
              }`}
          >
            {task.isCompleted ? 'Completed' : 'Mark as Done'}
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="px-3 py-1 text-sm bg-red-200 text-red-800 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>

    </>
  );
};

export default TaskCard;
