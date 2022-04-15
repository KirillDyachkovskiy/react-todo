import { ChangeEvent, useState } from 'react';
import Button from './Button';
import Input from './Input';

export default function App() {
  const [inputValue, setInputValue] = useState<string>('');

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
    </section>
  );
}
