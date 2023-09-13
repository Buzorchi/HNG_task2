// import React from 'react'
// import tv from "../assets/tv.png"
// import home from "../assets/Home.png"
// import movie from "../assets/Movie Projector.png"
// import tvIcon from "../assets/TV show.png"
// import calendar from "../assets/Calendar.png"
// import logout from "../assets/Logout.png"

// const MagicBox = () => {
//     return (
//         <div>
//             {/* left sideBar*/}
//             <div className='border-[ 0rem 2.8125rem 2.8125rem 0rem] w-[14.125rem] h-[61.375rem] border-[#666666] border-[1px] border-solid rounded-r-[2.8125rem]  '>
//                 {/* icon */}
//                 <div className='inline-flex items-center gap-6 mt-10 mx-5'>
//                     <img src={tv} alt="movie-icon" className='w-[3.125rem] h-[3.125rem] ' />
//                     <p className='text-[#333] text-2xl font-bold leading-6'>MovieBox</p>
//                 </div>
//                 {/* home */}
//                 <div className='inline-flex text-center gap-4 mt-24 ml-10'>
//                     <img src={home} alt="" />
//                     <p className='w-[3.8125rem] h-[1.875rem] text-[#666] text-lg font-semibold ' >Home</p>
//                 </div>
//                 {/* movie */}
//                 <div className='inline-flex items-center bg-[#BE123C1A]  border-r-8 border-r-[#BE123C] gap-4 mt-10 w-[14.125rem] h-[5.375rem] pr-0 '>
//                     <img src={movie} alt="" className='ml-10' />
//                     <p className='w-[3.8125rem] h-[1.875rem] text-[#BE123C] text-lg font-semibold'>Movie</p>
//                 </div>
//                 {/* tv series */}
//                 <div className='inline-flex text-center gap-4 mt-20 ml-10'>
//                     <img src={tvIcon} alt="" />
//                     <p className='w-[5.75rem] h-[1.875rem] text-[#666] text-lg font-semibold ' >TV Series</p>
//                     {/* upcoming */}
//                 </div>
//                 <div className='inline-flex text-center gap-4 mt-20 ml-10'>
//                     <img src={calendar} alt="" />
//                     <p className='w-[3.8125rem] h-[1.875rem] text-[#666] text-lg font-semibold ' >Upcoming</p>
//                 </div>
//                 {/* text-box */}
//                 <div className='bg-[#F8E7EB66] rounded-2xl border-[#BE123CB2] w-[10.625rem] h-[13.125rem] border-solid border-[1px] mx-7 mt-14'>
//                 <p className='text-[#333333CC] font-semibold text-[0.9375rem] w-[8.5625rem] h-[4.3125rem] mt-10 mx-5 '>Play movie quizes and earn free tickets</p>
//                 <p className='w-[8.6875rem] h-[2.25rem] text-[#666] text-xs font-medium mx-5 mt-2'>50k people are playing now</p>
//                     <button className='h-[1.875rem] w-[7rem] rounded-full bg-[#BE123C33] inline-flex items-center px-3.5 py-2.5 mx-5 mt-2'>
//                         <span className='text-[#BE123C] text-xs font-medium'>Start playing</span>
//                     </button>
//                 </div>
//                 {/* log-out */}
//                 <div className='inline-flex items-center gap-6 mt-10 mx-5'>
//                     <img src={logout} alt="" />
//                     <p className=' w-[4.625rem] h-[1.875rem] text-[#666] text-xl font-semibold  ' >Log out</p>   
//                     </div>
//             </div>
//         </div>
//     )
// }

// export default MagicBox

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import tv from "../assets/tv.png"
import home from "../assets/Home.png"
import movie from "../assets/Movie Projector.png"
import tvIcon from "../assets/TV show.png"
import calendar from "../assets/Calendar.png"
import trailer from "../assets/Trailer.png";
import logout from "../assets/Logout.png"

