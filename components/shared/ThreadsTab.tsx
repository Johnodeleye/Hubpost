import { fetchUserPosts } from '@/lib/actions/user.actions';
import ThreadCard from '@/components/cards/ThreadCard';
import { redirect } from 'next/navigation';

interface Props{
    currentUserId: string;
    accountId: string;
    accountType: string;
}

const ThreadsTab = async ({ currentUserId, accountId, accountType }:
    Props) => {
        //Fetch the Profile Thread
        let result = await fetchUserPosts(accountId);

        if(!result) redirect('/feed')

    return(
        <section className='flex flex-col gap-10 mt-9'>
            {result.threads.map((thread: any) => (
                <ThreadCard
                key={thread._id}
                id={thread._id}
                currentUserId={currentUserId}
                parentId={thread.parentId}
                content={thread.text}
                author={
                    accountType === 'User'
                    ?{ name: result.name, image: result.image, id: result.id }
                    : { name: thread.author.name, image: thread.author.image,
                        id: thread.author.id}
                } 
                community={thread.community} //todo
                createdAt={thread.createdAt}
                comments={thread.children}
            />
            ))}
        </section>
    )
}

export default ThreadsTab;