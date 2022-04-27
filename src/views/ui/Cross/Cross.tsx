import { MouseEventHandler } from 'react';
import s from './cross.module.css';

interface ICheckbox {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Cross({ onClick }: ICheckbox) {
  return (
    <button type='button' className={s.cross} onClick={onClick}>
      ✖
    </button>
  );
}
