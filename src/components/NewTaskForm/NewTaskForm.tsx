import { ChangeEvent, useState } from 'react';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import s from './newTaskForm.module.css';

interface INewListForm {
  id: string;
  onSubmit: (name: string) => void;
}

export default function NewTaskForm({ id, onSubmit }: INewListForm) {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [taskName, setTaskName] = useState<string>('');

  const handleSubmit = () => {
    onSubmit(taskName);
    setIsFormVisible(false);
  };

  return (
    <div>
      {!isFormVisible ? (
        <button type='button' onClick={() => setIsFormVisible(true)}>
          Add new task
        </button>
      ) : (
        <div className={s.newTaskForm__box}>
          <Input
            id={id}
            value={taskName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTaskName(e.target.value)
            }
          />
          <div className={s.newTaskForm__submit}>
            <Button onClick={handleSubmit}>Создать новый список</Button>
            <Button type='secondary' onClick={() => setIsFormVisible(false)}>
              Отмена
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
