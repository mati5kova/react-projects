import React, { useEffect, useState } from 'react';
import Button from './components/Button.jsx';
import Card from './components/Card.jsx';

function App() {
    const [temperature, setTemperature] = useState(10);
    const [bgColor, setBgColor] = useState('cold');

    useEffect(() => {
        if (temperature >= 30) {
            setTemperature(30);
        }

        if (temperature <= -10) {
            setTemperature(-10);
        }

        if (temperature >= 15) {
            setBgColor('hot');
        } else {
            setBgColor('cold');
        }
    }, [temperature]);

    const handleTemperatureIncrement = () => {
        setTemperature(temperature + 1);
    };

    const handleTemperatureDecrement = () => {
        setTemperature(temperature - 1);
    };

    return (
        <div className="App">
            <Card value={temperature} circleColor={bgColor}></Card>
            <Button name={'button increment'} value={'+'} handleClick={handleTemperatureIncrement}></Button>
            <Button name={'button decrement'} value={'-'} handleClick={handleTemperatureDecrement}></Button>
        </div>
    );
}

export default App;
