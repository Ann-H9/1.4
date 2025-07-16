import { useState } from 'react';
import classNames from 'classnames';
import Close from '@/shared/assets/icons/close.svg?react';
import styles from './AddEditTaskModal.module.scss'; 
import { Input } from '../../../../shared/ui/Input/Input';
import { Button } from '../../../../shared/ui/Button/Button';
import Modal from '../../../../shared/ui/Modal/Modal';
import { Priority, Task } from '../../../../types';

interface AddEditTaskModalProps {
  isEditMode: boolean;
  task: Task | null;
  onSave: (taskData: { title: string; priority: Priority }) => void;
  onClose: () => void;
}

export const AddEditTaskModal = ({ 
  isEditMode, 
  task, 
  onSave, 
  onClose 
}: AddEditTaskModalProps) => {
  const [title, setTitle] = useState(task?.title || '');
  const [priority, setPriority] = useState<Priority>(task?.priority || Priority.MEDIUM);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ title, priority });
  };

  return (
    <Modal>
      <form onSubmit={handleSubmit}>
        <div className={styles['add-edit-modal']}>
          <div className="flx-between">
            <span className={styles['modal-title']}>
              {isEditMode ? 'Редактировать задачу' : 'Добавить задачу'}
            </span>
            <Close className="cp" onClick={onClose} />
          </div>
          <Input
            label="Задача"
            placeholder="Введите текст.."
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            value={title}
          />
          <div className={styles['modal-priority']}>
            <span>Приоритет</span>
            <ul className={styles['priority-buttons']}>
              {Object.values(Priority).map((prio) => (
                <li
                  key={prio}
                  className={classNames(
                    styles[prio],
                    priority === prio && styles[`${prio}-selected`]
                  )}
                  onClick={() => setPriority(prio)}
                >
                  {prio}
                </li>
              ))}
            </ul>
          </div>
          <div className='flx-right mt-50'>
            <Button 
              title={isEditMode ? 'Редактировать' : 'Добавить'} 
              onClick={() => {}} 
              
            />
          </div>
        </div>
      </form>
    </Modal>
  );
};