import { useState } from 'react';
import { TList } from '../../types/types';
import Mark from '../Mark';
import s from './menu.module.css';

interface IButton {
  name: string;
  items: Array<TList>;
}

export default function Menu({ name, items }: IButton) {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <ul className={s.menu}>
      {items.map((item: TList) => (
        <li key={item.id}>
          <label htmlFor={`${name}_${item.id}`}>
            <input
              className={s.menu__radio}
              id={`${name}_${item.id}`}
              name={name}
              checked={activeId === item.id}
              type='radio'
              onChange={() => setActiveId(item.id)}
            />
            <div className={s.menu__item}>
              <Mark />
              {item.name}
            </div>
          </label>
        </li>
      ))}
    </ul>
  );
}
