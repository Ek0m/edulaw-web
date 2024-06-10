import Image from 'next/image'
import React from 'react'

function DashboardHeader() {
  return (
    <div className='p-5 shadow-sm border-b flex justify-between lg:justify-end'>
        <div className="flex items-center lg:hidden ">
        <Image src="/logo.png" alt="img" width={80} height={100} />
        <h1 className="text-3xl">EduLaw</h1>
      </div>
        <div className='flex gap-2 items-center  '>
            <h2 className='text-3xl hidden lg:flex'>Summayah</h2>
            <div className='bg-purple-800 text-white font-bold text-xl rounded-full p-2 px-4 '>S</div>
        </div>
    </div>
  )
}

export default DashboardHeader