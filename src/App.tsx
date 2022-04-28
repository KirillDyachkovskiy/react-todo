import { useSelector } from 'react-redux';
import { useGetListsQuery, useGetSectionsQuery } from './data/redux/todosApi';
import { selectActiveListId } from './data/redux/store';

import Layout from './views/layout';

export default function App() {
  const activeListId = useSelector(selectActiveListId);
  const { data: sections } = useGetSectionsQuery({ id: activeListId });
  const { data: lists } = useGetListsQuery(null);

  return <Layout sections={sections || []} lists={lists || []} />;
}
