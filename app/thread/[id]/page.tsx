import ThreadCard from "@/components/cards/ThreadCard"
import  Comment  from "@/components/forms/Comment";
import { fetchThreadById } from "@/lib/actions/thread.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import {currentUser} from '@clerk/nextjs/server'
import { redirect } from "next/navigation";

const page = async ({ params }: { params: { id: string}}) => {
    if(!params.id) return null;
    
    const user = await currentUser();
    if(!user) redirect('/sign-up');
    
    const userInfo = await fetchUser(user.id);
    if(!userInfo?.onboarded) redirect('/onboarding');
    
    const thread = await fetchThreadById(params.id);
    
    return(
    <section className="relative">
    <div>
    <ThreadCard
        key={thread._id}
        id={thread._id}
        currentUserId={user?.id || ""}
        parentId={thread.parentId}
        content={thread.text}
        author={thread.author}
        community={thread.community}
        createdAt={thread.createdAt}
        comments={thread.children}
         // Pass isLiked prop here
    />
    </div>
    
    <div className="mt-7">
        <Comment
        threadId={thread.id}
        //i HAVE WANTED TO FIX THE BUG ABOUT THE IMAGE IN THE COMMENT, BUT THANKS TO JS MASTERY THAT HELPED ME 
        //AND IT IS CHANGED AND FIXED BY DOING THE currentUserImg as userinfo.image which is from our databse
        currentUserImg={userInfo.image}
        currentUserName={userInfo.name}
        currentUserId={JSON.stringify(userInfo._id)}
        />
    </div>
    
    <div className='mt-10'>
        {thread.children.map((childItem: any) => (
                <ThreadCard
                key={childItem._id}
                id={childItem._id}
                currentUserId={childItem?.id || ""}
                parentId={childItem.parentId}
                content={childItem.text}
                author={childItem.author}
                community={childItem.community}
                createdAt={childItem.createdAt}
                comments={childItem.children}
                isComment // Pass isLiked prop here
            />
        ))}
    </div>
    </section>
  )
}

export default page