import React from 'react'

const Home = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center" style={{height : "600px"}}>
            <h1 className='font-black text-6xl p-4'>BNB-603</h1>
            <h4 className='p-4 font-bold text-1xl'>The world’s Bitcoin messenger and marketplace</h4>
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Get Started
            </button>
        </div>
    </div>
  )
}

export default Home