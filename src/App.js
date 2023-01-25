import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor());

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

        }}
      >
        Generate
      </button>
      <br />
      <br />

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
