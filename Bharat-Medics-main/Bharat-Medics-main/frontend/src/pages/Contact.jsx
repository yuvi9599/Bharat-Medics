import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Contact = () => {
  const { backendUrl } = useContext(AppContext)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const submitContactForm = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const { data } = await axios.post(backendUrl + '/api/user/contact', formData)

      if (data.success) {
        toast.success(data.message)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>

      <div className='text-center pt-10'>
        <p className='section-kicker'>Contact us</p>
        <h1 className='section-title mt-2'>We Are Here To Help</h1>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-8 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px] object-cover rounded-lg shadow-lg shadow-gray-200' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6 md:w-[360px]'>
          <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className=' text-gray-500'>B, 36 <br /> Greater Noida, UP, India</p>
          <p className=' text-gray-500'>Tel: (+91) 9599346626 <br /> Email: yuvi9969@gmail.com</p>
          <p className=' font-semibold text-lg text-gray-600'>CAREERS AT BHARAT MEDICS</p>
          <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='secondary-button'>Explore Jobs</button>
        </div>
        <form onSubmit={submitContactForm} className='flex flex-col gap-4 w-full md:max-w-[420px] bg-white border border-gray-100 rounded-lg p-6 shadow-sm'>
          <p className='font-semibold text-lg text-gray-600'>SEND A MESSAGE</p>
          <input name='name' value={formData.name} onChange={handleChange} className='form-field' type='text' placeholder='Your name' required />
          <input name='email' value={formData.email} onChange={handleChange} className='form-field' type='email' placeholder='Email address' required />
          <input name='phone' value={formData.phone} onChange={handleChange} className='form-field' type='tel' placeholder='Phone number' />
          <input name='subject' value={formData.subject} onChange={handleChange} className='form-field' type='text' placeholder='Subject' required />
          <textarea name='message' value={formData.message} onChange={handleChange} className='form-field min-h-32 resize-none' placeholder='How can we help?' required />
          <button disabled={isSubmitting} className='primary-button'>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

    </div>
  )
}

export default Contact
