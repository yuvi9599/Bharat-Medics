import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-[#262626]'>
            <p className='section-kicker'>Specialities</p>
            <h1 className='section-title'>Find by Speciality</h1>
            <p className='section-copy sm:w-1/2 text-center'>Choose the right care category and book a slot with a trusted professional.</p>
            <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
                {specialityData.map((item, index) => (
                    <Link to={`/doctors/${item.speciality}`} onClick={() => scrollTo(0, 0)} className='flex flex-col items-center justify-center text-xs cursor-pointer flex-shrink-0 bg-white border border-gray-100 rounded-lg w-32 h-32 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300' key={index}>
                        <img className='w-14 sm:w-16 mb-3' src={item.image} alt="" />
                        <p className='text-center text-gray-700 font-medium'>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu
