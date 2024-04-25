import { useState, useEffect } from 'react';

// Custom hook for fetching data with debouncing
const useDebounce = (initialValue, delay) => {
    const [value, setValue] = useState(initialValue);
    const [debouncedValue, setDebouncedValue] = useState(initialValue);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return [debouncedValue, setValue];
};

export default useDebounce;
