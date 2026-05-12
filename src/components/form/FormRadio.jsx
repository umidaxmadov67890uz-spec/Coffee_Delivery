import React from 'react'

function FormRadio(props) {
    const {label, handlefocus, value, presentValue, ...inputProps} = props
    
    
    
  return (
    <div>
        <span>
            <label htmlFor="card" onClick={() => handlefocus(value)} className={`py-2 px-6 text-lg font-bold ${value === (presentValue) ? "bg-violet-700 text-white" : "bg-gray-100"} transition-all cursor-pointer rounded-sm`}>{label}</label>
            <input {...inputProps} value={value} className='opacity-0'/>
        </span>
        {/* <span>
            <label htmlFor="card" onClick={() => handlefocus("card")} className={`py-2 px-6 text-lg font-bold ${value === "card" ? "bg-violet-700 text-white" : "bg-gray-100"} transition-all cursor-pointer rounded-sm`}>by card</label>
            <input type="radio" name='paymentMethod' id='card' value={"card"} className='opacity-0'/>
        </span> */}
    </div>
  )
}

export default FormRadio
