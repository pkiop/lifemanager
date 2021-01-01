import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_RECODE = gql`  
  {
    Recode { 
      userId
      title
      startTime
      endTime
      category
      isActivate
    }
  }
`;

function GET_RECODETEST() {
  const { loading, error, data } = useQuery(GET_RECODE);
  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  return (
    <>
      <div>{data?.recode?.userId}</div>
      <div>{data?.recode?.title}</div>
      <div>{data?.recode?.startTime}</div>
      <div>{data?.recode?.endTime}</div>
      <div>{data?.recode?.category}</div>
      <div>{data?.recode?.isActive}</div>
    </>
  );
}

export default GET_RECODETEST;
