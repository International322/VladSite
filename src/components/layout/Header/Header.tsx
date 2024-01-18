import Link from 'next/link';
import styles from './Header.module.scss';
import { MENU } from '../../../_data/header.data';

const Header = () => {
  return (
    <header className="flex items-center w-full absolute left-0 top-0 bg-black/40 shadow-black shadow-sm z-50">
      <div className="justify-center xl:w-container h-16 mx-auto px-layout flex items-center gap-40">
        <div className="">
          <Link className="text-xl xl::text-3xl font-bold text-white" href="/">
            Логотип
          </Link>
        </div>
        <ul className="hidden xl:flex gap-4 uppercase">
          {MENU.map(item => (
            <li className="text-sm xl:text-lg text-white" key={item.url}>
              <Link href={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <button className="hidden xl:block bg-transparent text-white px-6 py-2 rounded-sm border-2 border-white">
          Связаться по телефону
        </button>
      </div>
    </header>
  );
};

export default Header;
