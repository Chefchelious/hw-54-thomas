import React from 'react';

interface ISquares {
    class: string,
    changeClick?: React.MouseEventHandler,
    ringEl?: string,
    hasItem?: boolean
}

const Squares: React.FC<ISquares> = (props) => {
    return (
        <div className={props.class} onClick={props.changeClick}>
            {props.ringEl}
        </div>
    );
};

export default Squares;

