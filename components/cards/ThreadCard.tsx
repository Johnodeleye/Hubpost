import Image from "next/image";
import Link from "next/link";
import Verified from '../verified';

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
                            
                            {isComment && comments.length > 0 && (
                                <Link href={`/thread/${id}`}>
                                <p className="mt-1 text-subtle-medium text-gray-1">{comments.length} replies </p>
                                </Link>
                            )}
                        </div>
                     </div>
                </div>
            </div>
        </article>
        
    )
}

export default ThreadCard;