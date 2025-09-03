import React from 'react'


const Footer = ({ day, date, location, organiser, phone, mail }) => {

  return (
    <div className='flex justify-between border-t-2 border-t-[#989595] py-15'>

      <div className='w-[346px]'>
        <p className='text-xl font-bold'>{day}</p>
      </div>

      <div className='flex flex-col gap-2.5'>
        <p className='font-bold'>{date}</p>
        <p>{location}</p>
      </div>


      <div className='flex flex-col gap-2.5'>
        <p>{organiser}</p>
        <p>{phone}</p>
        <p>{mail}</p>
      </div>



    </div>
  )
}

export default Footer;