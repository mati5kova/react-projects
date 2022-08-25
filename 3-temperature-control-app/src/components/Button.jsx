import React from 'react';

const Button = ({ name, value, handleClick }) => {
    return (
        <div className="top-align">
            <button className={name} onClick={handleClick}>
                {value}
            </button>
        </div>
    );
};

export default Button;
