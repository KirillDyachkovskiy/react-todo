import { ChangeEvent, FormEvent, useState } from 'react';
import { usePostListMutation } from '../../../data/redux/todosApi';
import { TList } from '../../../data/types';

import ColorPicker from '../ColorPicker';
import { Button, Cross, Icon, Input } from '../../ui';
import s from './newListForm.module.css';

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
          <Icon name='plus' />
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
