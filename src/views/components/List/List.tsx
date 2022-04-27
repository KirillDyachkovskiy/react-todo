import { TExpandedList, TTask } from '../../../data/types/types';
import NewTaskForm from '../NewTaskForm';
import s from './list.module.css';
import Task from '../Task';

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
          <Task key={task.id} {...task} />
        ))}
        <NewTaskForm listId={list.id} />
      </div>
    </article>
  );
}
