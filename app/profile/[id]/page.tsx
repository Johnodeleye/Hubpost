'use server'
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation"; 
import { fetchUser } from "@/lib/actions/user.actions";
import ProfileHeader from '@/components/shared/ProfileHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { profileTabs } from "@/constants";
import Image from "next/image";
import ThreadsTab from "@/components/shared/ThreadsTab";

const page = async ({ params }: { params: { id: string}}) => {
    const userInfo = await fetchUser(params.id);
    const user = await currentUser();
    if (!user) redirect('/sign-up');
    
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
    // Remove the extra }; at the end

    return(
        <section>
            <ProfileHeader
            accountId={userInfo.id} //This is the user id from database
            authUserId={user.id} //To check if the current user that is looking at their own profile or someone else
            name={userInfo.name} //The user's name from our databse
            username={userInfo.username} //The user's username from our database
            imgUrl={userInfo.image} //The user Image from database
            bio={userInfo.bio} //The user bio from our database
            //Note: The userinfo is from our databse while the
            //user (currentUser()) is from Clerk
            />

            <div className='mt-9'>
                <Tabs defaultValue="threads" className='w-full'>
                    <TabsList className='tab'>
                        {profileTabs.map((tab) => (
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
                                        {userInfo?.threads.length}
                                    </p>
                                )}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {profileTabs.map((tab) => (
                        <TabsContent key={`content-${tab.label}`} value={tab.value}
                        className='w-full text-light-1'>
                            <ThreadsTab
                            currentUserId={user.id}
                            accountId={userInfo.id}
                            accountType="User"
                            />
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    )
}


export default page