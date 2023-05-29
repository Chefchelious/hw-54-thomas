import React from 'react';

interface IResetBtn {
    resetGame: React.MouseEventHandler
};

const ResetBtn: React.FC<IResetBtn> = (props) => {
    return (
            <button onClick={props.resetGame}>Reset</button>

    );
};

export default ResetBtn;