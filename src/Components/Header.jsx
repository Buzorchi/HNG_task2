import React from 'react'
import tv from "../assets/tv.png"
import imob from "../assets/imob.png"
import pngItem from "../assets/pngItem.png"


const Header = () => {
  return (
    <div>
       <div className='header'>
                <div className='inline-flex items-center gap-20 '>
                <div className='inline-flex items-center gap-6 ml-20'>
                    <a href="">
                        <img src={tv} alt="movie-icon" className='w-[3.125rem] h-[3.125rem] ' />
                    </a>
                    <a href="">
                        <p className='text-white text-base font-bold leading-6'>MovieBox</p>
                    </a>
                </div>

                <div className="flex flex-col justify-center items-stretch text-white">
                    <form>
                        <label class="relative block">
                            <input
                                class="w-[32.8125rem] placeholder:text-white bg-transparent border border-[#D1D5DB]  rounded-md py-2 pl-3 pr-10 focus:outline-none"
                                placeholder="What do you want to watch?" type="text" />

                            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <svg className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                                    height="30" viewBox="0 0 30 30">
                                    <path
                                        d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                                    </path>
                                </svg>
                            </span>
                        </label>
                    </form>
                </div>
                <div className='inline-flex gap-7  items-center'>
                    <p className='text-white text-base font-bold leading-6'>Sign in</p>
                    <div className='inline-flex relative'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <circle cx="18" cy="18" r="18" fill="#BE123C" />
                        </svg>
                        <svg className='absolute bottom-0 left-0 items=center' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.59998 8.40001C3.59998 7.73727 4.13723 7.20001 4.79998 7.20001H19.2C19.8627 7.20001 20.4 7.73727 20.4 8.40001C20.4 9.06275 19.8627 9.60001 19.2 9.60001H4.79998C4.13723 9.60001 3.59998 9.06275 3.59998 8.40001Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.59998 15.6C3.59998 14.9373 4.13723 14.4 4.79998 14.4H19.2C19.8627 14.4 20.4 14.9373 20.4 15.6C20.4 16.2628 19.8627 16.8 19.2 16.8H4.79998C4.13723 16.8 3.59998 16.2628 3.59998 15.6Z" fill="white" />
                        </svg>
                    </div>

                </div>
            </div>
                <div className='ml-20 mt-20 '>
                    <p className='text-white text-5xl font-bold leading-[3.5rem] w-[25.25rem] '>John Wick 3 : Parabellum</p>
                    <div className='mt-5 inline-flex items-center gap-3'>
                        <img src={imob} alt="imob-icon" />
                        <p className='leading-3 font-normal text-xs text-white'>86.0 / 100</p>
                    </div>
                    <div className='mt-5 inline-flex items-center gap-3 ml-6'>
                        <img src={pngItem} alt="pngItem-icon" />
                        <p className='leading-3 font-normal text-xs text-white'>97%</p>
                    </div>
                    <div>
                        <p className='text-white text-sm font-medium leading-[ 1.125rem] w-[18.875rem] mt-4 '>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                    </div>
                    <button className='flex py-1.5 px-4 items-center gap-2 rounded-md bg-[#BE123C] mt-5 '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z" fill="white" />
                        </svg>
                        <p className='text-sm font-bold leading-6 text-white '>WATCH TRAILER</p>
                    </button>
                </div>
                <div class=" flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
                    <div class="sm:flex hidden">
                        <p className="text-xs font-medium leading-none cursor-pointer text-[#9CA3AF] hover:border-white hover:text-base hover:font-bold hover:text-white border-t border-transparent pt-3 mr-4 px-2">1</p>
                        <p className="text-xs font-medium leading-none cursor-pointer text-[#9CA3AF] hover:border-white hover:text-base hover:font-bold hover:text-white border-t border-transparent pt-3 mr-4 px-2">2</p>
                        <p className="text-base font-bold leading-none cursor-pointer text-white  border-t border-white pt-3 mr-4 px-2">3</p>
                        <p className="text-xs font-medium leading-none cursor-pointer text-[#9CA3AF] hover:border-white hover:text-base hover:font-bold hover:text-white border-t border-transparent pt-3 mr-4 px-2">4</p>
                        <p className="text-xs font-medium leading-none cursor-pointer text-[#9CA3AF] hover:border-white hover:text-base hover:font-bold hover:text-white border-t border-transparent pt-3 mr-4 px-2">5</p>

                    </div>
                </div>
                </div>

    </div>
  )
}

export default Header
