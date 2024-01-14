import { useState, useEffect } from 'react';

// Custom hook for fetching data from an API
const useProductsFetcher = (url) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                // Add isCollapsed property to each product to manage visibility
                const productsWithVisibility = data.allReviews.map((product) => ({
                    ...product,
                    isCollapsed: true,
                }));
                setProducts(productsWithVisibility);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { products, setProducts, isLoading, error };
};

export default useProductsFetcher;
