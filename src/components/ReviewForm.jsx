import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import apiCall from '../apiCall';
import { getCurrentUnixTime } from '../utils/helper';
const ReviewForm = () => {


  const { id } = useParams();
  const [ error, setError ] = useState("")
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    rating:0,
    reviewText:""
  });

  
  
  // Example usage
  
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here

   

    const body = {
      reviewText:formData.reviewText,
        overall:formData.rating,
        asin:id,
        reviewerID:localStorage.getItem("id"),
        reviewerName:localStorage.getItem("name"),
        unixReviewTime: getCurrentUnixTime()
    }
    
    apiCall(`reviews`,JSON.stringify(body), "POST", "json", null)
    .then((res)=>{
        console.log("res of contact is",res)
        if(res.success) {
            navigate("/") 
        }
        else
        setError(res.msg)
        
    })
    .catch((err)=>{
        console.log(err)
    })
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-6">Review Form</h1>
      <h1 className="text-2xl font-semibold mb-6">Product Id: {id}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="asin" className="block text-sm font-medium text-gray-600">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            min={0}
            max={5}
            value={formData.rating}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="asin" className="block text-sm font-medium text-gray-600">
            Review
          </label>
          <textarea
            id="reviewText"
            name="reviewText"
            value={formData.reviewText}
            onChange={handleChange}
            required
            rows="4"  // Specify the number of rows you want
            className="mt-1 p-2 w-full border rounded-md"
          ></textarea>
        </div>

        <div className="mt-6">
        <button
                        className="p-2 rounded border-2 border-black"
                        type="submit"
                        
                    >
                        Add Review
                    </button>
        </div>
      </form>
      <p className='text-red-500'>{error}</p>
    </div>
  );
};

export default ReviewForm;
