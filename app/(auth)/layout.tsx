//THIS LAYOUT IS ONLY FOR ONBOARDING, SIGN-IN AND SIGN-UP WHICH ARE IN AUTH FOLDER
//allows us to specify different route for the authentication route

import { ClerkProvider, SignIn } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import '../globals.css';
//this also allows us to have more cleaner SEO
export const metadata = {
    title: 'HubPost',
    description: 'Spark || Connect || Ignite'
}
//font
const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
     children 
    }: { 
        children: React.ReactNode
     }) {
    return (
    <ClerkProvider> 
        <html lang="en">
            <body className="{`${inter.className} bg-dark-1`}">
                {children}
            </body>
        </html>
    </ClerkProvider>
    )
}