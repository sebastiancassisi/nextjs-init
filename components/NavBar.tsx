import { ActiveLink } from './ActiveLink';
import style from './Navbar.module.css';

const menuItems = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
  {
    text: 'Pricing',
    href: '/pricing',
  },
];

export const NavBar = () => {
  return (
    <nav className={style.menu}>
      {menuItems.map((item) => (
        <ActiveLink text={item.text} href={item.href} key={item.text}></ActiveLink>
      ))}
    </nav>
  );
};
