import Menu from '../ui/Menu';
import { TItems } from '../ui/Menu/Menu';
import s from './layout.module.css';
import NewListForm from '../components/NewListForm';
import { TColor } from '../types/types';

interface ILayout {
  menu: Array<TItems>;
  colors: Array<TColor>;
}

export default function Layout({ menu, colors }: ILayout) {
  return (
    <main className={s.layout}>
      <aside className={s.layout__aside}>
        <Menu name='appMenu' items={menu} />
        <div className={s.layout__newListForm}>
          <NewListForm id='appListForm' colors={colors} onSubmit={() => {}} />
        </div>
      </aside>
      <section className={s.layout__content}>Привет</section>
    </main>
  );
}
