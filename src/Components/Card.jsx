import React from 'react'
import imob from "../assets/imob.png"
import pngItem from "../assets/pngItem.png"


const Card = ({ releaseDate, movieTitle, rating, genre, percentageRating }) => {
  return (
    <div data-testid="movie-card">
      <p className='text-[#9CA3AF] text-xs font-bold mt-3' data-testid="movie-release-date">{releaseDate}</p>
      <p className='text-[#111827] text-lg font-bold mt-4' data-testid="movie-title" >{movieTitle}</p>
      <div className='mt-3 inline-flex items-center gap-3'>
        <img src={imob} alt="imob-icon" />
        <p className='leading-3 font-normal text-xs text-[#111827]'>{rating}</p>
      </div>
      <div className='mt-3 inline-flex items-center gap-3 ml-10'>
        <img src={pngItem} alt="pngItem-icon" />
        <p className='leading-3 font-normal text-xs text-[#111827]'>{percentageRating}</p>
      </div>
      <p className='text-[#9CA3AF] text-xs font-bold mt-2 '>{genre}</p>


    </div>
  )
}

export default Card
