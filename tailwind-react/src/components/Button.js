import React, { useState } from 'react'

export default function Button() {
    const [click, setClick] = useState(0);

    const ClickHandler = () => {
        setClick(click + 1);
    }

    return (
        <button 
            onClick={ClickHandler}
            className="px-4 py-2 bg-gray-500 rounded-md text-white border-2"
        >
            you clicked {click} times
        </button>
    )
}