const MovieDetails = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [directors, setDirectors] = useState([]); // State for director(s) names
    const TMDB_API_KEY = "9c907b704737ddefeda05142ea27101b";

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`
                );

                if (response.data) {
                    setMovieDetails(response.data);

                    // Fetch movie credits to get director(s)
                    const creditsResponse = await axios.get(
                        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${TMDB_API_KEY}&language=en-US`
                    );

                    if (creditsResponse.data && creditsResponse.data.crew) {
                        // Find the director(s) in the crew
                        const directors = creditsResponse.data.crew.filter(
                            (member) => member.job === "Director"
                        );

                        // Extract director names and set the directors state variable
                        const directorNames = directors.map((director) => director.name);
                        setDirectors(directorNames);
                    }
                } else {
                    console.error("No movie details found.");
                }
            } catch (error) {
                console.error("Error fetching movie details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [id]); // Use "id" as a dependency

    return (
        <div className="flex w-[100%]">
            {/* left sideBar*/}
            <div className='border-[ 0rem 2.8125rem 2.8125rem 0rem] w-[14.125rem] h-[61.375rem] border-[#666666] border-[1px] border-solid rounded-r-[2.8125rem]  '>
                {/* icon */}
                <div className='inline-flex items-center gap-6 mt-10 mx-5'>
                    <img src={tv} alt="movie-icon" className='w-[3.125rem] h-[3.125rem] ' />
                    <p className='text-[#333] text-2xl font-bold leading-6'>MovieBox</p>
                </div>
                {/* home */}
                <div className='inline-flex text-center gap-4 mt-24 ml-10'>
                    <img src={home} alt="" />
                    <p className='w-[3.8125rem] h-[1.875rem] text-[#666] text-lg font-semibold ' >Home</p>
                </div>
                {/* movie */}
                <div className='inline-flex items-center bg-[#BE123C1A]  border-r-8 border-r-[#BE123C] gap-4 mt-10 w-[14.125rem] h-[5.375rem] pr-0 '>
                    <img src={movie} alt="" className='ml-10' />
                    <p className='w-[3.8125rem] h-[1.875rem] text-[#BE123C] text-lg font-semibold'>Movie</p>
                </div>
                {/* tv series */}
                <div className='inline-flex text-center gap-4 mt-20 ml-10'>
                    <img src={tvIcon} alt="" />
                    <p className='w-[5.75rem] h-[1.875rem] text-[#666] text-lg font-semibold ' >TV Series</p>
                    {/* upcoming */}
                </div>
                <div className='inline-flex text-center gap-4 mt-20 ml-10'>
                    <img src={calendar} alt="" />
                    <p className='w-[3.8125rem] h-[1.875rem] text-[#666] text-lg font-semibold ' >Upcoming</p>
                </div>
                {/* text-box */}
                <div className='bg-[#F8E7EB66] rounded-2xl border-[#BE123CB2] w-[10.625rem] h-[13.125rem] border-solid border-[1px] mx-7 mt-14'>
                    <p className='text-[#333333CC] font-semibold text-[0.9375rem] w-[8.5625rem] h-[4.3125rem] mt-10 mx-5 '>Play movie quizes and earn free tickets</p>
                    <p className='w-[8.6875rem] h-[2.25rem] text-[#666] text-xs font-medium mx-5 mt-2'>50k people are playing now</p>
                    <button className='h-[1.875rem] w-[7rem] rounded-full bg-[#BE123C33] inline-flex items-center px-3.5 py-2.5 mx-5 mt-2'>
                        <span className='text-[#BE123C] text-xs font-medium'>Start playing</span>
                    </button>
                </div>
                {/* log-out */}
                <div className='inline-flex items-center gap-6 mt-10 mx-5'>
                    <img src={logout} alt="" />
                    <p className=' w-[4.625rem] h-[1.875rem] text-[#666] text-xl font-semibold  ' >Log out</p>
                </div>
            </div>

            {/* Movie Details */}
            <div className="p-6 w-[100%]">
                <div>
                    <div
                        className="w-[100%] rounded-2xl"
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetails?.poster_path})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            minHeight: "300px", // Set a minimum height for the background div
                        }}
                    >
                        <div className="flex justify-center items-center h-[300px]">
                            <img src={trailer} alt="" />
                        </div>
                    </div>
                </div>
                {loading ? (
                    <p>Loading...</p>
                ) : movieDetails ? (
                    <div className="movie-details">
                        <div className="my-4">
                            <p
                                data-testid="movie-title"
                                className="font-bold opacity-70 flex items-center gap-2"
                            >
                                {movieDetails.title}.
                                <h2 data-testid="movie-release-date">
                                    {" "}
                                    {movieDetails.release_date &&
                                        movieDetails.release_date.slice(0, 4)}
                                </h2>
                                .{" "}
                                <h6
                                    data-testid="movie-runtime"
                                    className="font-bold"
                                >{`${movieDetails.runtime} Minuites`}</h6>
                                .
                                <h6 className="border-[1px] border-[#BE123C] rounded-lg p-1">
                                    {movieDetails.genres.map((genre) => genre.name).join(" ")}
                                </h6>
                            </p>
                        </div>
                        <div>
                            <div className="flex">
                                <div>
                                    <h6 data-testid="movie-overview">{movieDetails.overview}</h6>
                                    <p className="mt-2">
                                        Director: <span className="text-[#BE123C]">{directors.length > 1 ? "s" : ""}:{" "}
                                            {directors.join(", ")}</span>
                                    </p>
                                </div>
                                <div>side one</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>No movie details found.</p>
                )}
            </div>
        </div>
    );
};

export default MovieDetails;