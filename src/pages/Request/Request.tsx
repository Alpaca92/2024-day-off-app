import Card from '@pages/Request/partials/Card/Card';
import VacationBox from '@pages/Request/partials/VacationBox/VacationBox';

import { sprinkles } from '@styles/sprinkles.css';

import clsx from 'clsx';

import * as styles from './Request.css';

const Request = () => {
  return (
    <div
      className={clsx(
        sprinkles({ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'medium' }),
        styles.container,
      )}
    >
      <h1 className={styles.title}>내 휴가 현황</h1>
      <div className={styles.myVacationInfoBox}>
        <VacationBox title={'잔여 연차'} value={'10일'} />
        <VacationBox title={'총 연차'} value={'100일'} />
      </div>
      <Card />
    </div>
  );
};

export default Request;
