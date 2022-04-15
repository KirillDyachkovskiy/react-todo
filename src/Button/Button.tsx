import React from 'react';
import s from './button.module.css';

interface IButton {
  children: string;
}

export default function Button({ children }: IButton) {
  return <button className={s.button}>{children}</button>;
}
