import Image from 'next/image';
import Verified from '../verified';
// import '@/app/globals.css';
//This interface Props defines the Props that we are passing int this profileHeader
interface Props{
    accountId: string;
    authUserId: string;
    name: string;
    username: string;
    imgUrl: string;
    bio: string;
    type?: 'User' | 'Community';
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
    bio }: Props) =>{
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
              {/* TODO: Community */}
              
              <p className='max-w-lg mt-6 text-base-regular text-light-2'>{bio}</p>
              
              <div className='h-0 mt-12.5 w-full bg-dark-3'/>
            
        </div>
    )
}

export default ProfileHeader;