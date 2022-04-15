import { ChangeEvent, useState } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';
import Section from './ui/Section';
import Mark from './ui/Mark';
import Checkbox from './ui/Checkbox';
import Cross from './ui/Cross';

export default function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [checkboxValue, setCheckboxValue] = useState<boolean>(false);

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
        <h2>Section</h2>
        <Section title='Фронтэнд'>Content</Section>
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
    </section>
  );
}
