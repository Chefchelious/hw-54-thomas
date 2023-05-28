import React, {useState} from 'react';
import './App.css';

type TItem = {
    hasItem: boolean;
    clicked: boolean
};

const App = () => {
    const createItems = (): TItem[] => {
        const items: TItem[] = [];

        for (let i: number = 0; i < 36; i++) {
            const item: TItem = {
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
    console.log(items);

    return (
        <div className="App">

        </div>
    );
};

export default App;
