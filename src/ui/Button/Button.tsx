import { MouseEventHandler, ReactNode } from 'react';
import s from './button.module.css';

interface IButton {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'accent' | 'secondary' | 'air';
  htmlType?: 'button' | 'submit';
}

export default function Button({
  children,
  onClick,
  type = 'accent',
  htmlType = 'button',
}: IButton) {
  return (
    <button
      type={htmlType === 'button' ? 'button' : 'submit'}
      onClick={onClick}
      className={`${s.button} ${s[`button_type_${type}`]}`}
    >
      {children}
    </button>
  );
}
