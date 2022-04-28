import { ChangeEvent, FormEvent, useState } from 'react';
import ColorPicker from '../../ui/ColorPicker';
import { Button, Cross, Input } from '../../ui';
import s from './newListForm.module.css';
import { usePostListMutation } from '../../../data/redux/todosApi';
import { TList } from '../../../data/types';

interface INewListForm {
  id: string;
}

export default function NewListForm({ id }: INewListForm) {
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);

  const [name, setListName] = useState<string>('');
  const [colorId, setColorId] = useState<number>(1);
  const [postList, { isLoading }] = usePostListMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await postList({ name, colorId } as TList);

    setIsPopupVisible(false);
    setListName('');
  };

  return (
    <form className={s.newListForm} onSubmit={handleSubmit}>
      <Button
        type='air'
        onClick={() => setIsPopupVisible((prevState) => !prevState)}
      >
        <div className={s.newListForm__button}>
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6 1V11'
              stroke='#868686'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M1 6H11'
              stroke='#868686'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          Добавить папку
        </div>
      </Button>
      {isPopupVisible && (
        <div className={s.newListForm__box}>
          <div className={s.newListForm__cross}>
            <Cross onClick={() => setIsPopupVisible(false)} />
          </div>
          <Input
            placeholder='Название папки'
            id={id}
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setListName(e.target.value)
            }
          />
          <ColorPicker name={id} value={colorId} onChange={setColorId} />
          <Button htmlType='submit' disabled={isLoading}>
            Создать новый список
          </Button>
        </div>
      )}
    </form>
  );
}
