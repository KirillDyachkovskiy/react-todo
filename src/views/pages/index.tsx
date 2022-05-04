import { useState } from 'react';
import {
  useRenameListMutation,
  useDeleteListMutation,
  useGetListsQuery,
  useGetSectionsQuery,
} from '../../data/redux/todosApi';
import { TExpandedList, TMenuItem } from '../../data/types';
import { List, Menu, NewListForm } from '../components';
import { Icon } from '../ui';
import s from './app.module.css';

export default function App() {
  const [activeListId, setActiveListId] = useState<number>(0);
  const { data: sections } = useGetSectionsQuery({ id: activeListId });
  const { data: lists } = useGetListsQuery(null);

  const [deleteList] = useDeleteListMutation();
  const [renameList] = useRenameListMutation();

  const handleListDelete = async (id: number) => {
    await deleteList({ id });
    setActiveListId(0);
  };

  return (
    <div className={s.layout}>
      <main className={s.layout__wrapper}>
        <aside className={s.layout__aside}>
          <Menu
            value={activeListId}
            onChange={setActiveListId}
            removeItem={handleListDelete}
            name='appMenu'
            items={[
              {
                id: 0,
                name: 'Все задачи',
                icon: <Icon name='menu' />,
              } as TMenuItem,
              ...(lists || []),
            ]}
          />
          <div className={s.layout__newListForm}>
            <NewListForm id='appListForm' />
          </div>
        </aside>
        <section className={s.layout__lists}>
          {sections?.map(({ id, color, name, tasks }: TExpandedList) => (
            <List
              key={id}
              id={id}
              name={name}
              color={color.name}
              tasks={tasks}
              renameList={renameList}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
