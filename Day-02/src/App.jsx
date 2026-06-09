import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  const name="vishwa";
function Component1({Name}) {
  return(
  <>
    <div>
      Good Morning, {Name}
    </div>
    </>
  )
}
  return (
  <>
      <h1><p>"Hello {name}"</p></h1>
        <Component1 Name={name}/>


  </>

)
}

export default App;