import { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Icon from '@components/Icon/Icon';
import { IconProps } from '@components/Icon/Icon';

import clsx from 'clsx';

import * as styles from './NavigationBar.css';

interface Item extends IconProps {
  title: string;
  path: string;
}

export interface NavigationBarProps extends ComponentPropsWithoutRef<'nav'> {
  items: Array<Item>;
}

const NavigationBar = ({ items }: NavigationBarProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const location = useLocation();

  useEffect(() => {
    const index = items.findIndex((item) => item.path === location.pathname);
    setCurrentIndex(index);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
