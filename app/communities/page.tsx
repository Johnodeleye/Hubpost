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
import { fetchCommunities } from '@/lib/actions/community.actions';
import CommunityCard from '@/components/cards/CommunityCard';

    async function page() {
    const user = await currentUser(); 
    if (!user) redirect('/sign-up');

    //fetch user
    
    const userInfo = await fetchUser(user.id);
    if (!userInfo) {
        return (
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-[120px] font-bold text-center text-light-1">
              Community not found
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
    
    //Fetch Communities
    const result = await fetchCommunities({
    searchString: '',
    pageNumber: 1,
    pageSize: 25
})
    
  return (
    <section>
        <h1 className="head-text mb-10">Communities</h1>

        {/* Search Bar*/}
        <div className="mt-14 flex flex-col gap-9">
            {result.communities.length === 0 ? (
                <p className='no-result'>No Communities</p>
            ) : (
                <>
                {result.communities.map((community) => (
                    <CommunityCard
                    key={community.id}
                    id={community.id}
                    name={community.name}
                    username={community.username}
                    imgUrl={community.image}
                    bio={community.bio}
                    members={community.members}
                    />
                ))}
                </>
            )}
        </div>
        </section>
  )
}

export default page