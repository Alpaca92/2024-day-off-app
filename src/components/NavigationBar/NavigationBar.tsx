import Icon from '@components/Icon/Icon';
import { IconProps } from '@components/Icon/Icon';
import { ComponentPropsWithoutRef } from 'react';
import * as styles from './NavigationBar.css';

interface Item extends IconProps {
  title: string;
}

export interface NavigationBarProps extends ComponentPropsWithoutRef<'nav'> {
  items: Array<Item>;
}

const NavigationBar = ({ items }: NavigationBarProps) => {
  return (
    <nav className={styles.container}>
      {items.map(({ src, alt, title }, index) => (
        <div key={index} className={styles.item}>
          <Icon src={src} alt={alt} />
          <p className={styles.title}>{title}</p>
        </div>
      ))}
    </nav>
  );
};

export default NavigationBar;
