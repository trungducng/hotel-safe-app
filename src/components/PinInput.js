import './PinInput.css';

function PinInput(props) {
    const numpad = ['1','2','3','4','5','6','7','8','9'];

    return <div className="numpad-container">
        {numpad.map(item => (
            <div key={item} className="numpad-item" onClick={() => props.setPinValue(item)}>{item}</div>
        ))}
        <div className="numpad-item" onClick={() => props.clearPinInput()}>CLR</div>
        <div className="numpad-item" onClick={() => props.setPinValue('0')}>0</div>
        <div className="numpad-item" onClick={() => {props.setPinStore(props.pinInput)}}>&#8680;</div>  
    </div>
}

export default PinInput;