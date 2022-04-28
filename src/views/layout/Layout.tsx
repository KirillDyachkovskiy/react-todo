import { useDispatch, useSelector } from 'react-redux';
import { useDeleteListMutation } from '../../data/redux/todosApi';
import { setActiveListId } from '../../data/redux/filtersSlice';
import { selectActiveListId } from '../../data/redux/store';
import { TExpandedList, TMenuItem } from '../../data/types';

import { NewListForm, Menu, List } from '../components';
import { Icon } from '../ui';
import s from './layout.module.css';

interface ILayout {
  sections: TExpandedList[];
  lists: TMenuItem[];
}

export default function Layout({ lists, sections }: ILayout) {
  const [deleteList] = useDeleteListMutation();
  const dispatch = useDispatch();
  const activeListId = useSelector(selectActiveListId);

  const handleTabChange = (id: number) => {
    dispatch(setActiveListId({ id }));
  };

  const handleListDelete = async (id: number) => {
    await deleteList({ id });
    handleTabChange(0);
  };

  return (
    <div className={s.layout}>
      <main className={s.layout__wrapper}>
        <aside className={s.layout__aside}>
          <Menu
            value={activeListId}
            onChange={handleTabChange}
            removeItem={handleListDelete}
            name='appMenu'
            items={[
              {
                id: 0,
                name: 'Все задачи',
                icon: <Icon name='menu' />,
              } as TMenuItem,
              ...lists,
            ]}
          />
          <div className={s.layout__newListForm}>
            <NewListForm id='appListForm' />
          </div>
        </aside>
        <section className={s.layout__lists}>
          {sections.map(({ id, color, name, tasks }: TExpandedList) => (
            <List
              key={id}
              id={id}
              name={name}
              color={color.name}
              tasks={tasks}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
