'use client';
//This USer card is the user information in the search page
import React from 'react'
import Image from 'next/image';
import Verified from '../verified';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
interface Props{
    id: string;
    name: string;
    username: string;
    imgUrl: string;
    personType: string;
}

//List of Verified User
const verifiedUserIds = ['user_2kpwAQF5MVv9VqLpURDP1QNAyhf',
    'user_2lBx6jjHJtRMASisrk0Qs6cDZDg',
    '',
   ];

const UserCard = ({ id, name, username, imgUrl, personType}: Props) => {
    const router = useRouter();
    return(
        <article className='user-card'>
            <div className='user-card_avatar'>
                <Image
                src={imgUrl}
                alt='logo'
                width={48}
                height={48}
                className="rounded-full"
                />

            <div className="flex-1 text-ellipsis">
                <h4 className='text-base-semibold text-light-1 flex items-center'>
                    {name}
                    {verifiedUserIds.includes(id) && <Verified />}
                </h4>
                <p className='text-small-medium text-gray-1'>@{username}</p>
            </div>
            </div>
            
            <Button className='user-card_btn' onClick={() => router.push(`/profile/${id}`)}>
                View
            </Button>
        </article> 
    )
}

export default UserCard