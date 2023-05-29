import React from 'react';

interface ISquares {
    changeClick?: React.MouseEventHandler,
    ringEl?: string,
    hasItem?: boolean
    clicked?: boolean
}

const Squares: React.FC<ISquares> = (props) => {
    const sqClasses = ['square'];

    if(props.clicked) {
        sqClasses.push('square-transparent');
    }
    return (
        <div className={sqClasses.join(' ')} onClick={props.changeClick}>
            {props.ringEl}
        </div>
    );
};

export default Squares;

