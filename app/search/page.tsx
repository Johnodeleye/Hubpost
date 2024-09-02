'use server'
import React from 'react'
import { currentUser, User } from "@clerk/nextjs/server";
import { redirect } from "next/navigation"; 
import { fetchUsers, fetchUser } from "@/lib/actions/user.actions";
import ProfileHeader from '@/components/shared/ProfileHeader';
import { profileTabs } from "@/constants";
import Image from "next/image";
import ThreadsTab from "@/components/shared/ThreadsTab";
import UserCard from '@/components/cards/UserCard';

    async function page() {
    const user = await currentUser(); 
    if (!user) redirect('/sign-up');

    //fetch user
    
    const userInfo = await fetchUser(user.id);
    if (!userInfo) {
        return (
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-[120px] font-bold text-center text-light-1">
              User not found
            </h1>
          </div>
        );
      }
    try {
      if(!userInfo?.onboarded) redirect('/onboarding');
      // ...
    } catch (error) {
      console.error(error);
      // Handle the error or redirect to an error page
    }
    
    //Fetch Users
    const result = await fetchUsers({
    userId: user.id,
    searchString: '',
    pageNumber: 1,
    pageSize: 25
})
    
  return (
    <section>
        <h1 className="head-text mb-10">Search</h1>

        {/* Search Bar*/}
        <div className="mt-14 flex flex-col gap-9">
            {result.users.length === 0 ? (
                <p className='no-result'>No Users</p>
            ) : (
                <>
                {result.users.map((person) => (
                    <UserCard
                    key={person.id}
                    id={person.id}
                    name={person.name}
                    username={person.username}
                    imgUrl={person.image}
                    personType='User'
                    />
                ))}
                </>
            )}
        </div>
        </section>
  )
}

export default page