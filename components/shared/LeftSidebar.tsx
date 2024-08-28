'use client'
import {sidebarLinks } from '@/constants';
import { SignedIn, SignOutButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

function LeftSidebar() {
    const router = useRouter();
    const pathname = usePathname();
    return (
        <section className="custom-scrollbar leftsidebar">
            <div className="flex flex-col flex-1 w-full gap-6 px-6">
                {/* To connect or map the links from index.js in constant folder */}
                {sidebarLinks.map((link) => {
                    const isActive = (pathname.includes
                        (link.route) && link.route.length > 
                        1) ||pathname === link.route;
                    
                
                return (
                    <Link 
                    href={link.route}
                    key={link.label}
                    className={`leftsidebar_link ${isActive && "bg-green-600"}`}
                    >
                    <Image 
                    src={link.imgURL}
                    alt={link.label}
                    width={24}
                    height={24}
                    />

                    <p className={`text-${isActive ? "white" : "green-600"} max-lg:hidden`}>
                    {link.label}
                    </p>
                    </Link>
                )}
                )}
            </div>
                        <div className="px-6 mt-10">
                        <SignedIn>
                        <button onClick={() => router.push("/")}>
                        <SignOutButton>
                        <div className="flex gap-4 p-4 cursor-pointer">
                            <Image src={'/assets/logout.svg'}alt="Logout" width={24} height={24}/>
                            <p className="text-green-600 max-lg:hidden">Logout</p>
                        </div>
                    </SignOutButton>
                   </button> 
                </SignedIn>
            </div>
        </section>
    )
}

export default LeftSidebar;