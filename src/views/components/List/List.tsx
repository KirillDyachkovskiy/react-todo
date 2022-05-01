import { ChangeEvent, useState } from 'react';
import {
  useDeleteTaskMutation,
  useRenameTaskMutation,
  useSetTaskStatusMutation,
} from '../../../data/redux/todosApi';
import { TTask } from '../../../data/types';

import NewTaskForm from '../NewTaskForm';
import Task from '../Task';
import { Button, Icon } from '../../ui';
import s from './list.module.css';
import { useFocus } from '../../../data/helpers';

interface IList {
  id: number;
  color: string;
  name: string;
  tasks: TTask[];
  renameList: ({ listId, name }: { listId: number; name: string }) => void;
}

export default function List({ id, color, name, tasks, renameList }: IList) {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editModeText, setIsEditModeText] = useState<string>(name);

  const [deleteTask] = useDeleteTaskMutation();
  const [renameTask] = useRenameTaskMutation();
  const [setTaskStatus] = useSetTaskStatusMutation();

  const [taskRef, setTaskFocus] = useFocus();

  const handleEditModeOn = () => {
    setIsEditMode(true);
    setTimeout(setTaskFocus);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsEditModeText(e.target.value);
  };

  const handleInputBlur = async () => {
    await renameList({ listId: id, name: editModeText });
    setIsEditMode(false);
  };

  return (
    <article>
      <div className={s.list__header}>
        {isEditMode ? (
          <input
            style={{ color: `var(--${color})` }}
            className={s.list__title}
            value={editModeText}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            ref={taskRef}
          />
        ) : (
          <>
            <h1 style={{ color: `var(--${color})` }} className={s.list__title}>
              {name}
            </h1>
            <div className={s.list__button}>
              <Button type='air' onClick={handleEditModeOn}>
                <Icon name='pen' />
              </Button>
            </div>
          </>
        )}
      </div>
      <div className={s.list__content}>
        {tasks.map(({ id: taskId, completed, text }: TTask) => (
          <Task
            key={taskId}
            id={taskId}
            text={text}
            completed={completed}
            setTaskStatus={() =>
              setTaskStatus({ completed: !completed, taskId })
            }
            deleteTask={deleteTask}
            renameTask={renameTask}
          />
        ))}
        <NewTaskForm listId={id} />
      </div>
    </article>
  );
}
