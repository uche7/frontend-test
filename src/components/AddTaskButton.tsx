import React, { useState } from "react";
import Image from "next/image";
import Add_icon from "@/assets/images/add-button.svg";
import Buttons from "@/library/buttons/buttons";
import { AddTaskButtonProps } from "./helpers";

/** Add Task Button */
const AddTaskButton: React.FC<AddTaskButtonProps> = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = () => {
    if (taskName.trim()) {
      onAddTask(taskName);
      setTaskName("");
    }
    setIsAdding(false);
  };

  const toggleAddTask = () => {
    setIsAdding((prev) => !prev);
  };

  return (
    <div>
      {!isAdding && (
        <Buttons
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          onClick={toggleAddTask}
          whileTap={{ scale: 0.9 }}
          title="Crete a new task"
          type="button"
          className="flex flex-col m-3 float-right bottom-0"
        >
          <Image src={Add_icon} alt={"Add Icon"} width={40} height={40} />
        </Buttons>
      )}
      {isAdding && (
        <div className="flex items-center p-4">
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="flex-grow border p-2 rounded mr-2"
            placeholder="Add a new task..."
            required
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTaskButton;
