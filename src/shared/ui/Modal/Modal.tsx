import styles from './Modal.module.scss';



import { ReactNode } from 'react';

export const Modal = ({ children }: { children: ReactNode }) => {
  return (
   <div className={styles["modal"]}>
      <div className={styles["modal-content"]}>{children}</div>
    </div>
  );
};

export default Modal;