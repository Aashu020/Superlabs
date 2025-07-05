import React from 'react'

const Desc = () => {
  return (
    <>
        <div className='bg-red-500 p-[1rem] md:p-[5rem] space-y-4 md:space-y-10 flex flex-col justify-center text-white'>
            <h1 className='text-2xl md:text-4xl lg:text-5xl text-center'>
            Largest number of products & categories of
            medical devices on a single place - 1mdm.com
            </h1>
            <h3 className='text-lg md:text-2xl lg:text-3xl text-center '>
                {/* <span className='w-[50%]'> */}
                Connect with buyers worldwide for your product &
                start selling now.
                {/* </span> */}
            </h3>
        </div>

        <div className='py-10 px-5'>
            <h1 className='text-red-900 md:text-4xl md:text-center font-bold'>Grow your business with a suite of tools built for you</h1>
        </div>
    </>

  )
}

export default Desc