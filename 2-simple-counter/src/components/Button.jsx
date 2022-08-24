import React from 'react';

const Button = ({ name, value, count, setCount }) => {
    return (
        <div className="button">
            <button className={name} onClick={() => setCount(value === '+' ? count + 1 : count - 1)}>
                {value}
            </button>
        </div>
    );
};

export default Button;
