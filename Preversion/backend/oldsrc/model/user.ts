import { Schema, model, Document } from 'mongoose';

const UserSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  profileUrl: {
    type: String,
  },
  goalActiveTime: {
    type: Array,
    default: [13, 0],
  },
  sleepTime: {
    type: Array,
    default: [0, 30],
  },
  activeCategoryList: {
    type: Array,
    default: ['develop', 'reading'],
  },
  excludeCategoryList: {
    type: Array,
    default: ['nap', 'meal'],
  },
});

export interface IUser extends Document {
  userId: string;
  profileUrl?: string;
  goalActiveTime: Array<number>;
  sleepTime: Array<number>;
  activeCategoryList: Array<string>;
  excludeCategoryList: Array<string>;
}

export const UserModel = model<IUser>('users', UserSchema);
