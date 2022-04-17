import { ReactNode, useState } from 'react';
import { TList } from '../../types/types';
import s from './menu.module.css';
import getColorById from '../../helpers/getColorById';

export type TItems = TList & {
  icon?: ReactNode;
};

interface IMenu {
  name: string;
  items: Array<TItems>;
}

export default function Menu({ name, items }: IMenu) {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <ul className={s.menu}>
      {items.map((item: TItems) => (
        <li className={s.menu__li} key={item.id}>
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
              <div className={s.menu__icon}>
                {item.icon ? (
                  item.icon
                ) : (
                  <span
                    style={{
                      backgroundColor: `var(--${getColorById(item.colorId)})`,
                    }}
                    className={s.menu__mark}
                  />
                )}
              </div>
              <span className={s.menu__label}>{item.name}</span>
            </div>
          </label>
        </li>
      ))}
    </ul>
  );
}
