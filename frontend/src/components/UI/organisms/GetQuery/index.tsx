import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { getAllTimeRecode } from 'graphql/queries';

function GET_RECODETEST() {
  const { loading, error, data } = useQuery(gql`${getAllTimeRecode}`);
  console.log('data : ', data);
  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }

  const res = data?.getAllTimeRecode?.map((el: any) => (
    <>
      <div>{el.userId}</div>
      <div>{el.title}</div>
      <div>{el.startTime.hour}</div>
      <div>{el.startTime.min}</div>
      <div>{el.endTime.hour}</div>
      <div>{el.endTime.min}</div>
      <div>{el.category}</div>
      <div>{el.isActive}</div>
    </>
  ));
  return (
    <>
      {res}
    </>
  );
}

export default GET_RECODETEST;
