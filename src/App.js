import './App.css';
import { useState } from 'react';
import PinCheck from './components/PinCheck';
import PinInput from './components/PinInput';

function App() {
  const [pinInput, setPin] = useState('');
  const [pinStore, setPinStore] = useState('');

  const handleChangePinValue = (pinValue) => {
      if (pinInput.length < 4) {
        setPin((prev) => prev + pinValue);
      }
  }

  const clearPinInput = () => {
    setPin('');
  }

  const handleSubmit = (pinValue) => {
    setPinStore(pinValue);
  }

  return (
    <div className="App">
      <PinInput pinInput={pinInput} setPinStore={handleSubmit} setPinValue={handleChangePinValue} clearPinInput={clearPinInput} />
      <PinCheck pinStore={pinStore} pinInput={pinInput} />
    </div>
  );
}

export default App;
