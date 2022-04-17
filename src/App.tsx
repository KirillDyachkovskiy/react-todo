import { useEffect, useState } from 'react';
import { TTodoResponse, todoAPI, TExpandedList } from './types/types';
import Layout from './layout';

export default function App() {
  const [lists, setLists] = useState<TExpandedList[]>([]);

  useEffect(() => {
    todoAPI
      .getLists()
      .then(({ data }: { data: TTodoResponse }) => setLists(data));
  }, [setLists]);

  return <Layout lists={lists} />;
}
