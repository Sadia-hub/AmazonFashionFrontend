import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCurrentUnixTime } from '../utils/helper';
import apiCall from '../apiCall';
import useReviewFetcher from "../hooks/useReviewFetcher"
const UpdateForm = () => {

   
  const { id } = useParams();
  const [ error, setError ] = useState("")
  const [ overall, setOverall ] = useState()
  const [ reviewText, setReviewText ] = useState("")


  const { review } = useReviewFetcher(`http://localhost/reviews/${id}`);

  useEffect(()=>{
    console.log("review", review)
    review && setOverall(review.overall)
    review && setOverall(review.reviewText)

  },[])

  
  const navigate = useNavigate();
 
  
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const body = {
        reviewText,
        overall,
        unixReviewTime: getCurrentUnixTime()
    }
    apiCall(`reviews/${id}`,JSON.stringify(body), "POST", "json", null)
    .then((res)=>{
        console.log(res)
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
            value={overall}
            onChange={({target})=>{setOverall(target.value)}}
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
            value={reviewText}
            onChange={({target})=>{setReviewText(target.value)}}
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
                        Edit Review
                    </button>
        </div>
      </form>
      <p className='text-red-500'>{error}</p>
    </div>
  );
};

export default UpdateForm;
