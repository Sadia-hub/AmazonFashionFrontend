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
                
                const id = localStorage.getItem("id")
                const productsWithVisibility = data.allReviews.map((product) => {

                    let isReviewedFilter = product.reviews.filter(({reviewerID, _id})=>reviewerID==id)
                    

                    return {...product,
                    isCollapsed: true,
                    isReviewed: isReviewedFilter.length > 0 ? isReviewedFilter[0]._id  : ""}
                });
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
