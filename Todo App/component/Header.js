import React from "react";

function Header(){
    console.log('헤더콤포넌트')
    return(
        <div>
            <h3>오늘은 📆</h3>
            <h2>{new Date().toLocaleDateString()}</h2>
        </div>
    );
}

export default React.memo(Header);