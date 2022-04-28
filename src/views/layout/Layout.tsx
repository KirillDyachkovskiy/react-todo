import { useState } from 'react';

import { useDeleteListMutation } from '../../data/redux/todosApi';
import { TExpandedList } from '../../data/types';

import { NewListForm, Menu, List } from '../components';
import { Icon } from '../ui';
import s from './layout.module.css';

interface ILayout {
  lists: TExpandedList[];
}

export default function Layout({ lists }: ILayout) {
  const [activeId, setActiveId] = useState<number>(1);
  const [deleteList] = useDeleteListMutation();

  return (
    <main className={s.layout}>
      <aside className={s.layout__aside}>
        <Menu
          value={activeId}
          onChange={setActiveId}
          removeItem={(id) => deleteList({ id })}
          name='appMenu'
          items={[
            {
              id: 0,
              name: 'Все задачи',
              colorId: 0,
              tasks: [],
              color: {
                id: 0,
                hex: '',
                name: '',
              },
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
        {lists.map((list: TExpandedList) => (
          <List key={list.id} list={list} />
        ))}
      </section>
    </main>
  );
}
