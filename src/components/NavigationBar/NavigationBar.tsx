import Icon from '@components/Icon/Icon';
import { IconProps } from '@components/Icon/Icon';
import { ComponentPropsWithoutRef } from 'react';
import * as styles from './NavigationBar.css';
import { Link } from 'react-router-dom';

interface Item extends IconProps {
  title: string;
  path: string;
}

export interface NavigationBarProps extends ComponentPropsWithoutRef<'nav'> {
  items: Array<Item>;
}

const NavigationBar = ({ items }: NavigationBarProps) => {
  return (
    <nav className={styles.container}>
      {items.map(({ src, alt, title, path }, index) => (
        <Link key={index} to={path} className={styles.item}>
          <Icon src={src} alt={alt} />
          <p className={styles.title}>{title}</p>
        </Link>
      ))}
    </nav>
  );
};

export default NavigationBar;
