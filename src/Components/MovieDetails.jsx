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

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import tv from "../assets/tv.png"
// import home from "../assets/Home.png"
// import movie from "../assets/Movie Projector.png"
// import tvIcon from "../assets/TV show.png"
// import calendar from "../assets/Calendar.png"
// import trailer from "../assets/Trailer.png";
// import logout from "../assets/Logout.png"

// const MovieDetails = () => {
//     const { id } = useParams();
//     const [movieDetails, setMovieDetails] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [directors, setDirectors] = useState([]); // State for director(s) names
//     const TMDB_API_KEY = "9c907b704737ddefeda05142ea27101b";

//     useEffect(() => {
//         const fetchMovieDetails = async () => {
//             try {
//                 setLoading(true);
//                 const response = await axios.get(
//                     `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`
//                 );

//                 if (response.data) {
//                     setMovieDetails(response.data);

//                     // Fetch movie credits to get director(s)
//                     const creditsResponse = await axios.get(
//                         `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${TMDB_API_KEY}&language=en-US`
//                     );

//                     if (creditsResponse.data && creditsResponse.data.crew) {
//                         // Find the director(s) in the crew
//                         const directors = creditsResponse.data.crew.filter(
//                             (member) => member.job === "Director"
//                         );

//                         // Extract director names and set the directors state variable
//                         const directorNames = directors.map((director) => director.name);
//                         setDirectors(directorNames);
//                     }
//                 } else {
//                     console.error("No movie details found.");
//                 }
//             } catch (error) {
//                 console.error("Error fetching movie details:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchMovieDetails();
//     }, [id]); // Use "id" as a dependency

//     return (
//         <div className="flex w-[100%]">
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
//                     <p className='text-[#333333CC] font-semibold text-[0.9375rem] w-[8.5625rem] h-[4.3125rem] mt-10 mx-5 '>Play movie quizes and earn free tickets</p>
//                     <p className='w-[8.6875rem] h-[2.25rem] text-[#666] text-xs font-medium mx-5 mt-2'>50k people are playing now</p>
//                     <button className='h-[1.875rem] w-[7rem] rounded-full bg-[#BE123C33] inline-flex items-center px-3.5 py-2.5 mx-5 mt-2'>
//                         <span className='text-[#BE123C] text-xs font-medium'>Start playing</span>
//                     </button>
//                 </div>
//                 {/* log-out */}
//                 <div className='inline-flex items-center gap-6 mt-10 mx-5'>
//                     <img src={logout} alt="" />
//                     <p className=' w-[4.625rem] h-[1.875rem] text-[#666] text-xl font-semibold  ' >Log out</p>
//                 </div>
//             </div>

//             {/* Movie Details */}
//             <div className="p-6 w-[100%]">
//                 <div>
//                     <div
//                         className="w-[100%] rounded-2xl"
//                         style={{
//                             backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetails?.poster_path})`,
//                             backgroundSize: "cover",
//                             backgroundPosition: "center",
//                             backgroundRepeat: "no-repeat",
//                             minHeight: "300px", // Set a minimum height for the background div
//                         }}
//                     >
//                         <div className="flex justify-center items-center h-[300px]">
//                             <img src={trailer} alt="" />
//                         </div>
//                     </div>
//                 </div>
//                 {loading ? (
//                     <p>Loading...</p>
//                 ) : movieDetails ? (
//                     <div className="movie-details">
//                         <div className="my-4">
//                             <p
//                                 data-testid="movie-title"
//                                 className="font-bold opacity-70 flex items-center gap-2"
//                             >
//                                 {movieDetails.title}.
//                                 <h2 data-testid="movie-release-date">
//                                     {" "}
//                                     {movieDetails.release_date &&
//                                         movieDetails.release_date.slice(0, 4)}
//                                 </h2>
//                                 .{" "}
//                                 <h6
//                                     data-testid="movie-runtime"
//                                     className="font-bold"
//                                 >{`${movieDetails.runtime} Minuites`}</h6>
//                                 .
//                                 <h6 className="border-[1px] border-[#BE123C] rounded-lg p-1">
//                                     {movieDetails.genres.map((genre) => genre.name).join(" ")}
//                                 </h6>
//                             </p>
//                         </div>
//                         <div>
//                             <div className="flex">
//                                 <div>
//                                     <h6 data-testid="movie-overview">{movieDetails.overview}</h6>
//                                     <p className="mt-2">
//                                         Director: <span className="text-[#BE123C]">{directors.length > 1 ? "s" : ""}:{" "}
//                                             {directors.join(", ")}</span>
//                                     </p>
//                                 </div>
//                                 <div>side one</div>
//                             </div>
//                         </div>
//                     </div>
//                 ) : (
//                     <p>No movie details found.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default MovieDetails;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import tv from "../assets/tv.png"
import home from "../assets/Home.png"
import movie from "../assets/Movie Projector.png"
import tvIcon from "../assets/TV show.png"
import calendar from "../assets/Calendar.png"
import Trailer from "../assets/trailer.png";
import logout from "../assets/Logout.png"
import star from "../assets/Star.png"
import dropdown from "../assets/Dropdown.png"
import Notif from "../assets/Two Tickets.png"
import list from "../assets/List.png"
import Header from "./Header";
import Loading from "./Loading";

