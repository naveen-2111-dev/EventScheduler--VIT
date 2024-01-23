import react from 'react';

export const daysLeft = (enddate, startdate) => {
  const difference = new Date(enddate).getTime() - Date(startdate);
  const remainingDays = difference / (1000 * 3600 * 24);

  return remainingDays.toFixed(0);
};