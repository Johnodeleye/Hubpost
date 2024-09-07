import Image from 'next/image';
import Verified from '../verified';
import Link from 'next/link';
// import '@/app/globals.css';
//This interface Props defines the Props that we are passing int this profileHeader
interface Props{
    accountId: string;
    authUserId: string;
    name: string;
    username: string;
    imgUrl: string;
    bio: string;
    type?: string;
}

//List of Verified User
const verifiedUserIds = ['user_2kpwAQF5MVv9VqLpURDP1QNAyhf',
    'user_2lBx6jjHJtRMASisrk0Qs6cDZDg',
    '',
   ];

const ProfileHeader = ({
    accountId,
    authUserId,
    name,
    username,
    imgUrl,
    bio,
    type,
 }: Props) =>{
    return(
        <div className='flex flex-col justify-start w-full'>
            <div className='flex items-center justify between'>
                <div className='flex items-center gap-3'>
                    <div className='relative object-cover w-20 h-20'>
                        {/* This Classname above which is relative.... makes a profile pic okay when building a profile photo  */}
                        <Image
                        src={imgUrl}
                        alt='Profile image'
                        fill
                        className='object-cover rounded-full shadow-2xl'
                        />
                    </div>
                    
                    <div className='flex-1'>
                    <div className='text-left text-heading3-bold text-light-1'>
                        {name}
                        {verifiedUserIds.includes(accountId) && (
                        <span style={{ verticalAlign: 'bottom', marginLeft:'1.3px', marginTop: '3px' }}>
                            <Verified /> 
                        </span>
                        )}
                    </div>
                    <p className='text-base-medium text-gray-1'>@{username}</p>
                    </div>
                </div>
              </div>

              <div>
              {accountId === authUserId && type !== "Community" && (
                <Link href='/profile/edit'>
                    <div className='flex cursor-pointer gap-3 rounded-lg bg-dark-3 px-4 py-2'>
                    <Image
                        src='/assets/edit.svg'
                        alt='logout'
                        width={16}
                        height={16}
                    />

              <p className='text-light-2 max-sm:hidden'>Edit</p>
            </div>
          </Link>
             )}
              </div>
              
              <p className='max-w-lg mt-6 text-base-regular text-light-2'>{bio}</p>
              
              <div className='h-0 mt-12.5 w-full bg-dark-3'/>
            
        </div>
    )
}

export default ProfileHeader;