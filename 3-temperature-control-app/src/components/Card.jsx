import React from 'react';

const Card = ({ value, circleColor }) => {
    return (
        <main>
            <div className="card position"></div>
            <div className={`circle position ${circleColor}`}>{value}°C</div>
        </main>
    );
};

export default Card;
