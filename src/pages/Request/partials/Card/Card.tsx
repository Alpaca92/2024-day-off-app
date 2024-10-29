import clsx from 'clsx';

import { sprinkles } from '@styles/sprinkles.css';

import * as styles from './Card.css';

const Card = () => {
  return (
    <div className={clsx(sprinkles({ display: 'flex', gap: 'small', alignItems: 'center' }), styles.container)}>
      <div className={clsx(sprinkles({ display: 'flex', gap: 'small', align: 'center' }))}>
        <p className={styles.status}>승인</p>
        <p>1.5일</p>
      </div>
      <p>일신상의 사유</p>
    </div>
  );
};

export default Card;
