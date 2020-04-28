import React from 'react'

const LenghtChecker = (props) => {
    let par = (<p>TOO SHORT </p>)

    if(props.length > 5) {
        par = <p> Text Long Enough</p>;
    }
    
    return(
        <div onClick={props.click}>
            {par}
        </div>
    )
}

export default LenghtChecker