import { IHmTime } from 'components/UI/organisms/RecodeList';

export const makeTwoNumber = (num: number) => {
  if (num < 10) {
    return `0${num}`;
  }
  return `${num}`;
};

export const nowHourMin = () => {
  const nowTime = new Date();
  return { hour: nowTime.getHours(), min: nowTime.getMinutes() };
};

export const isHour = (hour: number) => hour >= 0 && hour <= 23;
export const isMin = (min: number) => min >= 0 && min <= 59;

export const calNowTime = (startTime: IHmTime, endTime: IHmTime) => {
  const { hour: startHour, min: startMin } = startTime;
  const { hour: endHour, min: endMin } = endTime;
  const EMmSM = endMin - startMin;
  if (endHour < startHour) {
    if (startMin > endMin) {
      return { hour: endHour + 23 - startHour, min: EMmSM + 60 };
    }
    return { hour: endHour + 24 - startHour, min: EMmSM };
  }
  if (startMin > endMin) {
    if (endHour === startHour) {
      return { hour: 99, min: 99 };
    }
    return { hour: endHour - 1 - startHour, min: EMmSM + 60 };
  }
  return { hour: endHour - startHour, min: EMmSM };
};

export const convertMinute = (time: IHmTime) => time.hour * 60 + time.min;

export default {};
