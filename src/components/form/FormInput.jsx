import React, { useState } from 'react'

export const testtik = "hello"

function FormInput(props) {
    const {id, onChange, label, errorMessage,  value, ...inputProps} = props
    const [focused, setFocused] = useState(false)
    const handleFocus = () => {
        setFocused(true)
    }
    // console.log(value);
    
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input 
            className={
                `w-full outline-none border focus:ring-1 ${!value && focused?  "border-red-600 focus:border-violet-700" : "border-gray-300 focus:border-violet-700 "} focus:ring-violet-700 p-2 bg-gray-100 rounded-lg`
            }
            {...inputProps} 
            onChange={onChange} 
            onInvalid={handleFocus}
            id={id}
        />
        <span className={`${!value && focused? "block" : "hidden"} text-red-600`}>{errorMessage}</span>
    </div>
  )
}

export default FormInput
