import react, {useState} from "react";
import './style.css'
import TestComponent from "../newTestComponent";

const AnotherOneComponent = function(props) {

    const [bgcolor, setBgColor] = useState(props.color);

    const [currentValue, setCurrentValue] = useState(0);

    const btnClickFn = (val) => {
        console.log(val)
        
        if(bgcolor === 'green') {
            setBgColor(props.color)
        } else {
            setBgColor('green')
        }
    }

    const counter = () => {
        setCurrentValue(currentValue + 1);
    }

    return(
        <div className="header" style={{backgroundColor: bgcolor}}>
            header
            <TestComponent title={props.title} color={'pink'} onclick={btnClickFn} />
            <TestComponent title={currentValue} color={'pink'} onclick={counter} />
        </div>
    )
}
export default AnotherOneComponent; 