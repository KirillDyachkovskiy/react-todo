import { ChangeEvent, FormEvent, useState } from 'react';
import { usePostTaskMutation } from '../../../data/redux/todosApi';
import { TTask } from '../../../data/types';
import { Input, Button } from '../../ui';
import s from './newTaskForm.module.css';

interface INewListForm {
  listId: number;
}

export default function NewTaskForm({ listId }: INewListForm) {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [postTask, { isLoading }] = usePostTaskMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await postTask({ text, completed: false, listId } as TTask);

    setIsFormVisible(false);
    setText('');
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
            id={`list_${listId}`}
            value={text}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
          />
          <div className={s.newTaskForm__submit}>
            <Button htmlType='submit' disabled={isLoading}>
              Создать новый список
            </Button>
            <Button
              type='secondary'
              disabled={isLoading}
              onClick={() => setIsFormVisible(false)}
            >
              Отмена
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
