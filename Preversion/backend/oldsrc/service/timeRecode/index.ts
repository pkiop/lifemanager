import { TimeRecodeModel, TimeRecode } from '../oldsrc/model/timeRecode';

export const getAllTimeRecode = async () => {
  const res = await TimeRecodeModel.find();
  return res;
};

export const addOneTimeRecode = async ({
  userId,
  title,
  startTime,
  endTime,
  category,
  isActivate,
}: TimeRecode) => {
  const newTimeRecode = new TimeRecodeModel({
    userId,
    title,
    startTime,
    endTime,
    category,
    isActivate,
  });
  return newTimeRecode.save();
};

export default {};
