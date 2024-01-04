import React from 'react'
import Navigation from '../components/Navigation';
import Link from 'next/link';

interface User {
    id:number;
    name:string;
    email:string;
  }

const Users =  async () =>  {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users : User[] = await response.json();
  return (
    <main>
      <Navigation />
      <h3 className='text-center text-2xl my-5'>User List</h3>
      <table className='w-full'>
        <thead>
          <tr className='bg-gray-200 text-left border-b border-t border-gray-300'>
            <th>Name</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className='even:bg-gray-200 border-b border-gray-300'>
              <td>{user.name}</td>
              <td className='py-2'><Link href={`/users/${user.id}`} className="bg-blue-600 text-white py-1 px-2 rounded">View Detail</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default Users