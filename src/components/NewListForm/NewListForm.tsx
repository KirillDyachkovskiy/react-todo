import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Input from '../../ui/Input';
import Cross from '../../ui/Cross';
import Button from '../../ui/Button';
import ColorPicker from '../../ui/ColorPicker';
import { TColor, TColorsResponse, todoAPI } from '../../types/types';
import s from './newListForm.module.css';

interface INewListForm {
  id: string;
}

export default function NewListForm({ id }: INewListForm) {
  const [colors, setColors] = useState<TColor[]>([]);

  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [name, setListName] = useState<string>('');
  const [colorId, setColorId] = useState<number>(1);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    await todoAPI.postList({ name, colorId });

    setIsPopupVisible(false);
    setIsLoading(false);
    setListName('');
  };

  useEffect(() => {
    todoAPI
      .getColors()
      .then(({ data }: { data: TColorsResponse }) => setColors(data));
  }, []);

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
          <ColorPicker
            name={id}
            value={colorId}
            onChange={setColorId}
            colors={colors}
          />
          <Button htmlType='submit' disabled={isLoading}>
            Создать новый список
          </Button>
        </div>
      )}
    </form>
  );
}
