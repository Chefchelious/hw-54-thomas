import React from 'react';

interface ICounter {
    counter: number
};

const Counter: React.FC<ICounter> = (props) => {
    return (
        <div>
            <p>Tries: {props.counter} </p>
        </div>
    );
};

export default Counter;