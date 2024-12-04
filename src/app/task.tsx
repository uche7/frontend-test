import React, { useState } from "react";
import { Task } from "@/components/helpers";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import TaskEditor from "../components/TaskEditor";
import AddTaskButton from "../components/AddTaskButton";

/** Task Management */
export default function TaskManagement() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", name: "Training at the Gym", completed: true },
    { id: "2", name: "Play Paddle with friends", completed: false },
    { id: "3", name: "Burger BBQ with family", completed: false },
  ]);

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const addTask = (taskName: string) => {
    setTasks([
      ...tasks,
      { id: Date.now().toString(), name: taskName, completed: false },
    ]);
  };

  const updateTask = (updatedTask: Task) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setSelectedTask(null);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setSelectedTask(null);
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEditTask = (task: Task) => {
    console.log("Editing task:", task);
    setSelectedTask(task);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 lg:flex-row">
      {/* TODO Section */}
      <div
        className={`${
          selectedTask ? "hidden lg:flex" : "flex"
        } w-full lg:w-1/4 flex-col h-screen relative shadow-right border-r-4 overflow-y-auto`}
      >
        <Header />
        <TaskList
          tasks={tasks}
          onEditTask={handleEditTask}
          onToggleTask={toggleTaskCompletion}
        />
        <div className="mt-auto">
          <AddTaskButton onAddTask={addTask} />
        </div>
      </div>

      {/* Edit Task Section */}
      <div
        className={`${
          selectedTask ? "flex" : "hidden lg:flex"
        } w-full lg:w-3/4 flex-col bg-white`}
      >
        <div className="bg-[#3556AB] font-[500] text-[24px] text-center text-[#FFFFFF] leading-[28.13px] m-4 py-9">
          Edit Task
        </div>
        {selectedTask ? (
          <TaskEditor
            task={selectedTask}
            onSave={updateTask}
            onDelete={() => deleteTask(selectedTask.id)}
            onClose={() => setSelectedTask(null)}
          />
        ) : (
          <div className="text-center text-gray-500">
            Hello Jhon &#9995;! Please select a task to edit.
          </div>
        )}
      </div>
    </div>
  );
}
