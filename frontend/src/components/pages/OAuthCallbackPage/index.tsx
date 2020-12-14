import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import qs from 'query-string';

const App = ({ location }: { location: any }) => {
  const history = useHistory();
  console.log('dodo');
  const { code } = qs.parse(location.search);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getToken = async () => {
      if (code == null) return;
      setIsLoading(false);
      const token = await axios.get(
        `${process.env.REACT_APP_APISERVER_HOST}/api/auth/github/getToken?code=${code}`,
      );
      localStorage.setItem('token', token.data.token);
      setIsLoading(true);
      history.push('/');
    };
    getToken();
  }, []);

  return (
    <>
      <h1>loading : {isLoading ? '로딩완료' : '로딩중'}</h1>
    </>
  );
};
export default App;
