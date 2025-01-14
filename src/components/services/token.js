import { useState } from 'react';

export function useToken() {
  const getToken = () => {
    const userToken  = JSON.parse(localStorage.getItem('token')) || '';
    return userToken;
  }

  const [ token, setToken ] = useState(getToken());

  const saveToken = userToken => {
    console.log(userToken);
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken);
  }

  return {
    setToken: saveToken,
    token
  }
}




