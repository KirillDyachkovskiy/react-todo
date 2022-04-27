import { useGetListsQuery } from './data/redux/todosApi';
import Layout from './views/layout';

export default function App() {
  const { data: lists } = useGetListsQuery(null);

  return <Layout lists={lists || []} />;
}
