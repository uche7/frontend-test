import React, { useState } from "react";
import Inputs from "@/library/inputs/inputs";
import { TaskEditorProps } from "./helpers";
import Buttons from "@/library/buttons/buttons";

/** Task Editor */
const TaskEditor: React.FC<TaskEditorProps> = ({ task, onSave, onDelete }) => {
  const [taskName, setTaskName] = useState(task.name || "");

  const handleSave = () => {
    onSave({ ...task, name: taskName });
  };

  return (
    <div className="p-4 flex flex-col h-[80vh] relative">
      <h2 className="text-lg font-[400] text-[14px] leading-[19.44px] mb-4">
        Task Name
      </h2>
      <Inputs
        inputType="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="w-full border p-3 rounded mb-4 text-[#0D2972]"
        Name={"name"}
      />

      <div className="mt-auto flex space-x-2">
        <Buttons
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          onClick={onDelete}
          whileTap={{ scale: 0.9 }}
          title="Delete"
          type="button"
          className="bg-[#720D0D] w-[121px] text-white px-4 py-2 rounded"
        >
          Delete
        </Buttons>
        <Buttons
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          onClick={handleSave}
          whileTap={{ scale: 0.9 }}
          title="Save"
          type="button"
          className="bg-[#0D2972] w-full text-white px-4 py-2 rounded"
        >
          Save
        </Buttons>
      </div>
    </div>
  );
};

export default TaskEditor;
