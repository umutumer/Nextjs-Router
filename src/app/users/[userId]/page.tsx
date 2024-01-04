import Navigation from '@/app/components/Navigation'
import Link from 'next/link';
import React from 'react'


interface User {
    id: number;
    name: string;
    email: string;
}

const getUser = async (id: number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = response.json();
    return data;
}

const UserDetail = async ({ params }: {
    params: { userId: number }
}) => {
    const user = await getUser(params.userId);
    return (
        <main className='relative'>
            <Navigation />
            <h3 className='w-full text-center my-5 text-2xl'>{`${user.name}'s Details`}</h3>
            <Link href={'/users'} className='absolute right-2 top-28 bg-blue-600 text-white py-1 px-2 rounded'> Back To Users</Link>
            <table className='w-full'>
                <thead>
                    <tr className='bg-gray-200 text-left border-b border-t border-gray-300'>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b border-gray-300'>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>

                </tbody>
            </table>
        </main>
    )
}


export default UserDetail