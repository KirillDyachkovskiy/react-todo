import { TMenuItem } from '../../../data/types';

import { Button, Icon } from '../../ui';
import s from './menu.module.css';

interface IMenu {
  name: string;
  items: TMenuItem[];
  value: number;
  onChange: (itemId: number) => void;
  removeItem: (itemId: number) => void;
}

export default function Menu({
  name,
  items,
  value,
  onChange,
  removeItem,
}: IMenu) {
  return (
    <ul className={s.menu}>
      {items.map((item: TMenuItem) => (
        <li className={s.menu__li} key={item.id}>
          <label htmlFor={`${name}_${item.id}`}>
            <input
              className={s.menu__radio}
              id={`${name}_${item.id}`}
              name={name}
              checked={value === item.id}
              type='radio'
              onChange={() => onChange(item.id)}
            />
            <div className={s.menu__item}>
              <div className={s.menu__icon}>
                {item.icon ? (
                  item.icon
                ) : (
                  <span
                    style={{
                      backgroundColor: `var(--${item.color.name})`,
                    }}
                    className={s.menu__mark}
                  />
                )}
              </div>
              <span className={s.menu__label}>{item.name}</span>
              {item.id === value && item.id !== 0 && (
                <div className={s.menu__cross}>
                  <Button type='air' onClick={() => removeItem(item.id)}>
                    <Icon name='cross' />
                  </Button>
                </div>
              )}
            </div>
          </label>
        </li>
      ))}
    </ul>
  );
}
