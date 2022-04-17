import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { TColor, TColorsResponse, todoAPI } from '../../types/types';
import s from './colorPicker.module.css';

interface IColorPicker {
  name: string;
  value: number | null;
  onChange: Dispatch<SetStateAction<number>>;
}

export default function ColorPicker({ name, value, onChange }: IColorPicker) {
  const [colors, setColors] = useState<TColor[]>([]);

  useEffect(() => {
    todoAPI
      .getColors()
      .then(({ data }: { data: TColorsResponse }) => setColors(data));
  }, [setColors]);

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
              style={{ backgroundColor: `var(--${color.name})` }}
              className={s.colorPicker__mark}
            />
          </label>
        </li>
      ))}
    </ul>
  );
}
