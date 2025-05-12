import react from "react";

const CurrentDate = function(props) {
    let { title, color, onclick} = props;
    
    return <h2 style={{color: color, background:'brown'}}> Hello </h2>;
}

export default CurrentDate;