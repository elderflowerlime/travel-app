import React from 'react'

function Contact() {
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
        <h2 className='text-center text-gray-700'>Send us a message</h2>
        <p className='text-center text-gray-700 py-2'>We're standingby!</p>
        <div className='grid md:grid-cols-2'>
            <img className='w-full md:h-full objects-cover p-2 max-h-[500px]' src="https://images.unsplash.com/photo-1669733040274-1e3c13e731db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" alt="" />
            <form>
                <div className='grid grid-cols-2'>
                    <input className='border m-2 p-2' type="text" placeholder='First' />
                    <input className='border m-2 p-2' type="text" placeholder='Last' />
                    <input className='border m-2 p-2' type="text" placeholder='Email' />
                    <input className='border m-2 p-2' type="text" placeholder='Phone' />
                    <input className='border col-span-2 p-2 m-2' type="text" placeholder='Address' />
                    <textarea className='border  col-span-2 m-2 p-2' cols="30" rows='10'></textarea>
                    <button className='col-span-2 m-2'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact