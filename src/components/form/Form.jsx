import React, { useState } from 'react'
import FormInput from './FormInput';
import { inputData } from './FormData';
import FormRadio from './FormRadio';
import { radioData } from './FormRadioData';
import { useNavigate } from 'react-router-dom';

function Form() {
    const navigate = useNavigate()
    const [value, setValue] = useState("cash")
    const [values, setValues] = useState({
        city: "",
        neighborhood: "",
        street: "",
        houseNumber: "",
        additionalInformation: "",
        paymentMethod: value,
    })


    const handlefocus = (e) => {
        setValue(e)
        setValues({...values, paymentMethod: e})
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value.trim()})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(values.city !== "" && values.neighborhood !== "" && values.street !== "" && values.houseNumber !== ""){
            navigate("/")
            console.log(values);
            
        }
        console.log(values);
        
    }

    
    // console.log(values);
    
  return (
    <div >
        <form onSubmit={handleSubmit} className='sm:w-4/5 m-auto xl:w-full xl:px-5'>
            <div className='grid grid-cols-1 gap-y-4 m-auto xl:my-5 xl:grid-cols-2 xl:gap-x-5'>
                {inputData?.map(input => (<FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />))}
                <div className='flex mt-2'>
                    {radioData?.map(input => (<FormRadio key={input.id} {...input} handlefocus={handlefocus} presentValue={value} />))}
                </div>
            </div>
            <span className='w-full mt-5 flex flex-col xl:justify-center xl:items-end'>
                <button type='submit' className='w-full py-1 text-white text-center font-bold bg-violet-700 hover:bg-violet-600 cursor-pointer rounded-lg md:w-auto xl:px-5 xl:py-2 xl:text-xl'>submit</button>
            </span>
        </form>
    </div>
  )
}

export default Form
