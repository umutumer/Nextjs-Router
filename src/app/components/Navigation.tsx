import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <main className='flex items-center justify-between w-full h-20 bg-black text-white'>
        <Link href={'/'}>Users & Details</Link>
        <div>
            <Link className='mr-2' href={'/users'}>Users</Link>
        </div>
    </main>
  )
}

export default Navigation