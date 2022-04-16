import { ChangeEvent, useEffect, useState } from 'react';
import { TColor, TList, TTask } from './types/types';
import Button from './ui/Button';
import Input from './ui/Input';
import Mark from './ui/Mark';
import Checkbox from './ui/Checkbox';
import Cross from './ui/Cross';
import Menu from './ui/Menu';
import List from './ui/List';
import ColorPicker from './ui/ColorPicker';
import NewListForm from './components/NewListForm';
import data from './assets/database.json';
import NewTaskForm from './components/NewTaskForm';

export default function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [checkboxValue, setCheckboxValue] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<number | null>(null);
  const [lists, setLists] = useState<TList[]>([]);
  const [tasks, setTasks] = useState<TTask[]>([]);
  const [colors, setColors] = useState<TColor[]>([]);

  useEffect(() => {
    setLists(data.lists);
    setTasks(data.tasks);
    setColors(data.colors);
  }, []);

  return (
    <section className='container'>
      <h1>UI library</h1>
      <article>
        <h2>Button</h2>
        <Button onClick={() => {}} type='accent'>
          Click me!
        </Button>
        <Button onClick={() => {}} type='secondary'>
          Click me!
        </Button>
      </article>
      <article>
        <h2>Input</h2>
        <Input
          id='input1'
          placeholder='Ваша почта'
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
        />
      </article>
      <article>
        <h2>List</h2>
        <List
          title='Фронтэнд'
          tasks={tasks.filter((task: TTask) => task.listId === 2)}
        />
      </article>
      <article>
        <h2>Mark</h2>
        <Mark />
        <Mark size='big' />
      </article>
      <article>
        <h2>Checkbox</h2>
        <Checkbox
          id='checkbox1'
          label='Option One'
          checked={checkboxValue}
          onChange={() => setCheckboxValue((prevState) => !prevState)}
        />
      </article>
      <article>
        <h2>Cross</h2>
        <Cross onClick={() => {}} />
      </article>
      <article>
        <h2>Menu</h2>
        <Menu
          name='sidebar'
          items={[
            {
              id: 0,
              name: 'Все задачи',
              colorId: 0,
              icon: (
                <svg
                  width='14'
                  height='12'
                  viewBox='0 0 14 12'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.96 5.10001H5.74001C5.24321 5.10001 5.20001 5.50231 5.20001 6.00001C5.20001 6.49771 5.24321 6.90001 5.74001 6.90001H10.96C11.4568 6.90001 11.5 6.49771 11.5 6.00001C11.5 5.50231 11.4568 5.10001 10.96 5.10001V5.10001ZM12.76 9.60001H5.74001C5.24321 9.60001 5.20001 10.0023 5.20001 10.5C5.20001 10.9977 5.24321 11.4 5.74001 11.4H12.76C13.2568 11.4 13.3 10.9977 13.3 10.5C13.3 10.0023 13.2568 9.60001 12.76 9.60001ZM5.74001 2.40001H12.76C13.2568 2.40001 13.3 1.99771 13.3 1.50001C13.3 1.00231 13.2568 0.600006 12.76 0.600006H5.74001C5.24321 0.600006 5.20001 1.00231 5.20001 1.50001C5.20001 1.99771 5.24321 2.40001 5.74001 2.40001ZM2.86001 5.10001H1.24001C0.743212 5.10001 0.700012 5.50231 0.700012 6.00001C0.700012 6.49771 0.743212 6.90001 1.24001 6.90001H2.86001C3.35681 6.90001 3.40001 6.49771 3.40001 6.00001C3.40001 5.50231 3.35681 5.10001 2.86001 5.10001ZM2.86001 9.60001H1.24001C0.743212 9.60001 0.700012 10.0023 0.700012 10.5C0.700012 10.9977 0.743212 11.4 1.24001 11.4H2.86001C3.35681 11.4 3.40001 10.9977 3.40001 10.5C3.40001 10.0023 3.35681 9.60001 2.86001 9.60001ZM2.86001 0.600006H1.24001C0.743212 0.600006 0.700012 1.00231 0.700012 1.50001C0.700012 1.99771 0.743212 2.40001 1.24001 2.40001H2.86001C3.35681 2.40001 3.40001 1.99771 3.40001 1.50001C3.40001 1.00231 3.35681 0.600006 2.86001 0.600006Z'
                    fill='#7C7C7C'
                  />
                </svg>
              ),
            },
            ...lists,
          ]}
        />
      </article>
      <article>
        <h2>ColorPicker</h2>
        <ColorPicker
          name='colorPicker1'
          value={selectedColor}
          onChange={setSelectedColor}
          colors={colors}
        />
      </article>
      <article>
        <h2>NewListForm</h2>
        <NewListForm id='newListForm1' colors={colors} onSubmit={console.log} />
      </article>
      <article>
        <h2>NewTaskForm</h2>
        <NewTaskForm id='newTaskForm1' onSubmit={console.log} />
      </article>
    </section>
  );
}
