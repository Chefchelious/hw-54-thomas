import React from 'react';
import Squares from "./Squares";

import thomas from "../../img/thomas.jpeg";

interface IProps {
    items: TSquare[];
    changeClick: (index: number) => void
}

const SquareWrapper:React.FC<IProps> = ({items, changeClick}) => {
    const imgEl: React.ReactNode = <img src={thomas} alt="thomas" />;
    return (
        <div className="square-container">
            {items.map((item, index) => (
                <Squares changeClick={() => changeClick(index)} ringEl={item.hasItem ? imgEl : ''} hasItem={item.hasItem} key={index} clicked={item.clicked} />
            ))}
        </div>
    );
};

export default SquareWrapper;