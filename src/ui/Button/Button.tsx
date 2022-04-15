import { MouseEventHandler } from 'react';
import s from './button.module.css';

interface IButton {
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: 'accent' | 'secondary';
}

export default function Button({
  children,
  onClick,
  type = 'accent',
}: IButton) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`${s.button} ${s[`button_type_${type}`]}`}
    >
      {children}
    </button>
  );
}
