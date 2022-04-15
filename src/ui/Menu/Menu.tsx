import { useState } from 'react';
import { TList } from '../../types/types';
import Mark from '../Mark';
import s from './menu.module.css';

interface IButton {
  items: Array<TList>;
}

export default function Menu({ items }: IButton) {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <ul className={s.menu}>
      {items.map((item: TList) => (
        <li key={item.id}>
          <button
            type='button'
            onClick={() => setActiveId(item.id)}
            className={`${s.menu__item} ${
              item.id === activeId ? s.menu__item_active : ''
            }`}
          >
            <Mark />
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
