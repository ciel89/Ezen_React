import '../css/header.css';
import React, {useRef} from 'react';

function Header(){
    const inputRef = useRef(null);
    const textRef = useRef(null);

    const onFocus = ()=>{
        inputRef.current.focus();
    };
    const onClear = () => {
        textRef.current.value=""
    } ;  
    return (
        <div>
            <div>
                <input ref={inputRef} type="text"></input>
                <button onClick={onFocus}>포커스</button>
            </div>
            <div>
                <input ref={textRef} type="text"></input>
                <button onClick={onClear}>입력완료</button>
            </div>
        </div>
    );
}

export default Header;
