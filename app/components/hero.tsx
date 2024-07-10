import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col mx-16 items-center mt-[120px] gap-6'>

      <h2 className='text-2xl text-center font-bold'>
        Organize Your Code Snippets 
        <span className={`text-[#FF3366]`}> Efficiently!!</span>
      </h2>

      <p className='text-center text-sm w-[450px] max-sm:w-full text-slate-500'>
        With our advanced tagging and search features, you can quickly find the code snippet you need. And with our easy-to-use interface, you can save time and effort. 
      </p>

      <button
        className='block px-9 py-3 text-sm font-medium text-white transition focus:outline-none'
        type='button'
      >
        {`Let's get started`}
      </button>

    </div>
  )
}

export default Hero
