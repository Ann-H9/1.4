import classNames from "classnames";
import { MouseEventHandler, ReactNode } from "react";
import styles from './Button.module.scss';

type ButtonProps = {
  title: string;
  icon?: ReactNode | string;
  outline?: boolean;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ title, icon, outline, disabled, onClick }: ButtonProps) => {
  return (
    <button
      className={classNames(
        styles.button,
        outline && styles.outline,
        disabled && styles.disabled
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {title}
    </button>
  );
}