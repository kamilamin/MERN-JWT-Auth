import React, {useState, useEffect} from 'react'
import axios from 'axios'

axios.defaults.withCredentials = true
let firstRender = true;

const Home = () => {
  const [user, setUser] = useState()

  const refreshToken = async () => {
    const result = await axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:5001/api/refresh'
    })
    return result
  }

  const sendRequest = async () => {
    const result = await axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:5001/api/user'
    })
    return result
  }
  
  useEffect(() => {
    if (firstRender) {
      firstRender = false
      sendRequest().then(response => {
        setUser(response.data.user)
      }).catch(error => console.log('error', error))
    }
    let interval = setInterval(() => {
      refreshToken().then(response => {
        setUser(response.data.user)
      })
    }, 1000 * 28);

    return () => clearInterval(interval)
  }, [])
  return (
    <div>
      {user && <h1>{user.name}</h1>}
    </div>
  )
}

export default Home
