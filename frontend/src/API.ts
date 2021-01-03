/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type AddRecodeTime = {
  hour?: number | null,
  min?: number | null,
};

export type AddTimeRecodeMutationVariables = {
  userId: string,
  title: string,
  startTime: AddRecodeTime,
  endTime: AddRecodeTime,
  category: string,
  isActive: boolean,
};

export type AddTimeRecodeMutation = {
  AddTimeRecode:  {
    __typename: "TimeRecode",
    id: string | null,
    userId: string | null,
    title: string | null,
    startTime:  {
      __typename: "RecodeTime",
      hour: number | null,
      min: number | null,
    } | null,
    endTime:  {
      __typename: "RecodeTime",
      hour: number | null,
      min: number | null,
    } | null,
    category: string | null,
    isActive: boolean | null,
  } | null,
};

export type DeleteTimeRecodeByIdMutationVariables = {
  id: string,
};

export type DeleteTimeRecodeByIdMutation = {
  DeleteTimeRecodeById:  {
    __typename: "TimeRecode",
    id: string | null,
    userId: string | null,
    title: string | null,
    startTime:  {
      __typename: "RecodeTime",
      hour: number | null,
      min: number | null,
    } | null,
    endTime:  {
      __typename: "RecodeTime",
      hour: number | null,
      min: number | null,
    } | null,
    category: string | null,
    isActive: boolean | null,
  } | null,
};

export type GetAllTimeRecodeByUserIdQuery = {
  getAllTimeRecodeByUserId:  {
    __typename: "TimeRecode",
    id: string | null,
    userId: string | null,
    title: string | null,
    startTime:  {
      __typename: "RecodeTime",
      hour: number | null,
      min: number | null,
    } | null,
    endTime:  {
      __typename: "RecodeTime",
      hour: number | null,
      min: number | null,
    } | null,
    category: string | null,
    isActive: boolean | null,
  } | null,
};

export type GetAllTimeRecodeQuery = {
  getAllTimeRecode:  Array< {
    __typename: "TimeRecode",
    id: string | null,
    userId: string | null,
    title: string | null,
    startTime:  {
      __typename: "RecodeTime",
      hour: number | null,
      min: number | null,
    } | null,
    endTime:  {
      __typename: "RecodeTime",
      hour: number | null,
      min: number | null,
    } | null,
    category: string | null,
    isActive: boolean | null,
  } | null > | null,
};
