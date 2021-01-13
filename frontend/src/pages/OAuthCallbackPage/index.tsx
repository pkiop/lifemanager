import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import qs from 'query-string';
import { getTokenAndUser } from 'libs/api';
import { useDispatch } from 'react-redux';
import { setUser } from 'modules/user';
import { setCookie } from 'libs/cookie';

const App = ({ location }: { location: any }) => {
  const history = useHistory();
  const { code } = qs.parse(location.search);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getToken = async () => {
      if (code == null) return;
      setIsLoading(false);
      try {
        const userInfo = await getTokenAndUser(code as string);
        setCookie('access_token', userInfo.data.token);
        dispatch(setUser(userInfo.data));

        setIsLoading(true);
        history.push('/');
      } catch (e) {
        history.push('/not-found');
      }
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
