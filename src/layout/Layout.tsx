import s from './layout.module.css';

export default function Layout() {
  return (
    <main className={s.layout}>
      <aside className={s.layout__aside}>Привет</aside>
      <section className={s.layout__content}>Привет</section>
    </main>
  );
}
