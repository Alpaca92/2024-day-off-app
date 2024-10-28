import Icon from '@components/Icon/Icon';
import { IconProps } from '@components/Icon/Icon';
import { ComponentPropsWithoutRef, useState } from 'react';
import * as styles from './NavigationBar.css';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface Item extends IconProps {
  title: string;
  path: string;
}

export interface NavigationBarProps extends ComponentPropsWithoutRef<'nav'> {
  items: Array<Item>;
}

const NavigationBar = ({ items }: NavigationBarProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <nav className={styles.container}>
      {items.map(({ type, title, path }, index) => (
        <Link
          key={index}
          to={path}
          onClick={() => setCurrentIndex(index)}
          className={clsx(currentIndex === index && styles.active, styles.item)}
        >
          <Icon type={type} />
          <p className={styles.title}>{title}</p>
        </Link>
      ))}
    </nav>
  );
};

export default NavigationBar;
