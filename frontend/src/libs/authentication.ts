import axios from 'axios';

export const authentication = async () => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    const config = {
      header: {
        authorization: accessToken,
      },
    };
    const res = await axios.get(`${process.env.APISERVER_HOST}/auth/authentication`/* , config */);
    if (res.status === 200) {
      return true;
    }
    return false;
  }
  return false;
};

export default {};
