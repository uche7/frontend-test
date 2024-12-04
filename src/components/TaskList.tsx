import React from "react";
import { TaskListProps } from "./helpers";

/** Task List */
const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onEditTask,
  onToggleTask,
}) => {
  return (
    <div className="p-4 space-y-2 ">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between p-3 bg-white rounded-md shadow-md"
        >
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
              className="w-5 h-5 border-[#071D55] border-[1px] rounded-full cursor-pointer 
             appearance-none bg-white checked:bg-[#53DA69] checked:border-[#49C25D] 
             focus:ring-1 focus:ring-[#49C25D] hover:shadow-md transition-all"
            />

            <p
              className={`${
                task.completed ? "line-through text-gray-400" : ""
              } text-[#071D55] text-[16px] leading-[16.08px] `}
            >
              {task.name}
            </p>
          </div>
          <button
            onClick={() => onEditTask(task)}
            className="font-[500] text-[#071D55] text-[16px] border-[1px] border-[#071D55] px-2 py-1 rounded leading-[18.75px]"
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
