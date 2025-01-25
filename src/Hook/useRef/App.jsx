import React, { useRef,useState, useEffect } from 'react';

function App() {
    const inputRef = useRef(null);
    const [ value , setValue]=useState('');
    const handel=()=>{
        setValue(inputRef.current.value);
    }
    useEffect(()=>{
        inputRef.current.focus();
    }
    )

  return (
    <div>
      <input type="text" ref={inputRef} onChange={handel} />
      <br/>value est {value} 
    </div>
  );
}

export default App;
