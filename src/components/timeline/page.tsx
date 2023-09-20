import React from 'react';
import styles from './ZigzagTimeline.module.css';

interface TimelineItem {
  title: string;
  date: string;
  content: string;
}

interface ZigzagTimelineProps {
  items: TimelineItem[];
}

const ZigzagTimeline: React.FC<ZigzagTimelineProps> = ({ items }) => {
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => (
        <div key={index} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.right : styles.left}`}>
          <div className={styles.timelineContent}>
            <h3>{item.title}</h3>
            <p>{item.date}</p>
            <p>{item.content}</p>
          </div>
          {index < items.length - 1 && (
            <>
              {index === 0 && (
                <div className={`${styles.line} ${styles.eventLine}`} />
              )}
              {items[index].title === 'Event 1' && items[index + 1].title === 'Event 2' && (
                <div className={styles.line} />
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ZigzagTimeline;
