import * as styles from './Home.css';

type VacationStatus = {
  id: number;
  userName: string;
  startDate: string;
  endDate: string;
  status: string;
};

const Home = () => {
  const vacationStatuses: VacationStatus[] = [
    { id: 1, userName: '홍길동', startDate: '2023-06-01', endDate: '2023-06-03', status: '승인됨' },
    { id: 2, userName: '김철수', startDate: '2023-06-05', endDate: '2023-06-07', status: '대기중' },
    { id: 3, userName: '이영희', startDate: '2023-06-10', endDate: '2023-06-12', status: '거절됨' },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case '승인됨':
        return styles.approvedStatus;
      case '대기중':
        return styles.pendingStatus;
      case '거절됨':
        return styles.rejectedStatus;
      default:
        return '';
    }
  };

  return (
    <div>
      <div className={styles.card}>
        <h1 className={styles.title}>휴가 현황 대시보드</h1>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>이름</th>
              <th className={styles.tableHeader}>시작일</th>
              <th className={styles.tableHeader}>종료일</th>
              <th className={styles.tableHeader}>상태</th>
            </tr>
          </thead>
          <tbody>
            {vacationStatuses.map((status) => (
              <tr key={status.id}>
                <td className={styles.tableCell}>{status.userName}</td>
                <td className={styles.tableCell}>{status.startDate}</td>
                <td className={styles.tableCell}>{status.endDate}</td>
                <td className={`${styles.tableCell} ${styles.statusCell} ${getStatusStyle(status.status)}`}>
                  {status.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
