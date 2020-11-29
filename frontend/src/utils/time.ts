export const makeTwoNumber = (num: number) => {
  if (num < 10) {
    return `0${num}`;
  }
  return `${num}`;
};

export const nowHourMin = () => {
  const nowTime = new Date();
  return [nowTime.getHours(), nowTime.getMinutes()];
};

export const calNowTime = (startTime: number[], endTime: number[]) => {
  const [startHour, startMin] = startTime;
  const [endHour, endMin] = endTime;

  if (endHour < startHour) {
    if (startMin > endMin) {
      return [endHour + 23 - startHour, startMin - endMin];
    }
    return [endHour + 24 - startHour, endMin - startMin];
  }
  if (startMin > endMin) {
    if (endHour === startHour) {
      return [endHour + 23 - startHour, startMin - endMin];
    }
    return [endHour - 1 - startHour, startMin - endMin];
  }
  return [endHour - startHour, endMin - startMin];
};

export default {};
