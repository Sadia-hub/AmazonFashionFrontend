import { useState, useEffect } from 'react';

// Custom hook for fetching data from an API
const useProductsFetcher = (url) => {
    const [review, setReview] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
               
                return setReview(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { review, setReview, isLoading, error };
};

export default useProductsFetcher;
