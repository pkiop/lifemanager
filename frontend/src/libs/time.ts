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
  const EMmSM = endMin - startMin;
  if (endHour < startHour) {
    if (startMin > endMin) {
      return [endHour + 23 - startHour, EMmSM + 60];
    }
    return [endHour + 24 - startHour, EMmSM];
  }
  if (startMin > endMin) {
    if (endHour === startHour) {
      return [99, 99];
    }
    return [endHour - 1 - startHour, EMmSM + 60];
  }
  return [endHour - startHour, EMmSM];
};

export default {};
