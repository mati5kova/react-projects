import React from 'react';

const Item = ({ value, id }) => {
    return <p key={id}>{value}</p>;
};

export default Item;
