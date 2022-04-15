import { ReactNode } from 'react';
import { TColorOld } from '../../types/types';
import s from './section.module.css';

interface ITitle {
  title: string;
  color?: TColorOld;
  children: ReactNode;
}

export default function Section({ title, color = 'blue', children }: ITitle) {
  return (
    <section>
      <div className={s.section__header}>
        <h1 style={{ color: `var(--${color})` }} className={s.section__title}>
          {title}
        </h1>
      </div>
      <div>{children}</div>
    </section>
  );
}
