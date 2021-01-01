import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_RECODE = gql`  
  {
    Recode { 
      title
      startTime
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
      <div>{data?.recode?.title}</div>
      <div>{data?.recode?.startTime}</div>
    </>
  );
}

export default GET_RECODETEST;
