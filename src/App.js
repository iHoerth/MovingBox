import './App.css';
import MovingBox from './components/MovingBox';
import { useState, useEffect } from 'react';

function App() {
  const [x,setX] = useState(0);
  const [y,setY] = useState(0);

  const increment = (number) => number + 1

  const decrement = (number) => number - 1

  const handlePosition = (e) => {
    switch(e.key){
      case 'ArrowRight':
        setX((x) => increment(x));
        break;
      case 'ArrowLeft':
        setX((x) => decrement(x));
        break;
      case 'ArrowUp':
        setY((y) => increment(y));
        break;
      case 'ArrowDown':
        setY((y) => decrement(y));
        break;
    }
  }

  useEffect(() => {
    document.addEventListener('keydown',handlePosition)
  },[])


  return (
    <div className="App">
      <MovingBox 
        x={x}
        y={y}
      />
    </div>
  );
}

export default App;
