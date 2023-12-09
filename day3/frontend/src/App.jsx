import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJoke] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJoke(response.data)
      console.log(response);
      console.log(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  })

  return (
    <>
      <h1>Chai or Code</h1>
      <p>Jokes : {jokes.length}</p>

      {
        jokes.map((joke)=>(
          <div key={joke.id}>
            <p>{joke.title}</p>
            <h1>{joke.content}</h1>
          </div>
        ))
      }
    </>
  )
}

export default App
