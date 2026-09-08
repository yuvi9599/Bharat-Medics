import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Doctors = () => {

  const { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div className='py-6'>
      <p className='section-kicker'>Find care</p>
      <h1 className='section-title mt-2'>Browse Doctors</h1>
      <p className='section-copy mt-2'>Filter by speciality and choose from available doctors.</p>
      <div className='flex flex-col sm:flex-row items-start gap-6 mt-7'>
        <button onClick={() => setShowFilter(!showFilter)} className={`secondary-button sm:hidden ${showFilter ? 'border-primary text-primary' : ''}`}>Filters</button>
        <div className={`flex-col gap-3 text-sm text-gray-600 sm:min-w-52 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto px-4 py-3 border border-gray-200 bg-white rounded-md transition-all cursor-pointer hover:border-primary hover:text-primary ${speciality === 'General physician' ? 'bg-[#EEF3FF] text-primary border-primary ' : ''}`}>General physician</p>
          <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto px-4 py-3 border border-gray-200 bg-white rounded-md transition-all cursor-pointer hover:border-primary hover:text-primary ${speciality === 'Gynecologist' ? 'bg-[#EEF3FF] text-primary border-primary ' : ''}`}>Gynecologist</p>
          <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto px-4 py-3 border border-gray-200 bg-white rounded-md transition-all cursor-pointer hover:border-primary hover:text-primary ${speciality === 'Dermatologist' ? 'bg-[#EEF3FF] text-primary border-primary ' : ''}`}>Dermatologist</p>
          <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto px-4 py-3 border border-gray-200 bg-white rounded-md transition-all cursor-pointer hover:border-primary hover:text-primary ${speciality === 'Pediatricians' ? 'bg-[#EEF3FF] text-primary border-primary ' : ''}`}>Pediatricians</p>
          <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto px-4 py-3 border border-gray-200 bg-white rounded-md transition-all cursor-pointer hover:border-primary hover:text-primary ${speciality === 'Neurologist' ? 'bg-[#EEF3FF] text-primary border-primary ' : ''}`}>Neurologist</p>
          <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto px-4 py-3 border border-gray-200 bg-white rounded-md transition-all cursor-pointer hover:border-primary hover:text-primary ${speciality === 'Gastroenterologist' ? 'bg-[#EEF3FF] text-primary border-primary ' : ''}`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='doctor-card' key={index}>
              <img className='bg-[#EAEFFF] w-full aspect-[4/3] object-contain' src={item.image} alt="" />
              <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                  <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p><p>{item.available ? 'Available' : "Not Available"}</p>
                </div>
                <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors
