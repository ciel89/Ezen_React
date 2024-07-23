import React, {useRef} from 'react';

const Body= function(){
    const topRef = useRef(null);

    console.log(topRef);
    const scrollToTop = ()=>{
        topRef.current.scrollIntoView({behavior: 'smooth'});
    }

    return(
        <div>
            <div ref={topRef}></div>
            <div style={ {height:'1500px'}}>
                <p>본문내용</p>
            </div>
            <button onClick={scrollToTop}>Top</button>

        </div>
    );

}

export default Body;