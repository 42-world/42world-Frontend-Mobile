import { useState } from 'react';

function useInput() {
  const [input, setInput] = useState('');

  const handleChange = e => {
    if (e.target.value.length < 420) setInput(e.target.value);
  };

  const reset = () => setInput('');

  return [input, handleChange, reset];
}

export default useInput;
