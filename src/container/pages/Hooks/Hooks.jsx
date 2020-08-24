import React, { useState, useEffect } from 'react';
import './Hooks.css';

const Hooks = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Title change : ${count}`
        return () => {
            document.title = 'React App Hello World';
        }
    })

    return (
        <div className="p-hooks">
            <p>Nilai saya saat ini adalah: {count}</p>
            <button onClick={() => setCount(count + 1)}>Update Nilai</button>
        </div>
    )
}

export default Hooks;