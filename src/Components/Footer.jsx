import React from 'react'
import youtube from "../assets/fa-brands_youtube.png"
import facebook from "../assets/fa-brands_facebook-square.png"
import instagram from "../assets/fa-brands_instagram.png"
import twitter from "../assets/fa-brands_twitter.png"


const Footer = () => {
    return (
        <div>
            <div className='flex items-center justify-center py-10 px-4 mt-32'>
            
                <div>
                  <img src={facebook} alt="" className='mx-8' /> 
                </div>
                <div>
                  <img src={instagram} alt="" className='mx-8' />  
                </div>
                    <img src={twitter} alt="" className='mx-8'/>
                <div>
                    <img src={youtube} alt="" className='mx-8' />
                </div>
            </div>
            <div className='text-[#111827] text-lg font-bold flex items-center justify-center '>
                <p className='mx-8'>Conditions of Use</p>
                <p className='mx-8'>Privacy & Policy</p>
                <p className='mx-8'>Press Room</p>
            </div>
            <div>
                <p className='text-[#6B7280] font-bold text-lg flex items-center justify-center pt-6 pb-20 '>© 2021 MovieBox by Adriana Eka Prayudha </p>
            </div>
        </div>
    )
}

export default Footer
