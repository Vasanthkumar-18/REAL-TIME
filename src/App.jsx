import React, { useState }  from 'react'
import './App.css'

function App() {

 setInterval (ClickTime,1000)

  const gettime = new Date().toLocaleTimeString();

  const [time , SetTime ] = useState(gettime)

  function ClickTime() {
 
    const newTime = new Date().toLocaleTimeString();

    return (

    SetTime(newTime )
    )

    
  }
  
  return (
    <div className='time'>
      <h1>
        {time}
      </h1>

    </div>
  )

}

export default App