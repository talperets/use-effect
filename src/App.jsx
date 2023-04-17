import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [type, setType] = useState('posts')
  const [items, setItems] = useState([])
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${type}/`)
    .then(response => response.json())
    .then(json => setItems(json))
  },[type])

  return (
    <div>
      <button onClick={()=>setType('posts')}>Posts</button>
      <button onClick={()=>setType('users')}>users</button>
      <button onClick={()=>setType('comments')}>comments</button>
      <h1>{type}</h1>
      {
        items.map((val)=>{
          return <h3>{JSON.stringify(val)}</h3>
        })
      }
    </div>
  )
}

export default App
