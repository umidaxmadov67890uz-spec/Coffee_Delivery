import React from 'react'
import Descriptions from '../../components/description/descriptions'
import { Link } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa'
import Form from '../../components/form/Form'


function FormPage() {
    
  return (
    <div>
      <div className='bg-white p-2 shadow-xl shadow-gray-300'><Link to={"/"} ><span className='text-2xl font-normal' ><FaChevronLeft /></span></Link></div>
      <div className='container px-2 m-auto'>
        <div className='bg-white p-3 mt-4 rounded-2xl m-auto md:w-4/5'>
            <Descriptions />
        </div>
        <div className='w-full bg-white rounded-2xl mt-4 p-2 m-auto md:w-4/5 sm:mb-5'>
            <h1 className='text-center font-bold text-xl'>Delivery Address</h1>
            <p className='text-center'>Please provide the address where you would like to receive your order.</p>
            <Form />
        </div>
      </div>
    </div>
  )
}

export default FormPage

