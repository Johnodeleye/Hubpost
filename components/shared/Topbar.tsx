import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { dark } from "@clerk/themes";

//The Navbar on the homepage
function Topbar() {
    return (
    <nav className="topbar">
        <Link href={'/feed'} className="flex items-center gap-4">
        <Image src={'/Logo White.png'}alt="HubLogo" width={120} height={120}/>

        </Link>

        <div className="flex items-center gap-1">
            <div className="block md:hidden">
                <SignedIn>
                    <SignOutButton>
                        <div className="flex cursor-pointer">
                            <Image src={'/assets/logout.svg'}alt="Logout" width={24} height={24}/>
                        </div>
                    </SignOutButton>
                </SignedIn>
            </div>
            <OrganizationSwitcher
            appearance={{
                baseTheme: dark,
                elements: {
                    organizationSwitcherTrigger:"py-2 px-4"
                }
            }}
            />
        </div>
    </nav>
    )
}

export default Topbar; 