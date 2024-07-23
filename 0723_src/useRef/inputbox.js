import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);
  const textRef = useRef(null);

  console.log(inputRef);

  const handleClick = () => {
    inputRef.current.focus();
  };

  const handleOnClick = () => {
        textRef.current.value=""
    } ;       


  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me with the button" />
      <button onClick={handleClick}>Focus the input</button>

      <input ref={textRef} type="text" placeholder="Clear" />
      <button onClick={handleOnClick}>Reset</button>

    </div>
  );
}

export default FocusInput;
