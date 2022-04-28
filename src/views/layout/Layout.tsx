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

  return (
    <main className={s.layout}>
      <aside className={s.layout__aside}>
        <Menu
          value={activeListId}
          onChange={(id) => dispatch(setActiveListId({ id }))}
          removeItem={(id) => deleteList({ id })}
          name='appMenu'
          items={[
            {
              id: 0,
              name: 'Все задачи',
              color: {
                id: 0,
                hex: '#ffffff',
                name: 'white',
              },
              colorId: 0,
              icon: <Icon name='menu' />,
            },
            ...lists,
          ]}
        />
        <div className={s.layout__newListForm}>
          <NewListForm id='appListForm' />
        </div>
      </aside>
      <section className={s.layout__lists}>
        {sections.map((list: TExpandedList) => (
          <List key={list.id} list={list} />
        ))}
      </section>
    </main>
  );
}
