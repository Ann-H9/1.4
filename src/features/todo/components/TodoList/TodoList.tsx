import { useState } from 'react';
import { Button } from '../../../../shared/ui/Button/Button';
import { taskList as initialTasks } from '../../../../shared/api/serverData/taskList';
import { AddEditTaskModal } from '../../modals/AddEditTaskModal/AddEditTaskModal';
import { DeleteModal } from '../../modals/DeleteModal/DeleteModal';
import { TaskCard } from '../TaskCard/TaskCard';
import Add from '@/shared/assets/icons/add.svg?react';
import styles from '@/features/todo/components/TodoList/TodoList.module.scss';
import { Task, Priority, Status } from '../../../../types';

export const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleAddTask = () => {
    setCurrentTask(null);
    setIsEditMode(false);
    setShowAddEditModal(true);
  };

  const handleEditTask = (task: Task) => {
    setCurrentTask(task);
    setIsEditMode(true);
    setShowAddEditModal(true);
  };

  const handleDeleteClick = (task: Task) => {
    setCurrentTask(task);
    setShowDeleteModal(true);
  };

  const handleSaveTask = (taskData: { title: string; priority: Priority }) => {
    if (isEditMode && currentTask) {
      // Update existing task
      setTasks(tasks.map(task => 
        task.id === currentTask.id 
          ? { ...task, title: taskData.title, priority: taskData.priority }
          : task
      ));
    } else {
      // Add new task
      const newTask: Task = {
        id: Date.now().toString(),
        title: taskData.title,
        priority: taskData.priority,
        status: Status.TODO,
        progress: 0
      };
      setTasks([...tasks, newTask]);
    }
    setShowAddEditModal(false);
  };

  const handleDeleteTask = () => {
    if (currentTask) {
      setTasks(tasks.filter(task => task.id !== currentTask.id));
    }
    setShowDeleteModal(false);
  };

  const closeModal = () => {
    setShowAddEditModal(false);
    setShowDeleteModal(false);
  };

  return (
    <>
      <div className={styles['page-wrapper']}>
        <div className={styles['top-title']}>
          <h2>Список задач</h2>
          <Button 
            title="Добавить задачу" 
            icon={<Add />} 
            onClick={handleAddTask} 
          />
        </div>
        <div className="task-container">
          {tasks.map((task) => (
            <TaskCard 
              key={task.id} 
              task={task} 
              onEdit={() => handleEditTask(task)}
              onDelete={() => handleDeleteClick(task)}
            />
          ))}
        </div>
      </div>
      
      {showAddEditModal && (
        <AddEditTaskModal
          isEditMode={isEditMode}
          task={currentTask}
          onSave={handleSaveTask}
          onClose={closeModal}
        />
      )}
      
      {showDeleteModal && (
        <DeleteModal
          onDelete={handleDeleteTask}
          onClose={closeModal}
        />
      )}
    </>
  );
};