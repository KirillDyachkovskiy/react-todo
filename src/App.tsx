import Button from './Button';

export default function App() {
  return (
    <section className='container'>
      <h1>UI library</h1>
      <article>
        <h2>Button</h2>
        <Button onClick={() => alert('salam')} type='accent'>
          Click me!
        </Button>
        <Button onClick={() => alert('aleykum')} type='secondary'>
          Click me!
        </Button>
      </article>
    </section>
  );
}
