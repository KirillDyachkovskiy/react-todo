import { ChangeEvent, FormEvent, useState } from 'react';
import { todoAPI } from '../../types/types';
import { Input, Button } from '../../ui';
import s from './newTaskForm.module.css';

interface INewListForm {
  listId: number;
}

export default function NewTaskForm({ listId }: INewListForm) {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await todoAPI.postTask({ text, completed: false, listId });

    if (response.statusText === 'Created') {
      setIsFormVisible(false);
      setText('');
    }
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
