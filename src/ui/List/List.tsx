import Checkbox from '../Checkbox';
import { TTask } from '../../types/types';
import s from './list.module.css';

interface IList {
  title: string;
  color?: string;
  tasks: TTask[];
}

export default function List({ title, color = 'blue', tasks }: IList) {
  return (
    <article>
      <div className={s.list__header}>
        <h1 style={{ color: `var(--${color})` }} className={s.list__title}>
          {title}
        </h1>
      </div>
      <div className={s.list__content}>
        {tasks.map((task: TTask) => (
          <Checkbox
            key={task.id}
            id={String(task.id)}
            checked={task.completed}
            onChange={() => {}}
            label={task.text}
          />
        ))}
      </div>
    </article>
  );
}
