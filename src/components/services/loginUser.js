const backendurl = 'https://backend.lorenzo-viganego.com/';
const localhost = 'http://localhost:3000/'

export function loginUser(credentials) {
  const token = fetch(`${backendurl}dummylogin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)   
  }).then((response) => {
   return response.json()
  }).catch((error) => {
    console.error('Error:', error)
  })

  return token;
}