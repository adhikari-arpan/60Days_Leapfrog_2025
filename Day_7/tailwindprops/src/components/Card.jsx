import React from 'react'

function Card({username, mainText, descripText="Could not load description"}) {
    console.log(username);
    
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtAHqoUV-9rcQpzK1zBE-0frLaCH3-bZrLyA&s"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{mainText}</h2>
        </div>
        <p className="text-gray-300">
          {descripText}
        </p>
      </div>
  )
}

export default Card