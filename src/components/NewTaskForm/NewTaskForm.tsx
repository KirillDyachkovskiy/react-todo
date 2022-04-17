import { ChangeEvent, FormEvent, useState } from 'react';
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(taskName);
    setTaskName('');
    setIsFormVisible(false);
  };

  return (
    <div>
      {!isFormVisible ? (
        <div className={s.newTaskForm__buttonContainer}>
          <Button type='air' onClick={() => setIsFormVisible(true)}>
            <div className={s.newTaskForm__button}>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8 1V15'
                  stroke='#B4B4B4'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M1 8H15'
                  stroke='#B4B4B4'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              Новая задача
            </div>
          </Button>
        </div>
      ) : (
        <form className={s.newTaskForm__form} onSubmit={handleSubmit}>
          <Input
            placeholder='Текст задачи'
            id={id}
            value={taskName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTaskName(e.target.value)
            }
          />
          <div className={s.newTaskForm__submit}>
            <Button htmlType='submit'>Создать новый список</Button>
            <Button type='secondary' onClick={() => setIsFormVisible(false)}>
              Отмена
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
