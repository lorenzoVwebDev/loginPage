const backendurl = 'https://backend.lorenzo-viganego.com/';
const localhost = 'http://localhost:3000/'

export function loginUser(credentials) {
  if (credentials?.first != true) {

  const response = fetch(`${backendurl}dummylogin`, {
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

  return response
  } else {
    return 
  }
}