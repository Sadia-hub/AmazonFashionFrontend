import React from 'react'

function Reviews({reviews}) {
  return (
    <ul>
        {reviews.map((review, i) => (
            <li className="m-2 hover:bg-gray-100 flex" key={review._id}><span className='text-lg font-bold mb-4'>{i+1}</span>- {review.reviewText}
            
           
            </li>
        ))}
    </ul>
  )
}

export default Reviews