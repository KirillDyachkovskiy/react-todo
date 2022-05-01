import { ChangeEvent, useState } from 'react';
import { useFocus } from '../../../data/helpers';
import { Button, Checkbox, Icon, Input } from '../../ui';

import s from './task.module.css';

interface ITask {
  id: number;
  text: string;
  completed: boolean;
  setTaskStatus: () => void;
  deleteTask: ({ taskId }: { taskId: number }) => void;
  renameTask: ({ taskId, text }: { taskId: number; text: string }) => void;
}

export default function Task({
  id,
  completed,
  text,
  setTaskStatus,
  deleteTask,
  renameTask,
}: ITask) {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editModeText, setIsEditModeText] = useState<string>(text);

  const [taskRef, setTaskFocus] = useFocus();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsEditModeText(e.target.value);
  };

  const handleEditModeOn = () => {
    setIsEditMode(true);
    setTimeout(setTaskFocus);
  };

  const handleInputBlur = async () => {
    await renameTask({ taskId: id, text: editModeText });
    setIsEditMode(false);
  };

  const handleCrossClick = () => {
    deleteTask({ taskId: id });
  };

  return (
    <article className={s.task} onDoubleClick={handleEditModeOn}>
      {isEditMode ? (
        <div className={s.task__input}>
          <Input
            id={String(id)}
            value={editModeText}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            customRef={taskRef}
          />
        </div>
      ) : (
        <Checkbox
          id={String(id)}
          checked={completed}
          onChange={setTaskStatus}
          label={text}
        />
      )}
      <div className={s.task__button}>
        <Button type='air' onClick={handleCrossClick}>
          <Icon name='cross' />
        </Button>
      </div>
    </article>
  );
}
