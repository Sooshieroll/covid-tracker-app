import React from 'react';

function Card(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <div>{props.newCases}</div>
            <div>{props.totalCases}</div>
        </div>
    )
}

export default Card;