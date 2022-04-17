import { ChangeEvent, useState } from 'react';
import { TColor } from '../../types/types';
import Input from '../../ui/Input';
import ColorPicker from '../../ui/ColorPicker';
import Button from '../../ui/Button';
import Cross from '../../ui/Cross';
import s from './newListForm.module.css';

interface INewListForm {
  id: string;
  colors: TColor[];
  onSubmit: (title: string, colorId: number) => void;
}

export default function NewListForm({ id, colors, onSubmit }: INewListForm) {
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const [listName, setListName] = useState<string>('');
  const [listColorId, setListColorId] = useState<number>(1);

  const handleSubmit = () => {
    onSubmit(listName, listColorId || 0);
    setIsPopupVisible(false);
  };

  return (
    <div className={s.newListForm}>
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
            value={listName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setListName(e.target.value)
            }
          />
          <ColorPicker
            name={id}
            value={listColorId}
            onChange={setListColorId}
            colors={colors}
          />
          <Button onClick={handleSubmit}>Создать новый список</Button>
        </div>
      )}
    </div>
  );
}
