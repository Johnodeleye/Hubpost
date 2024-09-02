'use server'
import React from 'react'
import { currentUser, User } from "@clerk/nextjs/server";
import { redirect } from "next/navigation"; 
import { fetchUser, getActivity } from "@/lib/actions/user.actions";
import Link from 'next/link';
import Image from 'next/image'

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

    //GetActivity/notification
    const activity = await getActivity(userInfo._id)

  return (
    <section>
     <h1 className="head-text mb-10">Activity</h1>

     <section className='mt-10 flex flex-col gap-5'>
      {activity.length > 0 ? (
        <>
        {activity.map((activity) =>(
          <Link key={activity._id} href={`/thread/${activity.parentId}`}>
            <article className='activity-card'>
              <Image
              src={activity.author.image}
              alt='profile picture'
              width={20}
              height={20}
              className='rounded-full object-cover'
              />
              <p className='!text-small-regular text-light-1'>
                <span className='mr-1 text-green-600'>
                  {activity.author.name}
                </span>{" "}
                replied to your thread
              </p>
            </article>
          </Link>
        ))}
        </>
      ): <p className='!text-base-regular text-green-600'>No Notifications</p>}
     </section>
     </section>
  )
}

export default page