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
  const [listColorId, setListColorId] = useState<number | null>(null);

  const handleSubmit = () => {
    onSubmit(listName, listColorId || 0);
    setIsPopupVisible(false);
  };

  return (
    <div className={s.newListForm}>
      <button type='button' onClick={() => setIsPopupVisible(true)}>
        Add new list
      </button>
      {isPopupVisible && (
        <div className={s.newListForm__box}>
          <div className={s.newListForm__cross}>
            <Cross onClick={() => setIsPopupVisible(false)} />
          </div>
          <Input
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
