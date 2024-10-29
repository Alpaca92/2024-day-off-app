import * as styles from './VacationBox.css';

interface VacationBoxProps {
  title: string;
  value: string;
}

const VacationBox = ({ title, value }: VacationBoxProps) => {
  return (
    <div>
      <p className={styles.title}>{title}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
};

export default VacationBox;
