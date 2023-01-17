import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor());
  // const generatedColor = setColor(randomColor());
  // const [chosenColor, setChosenColor] = useState('');
  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Random Color Generator</h1>
      <br />
      <button
        onClick={() => {
          setColor(randomColor());
          // console.log(generatedColor);
        }}
      >
        Generate
      </button>
      <br />
      <br />
      {/* <input
        value={chosenColor}
        onChange={(event) => {
          setChosenColor(event.currentTarget.value);
          console.log(chosenColor);
        }}
      ></input> */}
      <br />
      <br />
      <div
        style={{
          backgroundColor: color,
          textAlign: 'center',
          width: '300px',
          height: '40px',
          borderRadius: '20px',
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      >
        Generated Color: {color}
      </div>
    </div>
  );
}
