import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='relative overflow-hidden flex flex-col md:flex-row flex-wrap bg-[#EEF3FF] rounded-lg px-6 md:px-10 lg:px-16 border border-[#DCE4FF] shadow-sm'>

            {/* --------- Header Left --------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-5 py-10 m-auto md:py-[9vw] md:mb-[-30px]'>
                <p className='section-kicker'>Easy healthcare access</p>
                <p className='text-3xl md:text-4xl lg:text-5xl text-[#111827] font-semibold leading-tight md:leading-tight lg:leading-tight'>
                    Book Appointment <br />  With Trusted Doctors
                </p>
                <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 text-gray-600 text-sm'>
                    <img className='w-28 drop-shadow-sm' src={assets.group_profiles} alt="" />
                    <p className='leading-6'>Browse verified specialists, compare availability, and schedule your visit in minutes.</p>
                </div>
                <a href='#speciality' className='primary-button m-auto md:m-0'>
                    Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
                </a>
            </div>

            {/* --------- Header Right --------- */}
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg drop-shadow-2xl' src={assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default Header
