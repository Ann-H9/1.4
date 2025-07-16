import classNames from 'classnames';
import DeleteIcon from '@/shared/assets/icons/delete.svg?react';
import EditIcon from '@/shared/assets/icons/edit.svg?react';
import styles from './TaskCard.module.scss';
import { CircularProgressBar } from '../../../../shared/ui/Progress/CircularProgressBar/CircularProgressBar';
import { PRIORITY_RU_LABELS, STATUS_RU_LABELS, TaskCardProps } from '../../../../types';

export const TaskCard: React.FC<TaskCardProps> = ({ 
  task, 
  className,
  onEdit,
  onDelete
}) => {
  const { title, priority, status, progress } = task;

  return (
    <div className={classNames(styles['task-card'], className)}>
      <div className='flex w-100'>
        <span className={styles['task-title']}>Задача</span>
        <span className={styles.task}>{title}</span>
      </div>

      <div className="flex">
        <span className={styles['priority-title']}>Приоритет</span>
        <span className={classNames(styles.priority, styles[`priority--${priority}`])}>
          {PRIORITY_RU_LABELS[priority]}
        </span>
      </div>

      <div className={styles['task-status-wrapper']}>
        <button className={classNames(styles.status, styles[`status--${status}`])}>
          {STATUS_RU_LABELS[status]}
        </button>
      </div>

      <div className={styles.progress}>
        <CircularProgressBar percentage={progress} sqSize={24} strokeWidth={2} />
      </div>

      <div className={styles.actions}>
        <EditIcon className='mr-20 cp' onClick={onEdit} />
        <DeleteIcon className="cp" onClick={onDelete} />
      </div>
    </div>
  );
};