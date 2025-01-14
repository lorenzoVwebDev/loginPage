import { useCallback, useRef} from 'react';
const backendurl = 'https://backend.lorenzo-viganego.com/';
const localhost = 'http://localhost:3000/'

function LoginUser(credentials) {

  const loginUser = useCallback((credentials) => {
    const token = fetch(`${localhost}dummylogin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)   
    }).then((response) => {
      return {
        body: response.json(),
        status: response.status
       } 
    }).catch((error) => {
      console.error('Error:', error)
    })
  
    return token
  }, [credentials])

  return [loginUser]
}


export default LoginUser;