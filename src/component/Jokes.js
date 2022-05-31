import React from 'react';
export default function Jokes(props){
    const [isShown , setIsShown]=React.useState(false)

    function toggle(){
        setIsShown(prevShown=>!prevShown )
    }
    

    return(
        
        <div>
            <span>Jokes</span>
            {props.setup && <h3> Setup: {props.setup}</h3>}
            {isShown  && <p>Punchline:{props.punchline}</p>}
            {<button className='button-click' onClick={toggle}> {isShown ? "Hide" : "Show"}Punchline</button>}
            {/* {!isShown && <button className='button-click' onClick={toggle}>Show Punchline</button>} */}
            {/* {isShown && <button className='button-click' onClick={toggle}>Hide Punchline</button>} */}
            <hr />
        </div>
    )
}