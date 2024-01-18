import { useEffect, useState } from 'react';
import styles from './circular-progress-bar.module.scss';

interface CircularProgressBarProps {
  progress: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  progress,
}) => {
  const circumference = 2 * Math.PI * 52;

  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(prevNumber => {
        const newProgress = prevNumber + 1 < 90 ? prevNumber + 1 : 90;
        return newProgress;
      });
    }, 5);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4 max-w-xs">
      <div className="relative text-center">
        <svg className="relative m-auto z-10" width="130" height="130">
          <circle
            style={{
              strokeDasharray: `${circumference} ${
                circumference - (number / 100) * circumference
              }`,
              strokeDashoffset: `${circumference}`,
            }}
            className={styles.circle}
            stroke="orange"
            strokeWidth="12"
            cx="65"
            cy="65"
            r="57"
            fill="transparent"
          />
        </svg>
        <svg className="absolute inset-0 m-auto" width="130" height="130">
          <circle
            stroke="gray"
            strokeWidth="12"
            cx="65"
            cy="65"
            r="57"
            fill="transparent"
          />
        </svg>
        <div className="absolute inset-0 m-auto text-3xl font-semibold text-gray-50">
          {progress}
        </div>
      </div>
      <div>
        <div className="text-center">
          <h2 className="text-2xl text-gray-50 font-semibold">
            Надежность и стабильность
          </h2>
          <p className="text-xl text-gray-300/60">
            Более 540 реализованных проектов
          </p>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
