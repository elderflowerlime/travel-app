import React from 'react'

function Hero() {
  return (
    <div className='w-full h-[90vh]'>
        <img src="https://images.unsplash.com/photo-1669733040274-1e3c13e731db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" alt=""
        className='w-full h-full object-cover' />
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-50% max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
                <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam minus ducimus non reprehenderit minima dicta ratione nisi, voluptatum officiis voluptates magnam quod mollitia saepe incidunt repellendus in dolore. Nobis, odio.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero