import { Dispatch, SetStateAction } from 'react';
import { TColor } from '../../types/types';
import getColorById from '../../helpers/getColorById';
import s from './colorPicker.module.css';

interface IColorPicker {
  name: string;
  value: number | null;
  onChange: Dispatch<SetStateAction<number>>;
  colors: TColor[];
}

export default function ColorPicker({
  name,
  value,
  onChange,
  colors,
}: IColorPicker) {
  return (
    <ul className={s.colorPicker}>
      {colors.map((color: TColor) => (
        <li key={color.id}>
          <label htmlFor={`${name} ${color.id}`}>
            <input
              className={s.colorPicker__radio}
              id={`${name} ${color.id}`}
              type='radio'
              checked={value === color.id}
              onChange={() => onChange(color.id)}
            />
            <span
              style={{ backgroundColor: `var(--${getColorById(color.id)})` }}
              className={s.colorPicker__mark}
            />
          </label>
        </li>
      ))}
    </ul>
  );
}
