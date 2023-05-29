import React, {useState} from 'react';
import './App.css';
import Squares from "./components/Squares";
import Counter from "./components/Counter";
import ResetBtn from "./components/ResetBtn";

const App = () => {
    const createItems = (): TSquare[] => {
        const items: TSquare[] = [];

        for (let i: number = 0; i < 36; i++) {
            const item: TSquare = {
                hasItem: false,
                clicked: false
            };
            items.push(item);
        }

        const randomIndex: number = Math.floor(Math.random() * items.length);
        items[randomIndex] = {
            hasItem: true,
            clicked: false
        };

        return items;
    };

    const [items, setItems] = useState(createItems);
    const [counter, setCounter] = useState(0);

    console.log(items);

    const changeClick= (index: number) => {
        const itemsCopy = [...items];
        const itemObj = {...itemsCopy[index]};
        itemObj.clicked = !itemObj.clicked;
        itemsCopy[index] = itemObj;

        let counterCopy = counter;
        counterCopy++;
        setCounter(counterCopy);
        setItems(itemsCopy);
    };

    const resetGame = () => {
        setItems(createItems)
        setCounter(0);
    };

    return (
        <div className="App">
            <div className="square-container">
                {items.map((item, index: number) => (
                    item.clicked ? (
                        <Squares class="square square-transparent" ringEl={item.hasItem ? 'o' : ''} key={index} />
                    ) : (
                        <Squares changeClick={() => changeClick(index)} class="square" ringEl={item.hasItem ? 'o' : ''} hasItem={item.hasItem} key={index} />
                    )
                ))}
            </div>
            <div>
                <ResetBtn resetGame={resetGame} />
                <Counter counter={counter} />
            </div>

        </div>
    );
};

export default App;
