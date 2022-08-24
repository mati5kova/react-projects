import React, { useState } from 'react';
import Button from './components/Button.jsx';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <div className="count">{count}</div>
            <Button name={'buttonShape decrementButton'} value={'-'} count={count} setCount={setCount}></Button>
            <Button name={'buttonShape incrementButton'} value={'+'} count={count} setCount={setCount}></Button>
        </div>
    );
}

export default App;
