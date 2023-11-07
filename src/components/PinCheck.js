import './PinCheck.css';
import { MAX_LENGTH, INVALID_PIN } from '../consts';

function PinCheck(props) {
    const { pinInput,pinStore } = props;

    const isPinValidPin = pinStore !== pinInput && pinInput.length === MAX_LENGTH && pinStore.length === MAX_LENGTH;
    const errorMessage = isPinValidPin ? INVALID_PIN : '';

    const getPinClass = () => {
        if (!pinStore || pinStore === pinInput) {
            return 'circle circle-unLock';
        }

        if (pinStore !== pinInput && pinInput.length === MAX_LENGTH) {
            return 'circle circle-lock';
        }

        return 'circle';
    }

    return <div className='container'>
        <textarea className="pinCheck" rows="4" cols="50" value={pinInput} disabled />
        <div className={getPinClass()}></div>
        {errorMessage ? <p id="errorMessage">{errorMessage}</p> : ''}
    </div>
}

export default PinCheck;