import React from 'react'
import tv from "../assets/tv.png"
import home from "../assets/Home.png"
import movie from "../assets/Movie Projector.png"
import tvIcon from "../assets/TV show.png"
import calendar from "../assets/Calendar.png"
import logout from "../assets/Logout.png"

const MagicBox = () => {
    return (
        <div>
            {/* left div*/}
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
                <div className='inline-flex items-center bg-[#BE123C1A]  border-r-8 border-r-[#BE123C] gap-4 mt-10 w-[14.125rem] h-[5.375rem] pr-0 bg-[#BE123C] '>
                    <img src={movie} alt="" className='ml-10' />
                    <p className='w-[3.8125rem] h-[1.875rem] text-[#BE123C] text-lg font-semibold ' >Movie</p>
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
        </div>
    )
}

export default MagicBox
