import { useState } from 'react';
import { Typography } from '@mui/material';
import css from './WorkDaysWindow.module.css';

const WorkDaysWindow = ({ workDays }) => {
  const daysOfWeek = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  const [showSchedule, setShowSchedule] = useState(false);

  const defaultTime = getDefaultTime();

  function getDefaultTime() {
    if (workDays && workDays.length > 0) {
      const firstWorkDay = workDays[0];
      const from = firstWorkDay.from || '11:00';
      const to = firstWorkDay.to || '16:00';
      return `${from} - ${to}`;
    } else {
      return 'day and night';
    }
  }

  const handleTypographyClick = () => {
    setShowSchedule(!showSchedule);
  };

  const handleScheduleClick = e => {
    e.stopPropagation();
  };

  return (
    <div>
      <Typography
        variant="body1"
        component="p"
        gutterBottom
        onClick={handleTypographyClick}
        className={css.typoStyled}
        sx={{
          '&:hover': {
            color: '#54ADFF',
            cursor: 'pointer',
          },
        }}
      >
        <strong>{'Time'}:</strong> <br /> {defaultTime}
      </Typography>
      {showSchedule && (
        <div onClick={handleScheduleClick} className={css.timeBox}>
          {workDays.length > 0 ? (
            <ul className={css.timeList}>
              {workDays.map((day, index) => (
                <li key={index} className={css.timeItem}>
                  <strong>{daysOfWeek[index]}</strong> {day.from}-{day.to}
                </li>
              ))}
            </ul>
          ) : (
            <div>No working hours available</div>
          )}
        </div>
      )}
    </div>
  );
};

export default WorkDaysWindow;
