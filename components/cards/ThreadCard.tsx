import Image from "next/image";
import Link from "next/link";
import Verified from '../verified';
import { formatDateString } from "@/lib/utils";
import DeleteThread from "../forms/DeleteThread";

interface Props {
    id: string;
    currentUserId: string;
    parentId: string | null;
    content: string;
    author: {
        name: string;
        image: string;
        id: string;
    };
    community:{
        id: string;
        name: string;
        image: string;
    } | null;
    createdAt: string;
    comments: {
        author: {
            image: string;
            name: string;
        };
    }[];
    isComment?: boolean;
}

//List if Verified User
const verifiedUserIds = ['user_2kpwAQF5MVv9VqLpURDP1QNAyhf',
     'user_2lBx6jjHJtRMASisrk0Qs6cDZDg',
     '',
    ];

    const relativeTime = (dateString: string | number | Date) => {
        const date = new Date(dateString);
        const now = new Date();
        const diff = now.getTime() - date.getTime();
      
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);
      
        if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        if (days < 2) return `Yesterday, ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
        if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`;
        return `${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${date.toLocaleDateString()}`;
      };

const ThreadCard = ({
    id,
    currentUserId,
    parentId,
    content,
    author,
    community,
    createdAt,
    comments,
    isComment,
}: Props) => {
    return(
        
        <article className={`flex flex-col w-full rounded- ${isComment ? 'px-0 xs:px-7' : 'bg-dark-2 p-7'}`}>
            <div className="flex items-start justify-between">
                <div className="flex flex-row flex-1 w-full gap-4">
                    <div className="flex flex-col items-center mt-1">
                        <Link href={`/profile/${author.id}`} className="relative w-11 h-11">
                        <Image
                         src={author.image}
                         alt="Profile image"
                         fill
                         className="rounded-full cursor-pointer"
                        />
                        </Link>
                        
                        <div className="thread-card_bar" />
                        </div>
                        
                        <div className="flex flex-col w-full mt-3">
                        <Link href={`/profile/${author.id}`} className="flex items-center w-fit">
                        <h4 className='cursor-pointer text-light-1 text-base-semibold'>{author.name}</h4>
                        {verifiedUserIds.includes(author.id) && <Verified />}
                        </Link>
                                                
                        
                        <p className="mt-2 text-small-regular text-light-2">{content}</p>
                        
                        {/* div for social icons like reply, like, repost,share etc */}
                        <div className={`${isComment && "mb-10"} mt-5 flex flex-col gap-3`}>
                            <div className='flex gap-3.5'>
                                 <Image src='/assets/heart-gray.svg' alt="heart" 
                                 width={24} height={24} className='object-contain cursor-pointer'/>
                                 
                                 <Link href={`/thread/${id}`}>
                                 <Image src='/assets/reply.svg' alt="reply" 
                                 width={24} height={24} className='object-contain cursor-pointer'/>
                                 </Link>
                                 
                                 <Image src='/assets/repost.svg' alt="repost" 
                                 width={24} height={24} className='object-contain cursor-pointer'/>
                                 <Image src='/assets/share.svg' alt="share" 
                                 width={24} height={24} className='object-contain cursor-pointer'/>
                            </div>

                            {!community && (
  <p className="text-subtle-medium text-gray-1">
    {relativeTime(createdAt)}
  </p>
)}
                        
                            {isComment && comments.length > 0 && (
                                <Link href={`/thread/${id}`}>
                                <p className="mt-1 text-subtle-medium text-gray-1">{comments.length} replies </p>
                                </Link>
                            )}
                        </div>
                     </div>
                </div>

                <DeleteThread
                threadId={JSON.stringify(id)}
                currentUserId={currentUserId}
                authorId={author.id}
                parentId={parentId}
                isComment={isComment}
                />
            </div>

            {!isComment && comments.length > 0 && (
                <div className='ml-1 mt-3 flex items-center gap-2'>
                {comments.slice(0, 2).map((comment, index) => (
                    <Image
                    key={index}
                    src={comment.author.image}
                    alt={`user_${index}`}
                    width={24}
                    height={24}
                    className={`${index !== 0 && "-ml-5"} rounded-full object-cover`}
                    />
                ))}

                <Link href={`/thread/${id}`}>
                    <p className='mt-1 text-subtle-medium text-gray-1'>
                    {comments.length} repl{comments.length > 1 ? "ies" : "y"}
                    </p>
                </Link>
                </div>
            )}

            {!isComment && community && (
                    <Link href={`/communities/${community.id}`} className="mt-5 flex items-center">
                        <p className="text-subtle-medium text-gray-1">
                            {formatDateString(createdAt)}
                         {' '} - {community.name} Community
                        </p>

                        <Image
                        src={community.image}
                        alt={community.name}
                        width={14}
                        height={14}
                        className='ml-1 rounded-full object-cover'
                        />
                    </Link>
                )}
        </article>
        
    )
}

export default ThreadCard;