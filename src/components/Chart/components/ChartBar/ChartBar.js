import styles from './ChartBar.module.css';

export const ChartBar = ({ value, label, maxValue }) => {
  let barFillHeight = '0%';

  if (maxValue > 0) {
    // eslint-disable-next-line no-mixed-operators
    barFillHeight = `${Math.round(value / maxValue * 100)}%`;
  }

  return (
    <div className={styles.chartBar}>
      <div className={styles.chartBarInner}>
        <div
          className={styles.chartBarFill}
          style={{ height: barFillHeight }}
        />
      </div>
      <div className={styles.chartBarLabel}>
        {label}
      </div>
    </div>
  );
};
