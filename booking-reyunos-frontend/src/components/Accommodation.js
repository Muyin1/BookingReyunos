import React from 'react';

const Accommodation = ({ accommodation }) => {
    return (
        <div className="accommodation">
            <h2>{accommodation.name}</h2>
            <p>{accommodation.description}</p>
            <p>Precio: {accommodation.price} USD</p>
        </div>
    );
};

export default Accommodation;