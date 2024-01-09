// CircularProgressBar.tsx
import React from 'react';
import styles from './CircularProgressBar.module.scss';

interface CircularProgressBarProps {
  progress: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  progress,
}) => {
  const circumference = 2 * Math.PI * 52;
  return (
    <div className={styles.circularProgressBar}>
      <div>
        <svg width="120" height="120">
          <circle
            style={{
              strokeDasharray: `${circumference} ${
                circumference - (progress / 100) * circumference
              }`,
              strokeDashoffset: `${circumference}`,
            }}
            className={styles.circle}
            stroke="black"
            strokeWidth="4"
            cx="60"
            cy="60"
            r="52"
            fill="transparent"
          />
        </svg>
      </div>
      <div>
        <span className={styles.progress}>{progress}%</span>
        <div>
          <h2>Надежность и стабильность</h2>
          <p>Более 540 реализованных проектов</p>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
