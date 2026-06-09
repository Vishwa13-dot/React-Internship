import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import image1 from './assets/CE.jpg'
import image2 from './assets/IT.jpg'
import image3 from './assets/CIVIL.jpg' 

import "./App.css";


// DAY : 03
function Card({image, title, description}) {
  return (
    <div className="card">
      <img src={image}/>
      <h2>{title}</h2>
      <hr />
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Card
        title="CE"
        description="Computer Engineering focuses on software development, programming, and computer systems."
        image = {image1}
      />

      <Card
        title="IT"
        description="Information Technology focuses on managing networks, databases, and information systems."
        image = {image2}
      />

      <Card
        title="CIVIL"
        description="Civil Engineering focuses on the design, construction, and maintenance of buildings, roads, bridges, and other infrastructure."
        image = {image3}
      />
    </div>
  );
}

export default App;

