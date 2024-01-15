import React, { useState, useEffect } from 'react';
import useProductsFetcher from "../hooks/useProductsFetcher"
import Reviews from './Reviews';
import BarChart from './charts/BarChart';

import { useNavigate } from 'react-router-dom';

const ReviewsComponent = () => {

    const [ name, setName ] = useState("")
    const [ showGraph, setShowGraph ] = useState(false)

    useEffect(()=>{
        const name = localStorage.getItem("name")       
        setName(()=>name)
    }, [])

    const navigate = useNavigate();
    
    const { products, setProducts, isLoading, error } = useProductsFetcher("http://localhost:8080/reviews");
    

    const toggleReviews = (productId) => {
        setProducts((prevProducts) => {
            return prevProducts.map((product) => {
                if (product.productID === productId) {
                    return { ...product, isCollapsed: !product.isCollapsed };
                }
                return product;
            });
        });
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };
  
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="container mx-auto p-4" >
            <h1 className="text-2xl font-bold mb-4" >Welcome {name}</h1>
            <div className="flex justify-between items-between min-w-full">
                
                <h1 className="text-2xl font-bold mb-4" >Reviews</h1>
                <button className="p-2 rounded border-2 border-black mb-2"
                onClick={handleLogout}
                >Logout</button>
            </div>
            
           
            <table className="min-w-full border border-collapse border-gray-800">
                <thead>
                    <tr className="bg-gray-700 text-white">
                        <th className="py-2 px-4">Product ID</th>
                        <th className="py-2 px-4">Total Reviews</th>                       
                        <th className="py-2 px-4">Toggle Reviews</th>
                        <th className="py-2 px-4">Charts</th>
                        <th className="py-2 px-4">Your Reviews</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {products && products.map((product) => (
                        <React.Fragment key={product.productID}>
                            <tr className="border-b border-gray-600 hover:bg-gray-100 hover:bg-gray-100">
                                <td className="py-2 px-4">{product.productID}</td>
                                <td className="py-2 px-4">{product.reviews.length}</td>
                                <td className="py-2 px-4" >
                                    <button onClick={() => toggleReviews(product.productID)}>
                                        {product.isCollapsed ? 'See Reviews' : 'Hide Reviews'}
                                    </button>
                                </td>
                                <td className="py-2 px-4 cursor-pointer" onClick={()=>setShowGraph((prev)=>!prev)}>
                                    <img src="/graph.svg" alt="My SVG Image" height="40px" width="40px"/>                                    
                                </td>
                                <td className="py-2 px-4 cursor-pointer" >
                                    {
                                        product.isReviewed ? <img src="/edit.svg" alt="My SVG Image" height="40px" width="40px" onClick={()=>navigate(`/update/${product.isReviewed}`)}/> : <img src="/add.svg" alt="My SVG Image" height="40px" width="40px" onClick={()=>navigate(`/review/${product.productID}`)}/>
                                    }
                                                                      
                                </td>
                            </tr>
                            {!product.isCollapsed && (
                                <tr className="py-2 px-4 border-collapse border-gray-800">
                                    <td colSpan="4">
                                        <Reviews reviews={product.reviews}/>
                                        
                                    </td>
                                </tr>
                            )}
                             {showGraph && (
                                <tr className="py-2 px-4 border-collapse border-gray-800">
                                    <td colSpan="4">
                                        <BarChart dataPoints={product.reviews} />
                                        
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>

            
        </div>
    );
};

export default ReviewsComponent;
