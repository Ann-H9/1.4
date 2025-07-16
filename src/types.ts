export enum Priority {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
}

export enum Status {
  TODO = 'todo',
  PROGRESS = 'progress',
  DONE = 'done',
}

export type Task = {
  id: string;
  title: string;
  priority: Priority;
  status: Status;
  progress: number;
};

export const PRIORITY_RU_LABELS = {
  [Priority.HIGH]: 'Высокий',
  [Priority.MEDIUM]: 'Средний',
  [Priority.LOW]: 'Низкий',
};

export const STATUS_RU_LABELS = {
  [Status.TODO]: 'К выполнению',
  [Status.PROGRESS]: 'В процессе',
  [Status.DONE]: 'Выполнено',
};

export interface TaskCardProps {
  task: Task;
  className?: string;
  onEdit: () => void;
  onDelete: () => void;
}