const MovieDetails= () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [directors, setDirectors] = useState([]);
  const [writers, setWriters] = useState([]);
  const [stars, setStars] = useState([]);
  const [releaseDateUTC, setReleaseDateUTC] = useState("");
  const [movieRating, setMovieRating] = useState(null);
  const TMDB_API_KEY = "9c907b704737ddefeda05142ea27101b";

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`
        );

        if (response.data) {
          setMovieDetails(response.data);

          // Convert the release date to UTC
          const releaseDate = new Date(response.data.release_date);
          const releaseDateUTC = releaseDate.toUTCString();

          // Fetch movie credits to get director(s)
          const creditsResponse = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${TMDB_API_KEY}&language=en-US`
          );

          if (creditsResponse.data && creditsResponse.data.crew) {
            const crew = creditsResponse.data.crew;

            // Extract director names
            const directors = crew
              .filter((member) => member.job === "Director")
              .map((director) => director.name);

            // Extract writer names
            const writers = crew
              .filter((member) => member.department === "Writing")
              .map((writer) => writer.name);

            // Extract star names (top billed cast)
            const stars = creditsResponse.data.cast
              .filter((cast) => cast.order < 5)
              .map((cast) => cast.name);

            setDirectors(directors);
            setWriters(writers);
            setStars(stars);
            setReleaseDateUTC(releaseDateUTC);
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
  }, [id]);

  // store the top-rated movie posters
  const [topRatedMoviePosters, setTopRatedMoviePosters] = useState([]);

  useEffect(() => {
    // Function to fetch top-rated movies
    const fetchTopRatedMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=vote_average.desc&vote_count.gte=1000`
        );

        if (response.data && response.data.results) {
          // Extract poster paths from the results
          const posters = response.data.results.map(
            (movie) => movie.poster_path
          );
          setTopRatedMoviePosters(posters.slice(0, 3)); // Get the top 3 posters
        } else {
          console.error("No top-rated movies found.");
        }
      } catch (error) {
        console.error("Error fetching top-rated movies:", error);
      }
    };

    fetchTopRatedMovies();
  }, []);

  // Store the trailer key
  const [trailerKey, setTrailerKey] = useState("");

  useEffect(() => {
    // Function to fetch the movie trailer
    const fetchMovieTrailer = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${TMDB_API_KEY}&language=en-US`
        );

        if (response.data && response.data.results.length > 0) {
          const trailer = response.data.results.find(
            (video) => video.type === "Trailer"
          );

          if (trailer) {
            setTrailerKey(trailer.key);
          }
        }
      } catch (error) {
        console.error("Error fetching movie trailer:", error);
      }
    };

    fetchMovieTrailer();
  }, [id]);

  useEffect(() => {
    // Function to fetch the movie rating
    const fetchMovieRating = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`
        );

        if (response.data && response.data.vote_average) {
          // Format the rating with one decimal place
          const formattedRating = (response.data.vote_average * 10).toFixed(1);
          setMovieRating(formattedRating);
        } else {
          console.error("No movie rating data found.");
        }
      } catch (error) {
        console.error("Error fetching movie rating:", error);
      }
    };

    fetchMovieRating();
  }, [id, TMDB_API_KEY]);

  return (
    <div>
      <div className="md:hidden pt-8 p-4 bg-black">
        <Header />
      </div>
      <div className="flex w-[100%]">
        {/* Left Sidebar */}
        <div className="hidden md:block border-2 border-r-slate-300 h-[100vh] rounded-r-[50px]">
          <Link to="/">
            <div className="flex items-center gap-2 p-10 text-center justify-center cursor-pointer">
              <img className="w-8" src={Logo} alt="" />
              <p>MovieBox</p>
            </div>
          </Link>

          <div className="flex flex-col text-center justify-center gap-4 w-[100%] mt-8">
            <div className="flex flex-col gap-4 justify-center">
              <Link to="/">
                <div className="flex gap-2 items-center p-3 hover:bg-[#BE123C1A] hover:border-r-2 border-r-[#BE123C] hover:text-[#BE123C] hover:font-bold w-[100%] cursor-pointer pl-8">
                  <img className="w-5" src={Home} alt="" />
                  <p className="text-center">Home</p>
                </div>
              </Link>
              <div className="flex gap-2 items-center p-3 hover:bg-[#BE123C1A] hover:border-r-2 border-r-[#BE123C] hover:text-[#BE123C] hover:font-bold w-[100%] cursor-pointer pl-8">
                <img className="w-5" src={Mov} alt="" />
                <p>Movies</p>
              </div>
              <div className="flex gap-2 items-center p-3 hover:bg-[#BE123C1A] hover:border-r-2 border-r-[#BE123C] hover:text-[#BE123C] hover:font-bold w-[100%] cursor-pointer pl-8">
                <img className="w-5" src={Tv} alt="" />
                <p>Tv Series</p>
              </div>
              <div className="flex gap-2 items-center p-3 hover:bg-[#BE123C1A] hover:border-r-2 border-r-[#BE123C] hover:text-[#BE123C] hover:font-bold w-[100%] cursor-pointer pl-8">
                <img className="w-5" src={Upcoming} alt="" />
                <p>Upcoming</p>
              </div>
            </div>

            <div className="w-[120px] m-auto border-[0.3px] rounded-xl px-2 py-4 border-[#BE123C] bg-[#BE123C1A] my-4">
              <p className="text-xs opacity-70">
                Play movie quizzes and earn free tickets
              </p>
              <p className="text-[10px] opacity-70">
                50k people are playing now
              </p>
              <button className="text-xs m-auto bg-[#be123d44] py-1 px-2 text-[#BE123C] rounded-lg">
                Start Playing
              </button>
            </div>

            <div className="flex gap-2 items-center p-3 hover:bg-[#BE123C1A] hover:border-r-2 border-r-[#BE123C] hover:text-[#BE123C] hover:font-bold w-[100%] pl-8">
              <img className="w-8" src={Logout} alt="" />
              <p>Log out</p>
            </div>
          </div>
        </div>

        {/* Movie Details */}
        <div className="p-6 w-[100%]">
          <div>
            <div
            // className="w-[100%] rounded-2xl"
            // style={{
            //   backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetails?.poster_path})`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            //   backgroundRepeat: "no-repeat",
            //   minHeight: "300px",
            // }}
            >
              {/* Trailer */}
              <div className="mb-4 mt-[-10px] rounded-xl">
                <div className="rounded-2xl overflow-hidden">
                  <YouTube
                    videoId={trailerKey}
                    opts={{
                      height: "390",
                      width: "100%",
                    }}
                  />
                </div>
              </div>

              {/* <div className="flex justify-center items-center h-[300px]">
              <img src={Trailer} alt="" />
            </div> */}
            </div>
          </div>
          {loading ? (
            <p>
              <Loading />
            </p>
          ) : movieDetails ? (
            <div className="movie-details">
              <div className="my-4 flex justify-between items-center gap-2 flex-wrap">
                <p
                  data-testid="movie-title"
                  className="font-bold opacity-70 flex flex-wrap items-center gap-2"
                >
                  {movieDetails.title}.
                  <h2 data-testid="movie-release-date"> {releaseDateUTC}</h2>.{" "}
                  <h6
                    data-testid="movie-runtime"
                    className="font-bold"
                  >{`${movieDetails.runtime} Minuites`}</h6>
                  .
                  <h6 className="border-[1px] border-[#BE123C] rounded-lg p-1">
                    {movieDetails.genres.map((genre) => genre.name).join(" ")}
                  </h6>
                </p>
                <div className="flex items-center gap-1">
                  <img className="w-5" src={Star} alt="" />
                  {movieRating !== null ? (
                    <p className="text-xs md:text-sm">
                      <span className="opacity-50">{movieRating}%</span>
                    </p>
                  ) : (
                    <p className="text-xs">Rating not available</p>
                  )}
                </div>
              </div>

              <div>
                <div className="flex flex-col md:flex-row gap-2 w-[100%]">
                  <div className="w-[100%] md:w-[75%]">
                    <h6
                      className="text-sm md:text-base mt-[-10px]"
                      data-testid="movie-overview"
                    >
                      {movieDetails.overview}
                    </h6>
                   <div className="flex flex-col gap-4">
                   <p className="mt-2">
                      Director:{" "}
                      <span className="text-[#BE123C]">
                        {directors.length > 1 ? "s" : ""} {directors.join(", ")}
                      </span>
                    </p>
                    <p>
                      Writers:{" "}
                      <span className="text-[#BE123C]">
                        {writers.join(", ")}
                      </span>
                    </p>
                    <p>
                      Stars:{" "}
                      <span className="text-[#BE123C]">{stars.join(", ")}</span>
                    </p>
                   </div>

                    <div className="flex flex-col md:flex-row gap-2 md:gap-0 items-center border-b pb-2 mt-2">
                      <p className="mr-2 bg-[#BE123C] rounded text-white py-1 px-4">
                        Top Rated Movie #65
                      </p>
                      <div className="relative">
                        <button
                          className="border rounded text-left px-6 py-1 flex items-center gap-3 ml-[-9px]"
                          onClick={toggleDropdown}
                        >
                          Award 9 Nominations
                          <img className="w-4" src={Dropdown} alt="" />
                        </button>
                        {isDropdownOpen && (
                          <div className="absolute border border-gray-300 mt-1 bg-white">
                            {/* Dropdown content */}
                            <p className="p-2 border-b">Movie 1</p>
                            <p className="p-2 border-b">Movie 2</p>
                            <p className="p-2">Movie 3</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] md:w-[25%]">
                    <div className="text-center">
                      <p className="bg-[#BE123C] text-white p-2 w-[100%] rounded flex justify-center items-center gap-2">
                        <img className="w-5" src={Notif} alt="" />
                        See Notification
                      </p>
                    </div>

                    <div className="text-center mt-2">
                      <p className="bg-[#BE123C1A] p-2 w-[100%] rounded flex justify-center items-center gap-2">
                        <img className="w-5" src={More} alt="" />
                        More Watch Options
                      </p>
                    </div>

                    <div>
                      <div className="mt-2 rounded w-fit">
                        <div className="flex gap-3">
                          {topRatedMoviePosters.map((posterPath, index) => (
                            <img
                              key={index}
                              src={`https://image.tmdb.org/t/p/original/${posterPath}`}
                              alt={`Best Movie ${index + 1}`}
                              className={`w-[100px] h-full${index > 0 ? 2 : 0}`}
                            />
                          ))}
                        </div>
                        <p className="bg-black bg-opacity-50 text-white p-1 w-[100%] rounded flex justify-center items-center gap-2 relative top-[-32px]">
                          <img className="w-5" src={MoreLight} alt="" />
                          Best Movies in September
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>No movie details found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;