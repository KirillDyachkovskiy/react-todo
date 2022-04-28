import { useSetTaskStatusMutation } from '../../../data/redux/todosApi';
import { Button, Checkbox, Icon } from '../../ui';

import s from './task.module.css';

interface ITask {
  id: number;
  completed: boolean;
  text: string;
  removeTask: () => void;
}

export default function Task({ id, completed, text, removeTask }: ITask) {
  const [setTaskStatus] = useSetTaskStatusMutation();

  return (
    <article className={s.task}>
      <Checkbox
        id={String(id)}
        checked={completed}
        onChange={() => setTaskStatus({ completed: !completed, id })}
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
