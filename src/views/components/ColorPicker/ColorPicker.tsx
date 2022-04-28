import { Dispatch, SetStateAction } from 'react';
import { TColor } from '../../../data/types';
import s from './colorPicker.module.css';

const colors: TColor[] = [
  {
    id: 1,
    hex: '#C9D1D3',
    name: 'grey',
  },
  {
    id: 2,
    hex: '#42B883',
    name: 'green',
  },
  {
    id: 3,
    hex: '#64C4ED',
    name: 'blue',
  },
  {
    id: 4,
    hex: '#FFBBCC',
    name: 'pink',
  },
  {
    id: 5,
    hex: '#B6E6BD',
    name: 'lime',
  },
  {
    id: 6,
    hex: '#C355F5',
    name: 'purple',
  },
  {
    id: 7,
    hex: '#110133',
    name: 'black',
  },
  {
    id: 8,
    hex: '#FF6464',
    name: 'red',
  },
];

interface IColorPicker {
  name: string;
  value: number | null;
  onChange: Dispatch<SetStateAction<number>>;
}

export default function ColorPicker({ name, value, onChange }: IColorPicker) {
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
