import React, { useState } from 'react';


const useLocalStorage = (key, initialValue) => {
    const setIt = value => window.localStorage.setItem(key, JSON.stringify(value))
    const [state, setState] = useState(() => {
        const item = window.localStorage.getItem(key)
        if(item) {
            return JSON.parse(item);
        }
        setIt(initialValue)
        return initialValue;
    })

    const setValueLocalStorage = newValue => {
        setIt(newValue)
        setValue(newValue)
    }

    return [value, setValueLocalStorage];
}

export default useLocalStorage;
