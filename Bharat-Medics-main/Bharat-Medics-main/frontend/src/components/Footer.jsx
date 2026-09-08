import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='mt-32 overflow-hidden rounded-t-lg border border-gray-100 bg-white shadow-xl shadow-gray-100'>
      <div className='grid gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[2fr_1fr_1fr_1.2fr] text-sm'>

        <div className='space-y-5'>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='max-w-md text-gray-600 leading-7'>Bharat Medics helps patients find qualified doctors and book appointments with less waiting, clearer choices, and dependable access to care.</p>
          <div className='flex flex-wrap gap-2'>
            <span className='rounded-md bg-[#EEF3FF] px-3 py-2 text-xs font-medium text-primary'>Verified doctors</span>
            <span className='rounded-md bg-green-50 px-3 py-2 text-xs font-medium text-green-700'>Easy booking</span>
          </div>
        </div>

        <div>
          <p className='text-lg font-semibold mb-5 text-gray-800'>Company</p>
          <ul className='flex flex-col gap-3 text-gray-600'>
            <li><Link onClick={() => scrollTo(0, 0)} className='hover:text-primary transition' to='/'>Home</Link></li>
            <li><Link onClick={() => scrollTo(0, 0)} className='hover:text-primary transition' to='/about'>About us</Link></li>
            <li><Link onClick={() => scrollTo(0, 0)} className='hover:text-primary transition' to='/doctors'>Doctors</Link></li>
            <li><Link onClick={() => scrollTo(0, 0)} className='hover:text-primary transition' to='/contact'>Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className='text-lg font-semibold mb-5 text-gray-800'>Specialities</p>
          <ul className='flex flex-col gap-3 text-gray-600'>
            <li><Link onClick={() => scrollTo(0, 0)} className='hover:text-primary transition' to='/doctors/General physician'>General physician</Link></li>
            <li><Link onClick={() => scrollTo(0, 0)} className='hover:text-primary transition' to='/doctors/Gynecologist'>Gynecologist</Link></li>
            <li><Link onClick={() => scrollTo(0, 0)} className='hover:text-primary transition' to='/doctors/Dermatologist'>Dermatologist</Link></li>
            <li><Link onClick={() => scrollTo(0, 0)} className='hover:text-primary transition' to='/doctors/Neurologist'>Neurologist</Link></li>
          </ul>
        </div>

        <div className='rounded-lg bg-[#F8FAFC] p-5 border border-gray-100'>
          <p className='text-lg font-semibold mb-5 text-gray-800'>Get in touch</p>
          <ul className='flex flex-col gap-3 text-gray-600'>
            <li>
              <span className='block text-xs uppercase tracking-[0.16em] text-gray-400'>Phone</span>
              <a className='font-medium text-gray-800 hover:text-primary transition' href='tel:+919599346626'>+91 9599346626</a>
            </li>
            <li>
              <span className='block text-xs uppercase tracking-[0.16em] text-gray-400'>Email</span>
              <a className='font-medium text-gray-800 hover:text-primary transition' href='mailto:yuvi9969@gmail.com'>yuvi9969@gmail.com</a>
            </li>
            <li>
              <span className='block text-xs uppercase tracking-[0.16em] text-gray-400'>Office</span>
              <span className='font-medium text-gray-800'>Greater Noida, UP</span>
            </li>
          </ul>
        </div>

      </div>

      <div className='border-t border-gray-100 bg-[#F8FAFC] px-5'>
        <p className='py-5 text-sm text-center text-gray-500'>Copyright 2025 @BharatMedics - All Rights Reserved.</p>
      </div>

    </footer>
  )
}

export default Footer
