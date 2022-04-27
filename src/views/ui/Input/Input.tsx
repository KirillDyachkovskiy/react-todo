import { ChangeEventHandler } from 'react';
import s from './input.module.css';

interface IInput {
  id: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

export default function Input({ id, value, onChange, placeholder }: IInput) {
  return (
    <label htmlFor={id}>
      <input
        id={id}
        className={s.input}
        type='text'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
}
