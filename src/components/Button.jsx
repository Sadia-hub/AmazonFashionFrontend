import React from 'react'

function Button({handleClick}) {
  return (
    <button className="rounded p-2 mb-5 hover:shadow-md hover:bg-black  transform hover:translate-y-1 transition-all duration-300 bg-gray-700 text-white" onClick={handleClick}>Write a Review</button>
  )
}

export default Button