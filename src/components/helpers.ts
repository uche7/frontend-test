export interface Task {
  id: string;
  name: string;
  completed: boolean;
}

export interface TaskListProps {
  tasks: Task[];
  onEditTask: (task: Task) => void;
  onToggleTask: (id: string) => void;
}

export interface TaskEditorProps {
  task: Task;
  onSave: (task: Task) => void;
  onDelete: () => void;
  onClose: () => void;
}

export interface AddTaskButtonProps {
  onAddTask: (taskName: string) => void;
}
