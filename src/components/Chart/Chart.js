import styles from './Chart.module.css';
import { ChartBar } from './components/ChartBar/ChartBar';

export const Chart = ({ dataPoints }) => {
  const valuesArray = dataPoints.map((item) => item.value);
  const totalMaximum = Math.max(...valuesArray);

  return (
    <div className={styles.chart}>
      {
            dataPoints.map(({ value, label }) => (
              <ChartBar
                key={label}
                value={value}
                label={label}
                maxValue={totalMaximum}
              />
            ))
        }
    </div>
  );
};
