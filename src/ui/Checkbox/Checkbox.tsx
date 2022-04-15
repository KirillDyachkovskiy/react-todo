import { ChangeEventHandler } from 'react';
import s from './checkbox.module.css';

interface ICheckbox {
  id: string;
  checked?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  disabled?: boolean;
}

export default function Checkbox({
  id,
  checked = false,
  onChange,
  label,
  disabled = false,
}: ICheckbox) {
  return (
    <label className={s.check} htmlFor={id}>
      <input
        id={id}
        type='checkbox'
        className={s.check__input}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <span className={s.check__box} />
      {label}
    </label>
  );
}
