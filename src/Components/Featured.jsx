import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import heart from "../assets/Heart.png";
import imob from '../assets/imob.png';
import pngItem from '../assets/PngItem.png';
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Featured = () => {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState({});
    const [favorites, setFavorites] = useState({}); // State to store favorite counts
    const TMDB_API_KEY = "9c907b704737ddefeda05142ea27101b";
    const navigate = useNavigate();

    // Load favorites from local storage when the component mounts
    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    // Save favorites to local storage whenever the favorites state changes
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const fetchFeaturedMovies = useCallback(async () => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
            );

            if (
                response.data &&
                response.data.results &&
                response.data.results.length > 0
            ) {
                const featuredMovies = response.data.results.slice(0, 10);

                const moviesWithRatings = await Promise.all(
                    featuredMovies.map(async (movie) => {
                        const ratingResponse = await axios.get(
                            `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${TMDB_API_KEY}&language=en-US`
                        );

                        if (ratingResponse.data && ratingResponse.data.vote_average) {
                            const ratingPercentage = (ratingResponse.data.vote_average * 10).toFixed(1);

                            return {
                                ...movie,
                                rating: ratingPercentage,
                            };
                        }

                        return movie;
                    })
                );

                setMovies(moviesWithRatings);

                const genresResponse = await axios.get(
                    `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`
                );

                if (genresResponse.data && genresResponse.data.genres) {
                    const genreMap = genresResponse.data.genres.reduce(
                        (acc, genre) => ({
                            ...acc,
                            [genre.id]: genre.name,
                        }),
                        {}
                    );

                    setGenres(genreMap);
                } else {
                    console.error("No genre data found.");
                }
            } else {
                console.error("No featured movie data found.");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, []);

    useEffect(() => {
        fetchFeaturedMovies();
    }, [fetchFeaturedMovies]);

    // Function to handle favoriting a movie
    const toggleFavorite = (movieId) => {
        setFavorites((prevFavorites) => ({
            ...prevFavorites,
            // Increment the favorite count
            [movieId]: (prevFavorites[movieId] || 0) + 1,
        }));
    };

    const calculateFavoritePercentage = (movieId) => {
        // Define your maximum favorite count
        const maxFavoriteCount = 100;
        const favoriteCount = favorites[movieId] || 0;
        // Calculate as a percentage with one decimal place
        return ((favoriteCount / maxFavoriteCount) * 100).toFixed(0);
    };

    const fetchMovieDetailsById = (movieId) => {
        navigate(`/movie/${movieId}`);
    };

    return (
        <div className=" m-20">
            <div className="flex justify-between">
                <p className=" text-[#000] font-bold text-4xl">Featured Movies</p>
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
            <div className="grid grid-cols-12 md:grid-cols-4 gap-20  mt-10 m-auto">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div key={movie.id} className="relative">
                            <div data-testid="movie-card" className="w-[9.375rem] md:w-[15.625rem]">
                                <img className="relative top-[4.063rem] left-[75%] w-[1.25rem] h-[1.21711rem] text-[#D1D5DB] rounded-full bg-gray-600  hover:text-gray-600" src={heart} alt="" />
                                <img
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                    alt={movie.title}
                                    data-testid="movie-poster"
                                    className="w-[9.375rem] md:w-fit shadow-md"
                                    onClick={() => fetchMovieDetailsById(movie.id)}
                                />

                                <div className="flex mt-2">
                                    <p className="text-[#9CA3AF] text-xs font-bold mt-3">
                                        USA,
                                        {movie.production_countries &&
                                            movie.production_countries.length > 0 &&
                                            movie.production_countries[0].name}
                                    </p>
                                    <p data-testid="movie-release-date" className="text-[#9CA3AF] text-xs font-bold mt-3">
                                        {movie.release_date && movie.release_date.slice(0, 4)}
                                    </p>
                                </div>
                                <h2
                                    data-testid="movie-title"
                                    className="text-[#111827] text-lg font-bold mt-4"
                                >
                                    {movie.title}
                                </h2>
                                <div className="flex justify-between mb-2">
                                    <div className="flex items-center mt-3 gap-2">
                                        <img src={imob} alt="" />
                                        <p className="leading-3 font-normal text-xs text-[#111827]">{movie.rating}/100</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <img
                                            src={pngItem}
                                            alt=""
                                            onClick={() => toggleFavorite(movie.id)}
                                        />
                                        <p className="leading-3 font-normal text-xs text-[#111827]">{calculateFavoritePercentage(movie.id)}%</p> {/* Display favorite count as a percentage */}
                                    </div>
                                </div>
                                <p className="text-[#9CA3AF] text-xs font-bold mt-2">
                                    {movie.genre_ids.map((genreId) => genres[genreId]).join(", ")}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <Loading />
                )}
            </div>
            {/* <div className="mt-8"> */}
            {/* Content for the row below the grid */}
            {/* </div> */}
        </div>
    );
};

export default Featured;