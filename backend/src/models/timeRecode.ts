import {
  Schema, model, Document,
} from 'mongoose';

const TimeRecodeSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  startTime: {
    type: Array,
    required: true,
  },
  endTime: {
    type: Array,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActivate: {
    type: Boolean,
    required: true,
  },
});

export interface TimeRecode extends Document {
  userId: string;
  title: string;
  starttime : Array<number>;
  endTime: Array<number>;
  category: string;
  isActivate: boolean;
}

export const TimeRecodeModel = model<TimeRecode>(
  'timerecodes',
  TimeRecodeSchema,
);
