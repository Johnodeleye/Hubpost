'use server'
import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";
import { communityTabs } from "@/constants";

import { redirect } from "next/navigation"; 

import ProfileHeader from '@/components/shared/ProfileHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ThreadsTab from "@/components/shared/ThreadsTab";
import { fetchCommunityDetails } from "@/lib/actions/community.actions";
import UserCard from "@/components/cards/UserCard";

const page = async ({ params }: { params: { id: string}}) => {
    const user = await currentUser();
    if (!user) redirect('/sign-up');
    
    // if (!userInfo) {
    //     return (
    //       <div>
    //         <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-[120px] font-bold text-center text-light-1">
    //           User not found
    //         </h1>
    //       </div>
    //     );
    //   }
    // try {
    //   if(!userInfo?.onboarded) redirect('/onboarding');
    //   // ...
    // } catch (error) {
    //   console.error(error);
    //   // Handle the error or redirect to an error page
    // }
    // Remove the extra }; at the end

    const communityDetails = await fetchCommunityDetails(params.id)
    return(
        <section>
            <ProfileHeader
            accountId={communityDetails.id} //This is the user id from database
            authUserId={communityDetails.id} //To check if the current user that is looking at their own profile or someone else
            name={communityDetails.name} //The user's name from our databse
            username={communityDetails.username} //The user's username from our database
            imgUrl={communityDetails.image} //The user Image from database
            bio={communityDetails.bio} //The user bio from our database
            type='Community'
            />

            <div className='mt-9'>
                <Tabs defaultValue="threads" className='w-full'>
                    <TabsList className='tab'>
                        {communityTabs.map((tab) => (
                            <TabsTrigger key={tab.label} value={tab.value} 
                            className='tab'>
                                <Image
                                src={tab.icon}
                                alt={tab.label}
                                width={24}
                                height={24}
                                className='object-contain'
                                />
                                <p className='max-sm:hidden'>{tab.label}</p>
                                
                                {tab.label === 'Threads' && (
                                    <p className='px-2 py-1 ml-1 bg-green-600 rounded-sm !text-tiny-medium text-light-2'>
                                        {communityDetails?.threads.length}
                                    </p>
                                )}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    
                        <TabsContent value='threads'
                        className='w-full text-light-1'>
                            <ThreadsTab
                            currentUserId={user.id}
                            accountId={communityDetails._id}
                            accountType="Community"
                            />
                        </TabsContent>

                        <TabsContent value='members'
                        className='w-full text-light-1'>
                            <section className='mt-9 flex flex-col gap-10'>
                                {communityDetails?.members.map((member: any) => (
                                    <UserCard
                                    key={member.id}
                                    id={member.id}
                                    name={member.name}
                                    username={member.username}
                                    imgUrl={member.image}
                                    personType='User'
                                    />
                                ))}
                            </section>
                        </TabsContent>

                        <TabsContent value='requests'
                        className='w-full text-light-1'>
                            <ThreadsTab
                            currentUserId={user.id}
                            accountId={communityDetails._id}
                            accountType="Community"
                            />
                        </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}


export default page