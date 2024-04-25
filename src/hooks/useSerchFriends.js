import { useState, useEffect } from 'react';
import axios from 'axios';

const useSearchFriend = (initialQuery, delay) => {
    const [query, setQuery] = useDebounce(initialQuery, delay);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const searchFriend = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`your_api_endpoint?query=${query}`);
                setResults(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            searchFriend();
        } else {
            setResults([]); // Clear results if query is empty
        }
    }, [query]);

    return { query, setQuery, loading, error, results };
};

export default useSearchFriend;