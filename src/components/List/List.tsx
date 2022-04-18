import { TExpandedList, TTask } from '../../types/types';
import NewTaskForm from '../NewTaskForm';
import { Checkbox } from '../../ui';
import s from './list.module.css';

interface IList {
  list: TExpandedList;
}

export default function List({ list }: IList) {
  return (
    <article>
      <div className={s.list__header}>
        <h1
          style={{ color: `var(--${list.color.name})` }}
          className={s.list__title}
        >
          {list.name}
        </h1>
      </div>
      <div className={s.list__content}>
        {list.tasks.map((task: TTask) => (
          <Checkbox
            key={task.id}
            id={String(task.id)}
            checked={task.completed}
            onChange={() => {}}
            label={task.text}
          />
        ))}
        <NewTaskForm listId={list.id} />
      </div>
    </article>
  );
}
