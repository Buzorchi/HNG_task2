import React from 'react'
import Card from './Card'
import posterimg from "../assets/Poster Image.png"
import posterimg1 from "../assets/Poster Image1.png"
import posterimg2 from "../assets/Poster Image2.png"
import posterimg3 from "../assets/Poster Image3.png"
import posterimg4 from "../assets/Poster Image4.png"
import posterimg5 from "../assets/Poster Image5.png"
import posterimg6 from "../assets/Poster Image6.png"
import posterimg7 from "../assets/Poster Image7.png"

const Featured = () => {
  return (
    <div>
      <div className='mt-32 mx-20 flex justify-between'>
        <p className='text-[#000] font-bold text-4xl '>Featured Movie</p>
        <div className='inline-flex items-center justify-center'>
          <a href="">
          <p className='text-[#BE123C] text-normal text-xl leading-6'>See more</p>
          </a>
          <a href="">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <path d="M7.5 4.66668L13.3333 10.5L7.5 16.3333" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          </a>
        </div>
      </div>
      {/* grid1 */}
      <div className="grid grid-cols-12 gap-12 mx-20 mt-10">
        <div className="col-span-3 ">
          <div>
            <img src={posterimg} alt="" data-testid="movie-poster" />
            <Card
              releaseDate="USA, 2016 - Current"
              movieTitle="Stranger Things"
              rating="86.0 / 100"
              percentageRating="97%"
              genre="Action, Adventure, Horror"
            />
          </div>
        </div>
        <div className="col-span-3 ">
          <div>
            <img src={posterimg1} alt="" data-testid="movie-poster" />
            <Card
              releaseDate="USA, 2005"
              movieTitle="Batman Begins"
              rating="82.0 / 100"
              percentageRating="70%"
              genre="Action, Adventure"
            />
          </div>
        </div>
        <div className="col-span-3 ">
          <div>
            <img src={posterimg2} alt="" data-testid="movie-poster" />
            <Card
              releaseDate="USA, 2018"
              movieTitle="Spider-Man : Into The Spider Verse"
              rating="84.0 / 100"
              percentageRating="87%"
              genre="Animation, Action, Adventure"
            />
          </div>
        </div>
        <div className="col-span-3 ">
          <div>
            <img src={posterimg3} alt="" data-testid="movie-poster" />
            <Card
              releaseDate="USA, 2017"
              movieTitle="Dunkirk"
              rating="78.0 / 100"
              percentageRating="94%"
              genre="Action, Drama, History"
            />
          </div>
        </div>
      </div>
      {/* grid2 */}
      <div className="grid grid-cols-12 gap-12 mx-20 mt-20">
        <div className="col-span-3 ">
          <div>
            <img src={posterimg7} alt="" data-testid="movie-poster" />
            <Card
              releaseDate="USA, 2021 "
              movieTitle="Dune"
              rating="84.0 / 100"
              percentageRating="75%"
              genre="Action, Adventure, Drama"
            />
          </div>
        </div>
        <div className="col-span-3 ">
          <div>
            <img src={posterimg4} alt="" data-testid="movie-poster" />
            <Card
              releaseDate="USA, 2021"
              movieTitle="No Time To Die"
              rating="76.0 / 100"
              percentageRating="68%"
              genre="Action, Adventure, Thriller"
            />
          </div>
        </div>
        <div className="col-span-3 ">
          <div>
            <img src={posterimg5} alt="" data-testid="movie-poster" />
            <Card
              releaseDate="USA, 2021"
              movieTitle="Shang-Chi and the Legend of the Ten Rings"
              rating="79.0 / 100"
              percentageRating="71%"
              genre="Action, Adventure, Fantasy"
            />
          </div>
        </div>
        <div className="col-span-3 ">
          <div>
            <img src={posterimg6} alt="" data-testid="movie-poster" />
            <Card
              releaseDate="USA, 2021"
              movieTitle="Don't Breathe 2"
              rating="61.0 / 100"
              percentageRating="46%"
              genre="Action, Drama, Horror "
            />
          </div>
        </div>
      </div>
      {/* grid3 */}
      <div className="grid grid-cols-12 gap-12 mx-20 mt-20">
        <div className="col-span-3 ">
          <div>
            <img src={posterimg7} alt="" data-testid="movie-poster" />
            <Card
              releaseDate="USA, 2021 "
              movieTitle="Dune"
              rating="84.0 / 100"
              percentageRating="75%"
              genre="Action, Adventure, Drama"
            />
          </div>
        </div>
        <div className="col-span-3 ">
          <div>
            <img src={posterimg4} alt="" data-testid="movie-poster" />
            <Card
              releaseDate="USA, 2021"
              movieTitle="No Time To Die"
              rating="76.0 / 100"
              percentageRating="68%"
              genre="Action, Adventure, Thriller"
            />
          </div>
        </div>
        <div className="col-span-3 ">
          <div>
            <img src={posterimg5} alt="" data-testid="movie-poster" />
            <Card
              releaseDate="USA, 2021"
              movieTitle="Shang-Chi and the Legend of the Ten Rings"
              rating="79.0 / 100"
              percentageRating="71%"
              genre="Action, Adventure, Fantasy"
            />
          </div>
        </div>
        <div className="col-span-3 ">
          <div>
            <img src={posterimg6} alt="" data-testid="movie-poster" />
            <Card
              releaseDate="USA, 2021"
              movieTitle="Don't Breathe 2"
              rating="61.0 / 100"
              percentageRating="46%"
              genre="Action, Drama, Horror "
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
