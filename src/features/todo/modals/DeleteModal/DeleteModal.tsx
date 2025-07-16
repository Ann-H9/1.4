import { Button } from '../../../../shared/ui/Button/Button';
import Modal from '../../../../shared/ui/Modal/Modal';
import styles from './DeleteModal.module.scss'; 

interface DeleteModalProps {
  onDelete: () => void;
  onClose: () => void;
}

export const DeleteModal = ({ onDelete, onClose }: DeleteModalProps) => {
  return (
    <Modal>
      <div className={styles['delete-modal']}>
        <p>Точно удалить задачу?</p>
        <div className={styles["delete-modal__actions"]}>
          <Button title="Удалить" onClick={onDelete} />
          <Button title="Выйти" outline onClick={onClose} />
        </div>
      </div>
    </Modal>
  );
};