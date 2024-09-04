import {currentUser} from '@clerk/nextjs/server'
import { fetchPosts } from '@/lib/actions/thread.actions';
import { redirect } from "next/navigation";
import { useEffect } from 'react';

// This page only renders when a user is authenticated
import React from "react";
import ThreadCard from '@/components/cards/ThreadCard';

export default async function Homepage() {
  const result = await fetchPosts(1, 30); // the await is server action
  const user = await currentUser();
  if (!user) redirect('/sign-up');

  return (
    < >
      <h1 className="text-left text-green-600 head-text">Home</h1>
      <section className='flex flex-col gap-10 mt-9'>
        {result.posts.length === 0 ? (
          <p className='no-result'>No threads</p>
        ) : (
          <>
          {result.posts.map((post) => (
            <ThreadCard
            key={post._id}
            id={post._id}
            currentUserId={user?.id || ""}
            parentId={post.parentId}
            content={post.text}
            author={post.author}
            community={post.community}
            createdAt={post.createdAt}
            comments={post.children}
            />
          ))}
          </>
        )}
      </section>
    </>
  )
}