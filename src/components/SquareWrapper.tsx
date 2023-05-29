import React from 'react';
import Squares from "./Squares";


interface IProps {
    items: TSquare[];
    changeClick: (index: number) => void
}

const SquareWrapper:React.FC<IProps> = ({items, changeClick}) => {
    return (
        <div className="square-container">
            {items.map((item, index) => (
                <Squares changeClick={() => changeClick(index)} ringEl={item.hasItem ? 'o' : ''} hasItem={item.hasItem} key={index} clicked={item.clicked} />
            ))}
        </div>
    );
};

export default SquareWrapper;