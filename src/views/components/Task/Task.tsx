import { useSetTaskStatusMutation } from '../../../data/redux/todosApi';
import { Checkbox } from '../../ui';

interface ITask {
  id: number;
  completed: boolean;
  text: string;
}

export default function Task({ id, completed, text }: ITask) {
  const [setTaskStatus] = useSetTaskStatusMutation();

  return (
    <Checkbox
      id={String(id)}
      checked={completed}
      onChange={() => setTaskStatus({ completed: !completed, id })}
      label={text}
    />
  );
}
