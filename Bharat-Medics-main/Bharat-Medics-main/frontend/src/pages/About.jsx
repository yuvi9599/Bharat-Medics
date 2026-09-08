import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center pt-12'>
        <p className='section-kicker'>About us</p>
        <h1 className='section-title mt-2'>Healthcare Access Made Simpler</h1>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12 items-center'>
        <img className='w-full md:max-w-[380px] rounded-lg shadow-lg shadow-gray-200 object-cover' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 section-copy'>
          <p>Bharat Medics is a doctor booking web application designed to make healthcare appointments easier across India. Patients can discover qualified doctors, check specialities, and schedule consultations without friction.</p>
          <p>The platform brings availability, profile details, and appointment management into one simple experience so patients and doctors can spend less time coordinating and more time focused on care.</p>
          <b className='text-gray-900 text-base'>Our Vision</b>
          <p>Our vision is to create a dependable healthcare experience where every user can access the right provider at the right time.</p>
        </div>
      </div>

      <div className='text-center my-8'>
        <p className='section-kicker'>Why choose us</p>
        <h2 className='section-title mt-2'>Designed Around Patient Convenience</h2>
      </div>

      <div className='grid md:grid-cols-3 gap-4 mb-20'>
        <div className='bg-white border border-gray-100 rounded-lg px-8 py-10 flex flex-col gap-5 text-[15px] text-gray-600 shadow-sm hover:shadow-lg transition-all duration-300'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='bg-white border border-gray-100 rounded-lg px-8 py-10 flex flex-col gap-5 text-[15px] text-gray-600 shadow-sm hover:shadow-lg transition-all duration-300'>
          <b>CONVENIENCE: </b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='bg-white border border-gray-100 rounded-lg px-8 py-10 flex flex-col gap-5 text-[15px] text-gray-600 shadow-sm hover:shadow-lg transition-all duration-300'>
          <b>PERSONALIZATION:</b>
          <p >Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About
