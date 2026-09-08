import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
    <div className='sticky top-0 z-30 flex items-center justify-between text-sm py-4 mb-6 bg-[#F8FAFC]/95 backdrop-blur border-b border-b-gray-200'>
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
      <ul className='md:flex items-center gap-7 font-medium hidden text-gray-600'>
        <NavLink to='/' className='group'>
          <li className='py-1 hover:text-primary transition'>Home</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors' className='group'>
          <li className='py-1 hover:text-primary transition'>Doctors</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about' className='group'>
          <li className='py-1 hover:text-primary transition'>About</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact' className='group'>
          <li className='py-1 hover:text-primary transition'>Contact</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-4 '>
        {
          token && userData
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-sm' src={userData.image} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-52 bg-white rounded-lg flex flex-col gap-4 p-4 shadow-xl shadow-gray-200 border border-gray-100'>
                  <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                  <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className='primary-button hidden md:block'>Create account</button>
        }
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

        {/* ---- Mobile Menu ---- */}
        <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-40 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6 border-b border-gray-100'>
            <img src={assets.logo} className='w-36' alt="" />
            <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-7' alt="" />
          </div>
          <ul className='flex flex-col items-center gap-3 mt-8 px-5 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-5 py-2 rounded-md inline-block'>Home</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors' ><p className='px-5 py-2 rounded-md inline-block'>Doctors</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about' ><p className='px-5 py-2 rounded-md inline-block'>About</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact' ><p className='px-5 py-2 rounded-md inline-block'>Contact</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
