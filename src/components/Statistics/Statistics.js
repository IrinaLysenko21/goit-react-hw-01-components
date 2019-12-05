import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const getRandomColor = () => {
  const rgb = [];
  for (let i = 0; i < 3; i += 1) {
    rgb.push(Math.floor(Math.random() * (255 - 0 + 1)) + 0);
  }
  const rgbColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;

  return rgbColor;
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statsList}>
        {stats.map(el => {
          const color = getRandomColor();

          return (
            <li
              key={el.id}
              className={styles.item}
              style={{ backgroundColor: `${color}` }}
            >
              <span className={styles.label}>{el.label}</span>
              <span className={styles.percentage}>{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
