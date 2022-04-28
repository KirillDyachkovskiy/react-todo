import { Button, Checkbox, Icon } from '../../ui';

import s from './task.module.css';

interface ITask {
  id: number;
  text: string;
  completed: boolean;
  setTaskStatus: () => void;
  removeTask: () => void;
}

export default function Task({
  id,
  completed,
  text,
  setTaskStatus,
  removeTask,
}: ITask) {
  return (
    <article className={s.task}>
      <Checkbox
        id={String(id)}
        checked={completed}
        onChange={setTaskStatus}
        label={text}
      />
      <div className={s.task__button}>
        <Button type='air' onClick={removeTask}>
          <Icon name='cross' />
        </Button>
      </div>
    </article>
  );
}
