import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="bg-gray-800 h-screen">
      <div className="mx-auto h-12 w-auto">
        <Image src="/logo_white.png" alt="HubPost" width={100} height={100} />
      </div>
      <SignIn
        appearance={{
          elements: {
            formContainer: 'py-12 px-6 lg:px-8 backgroundColor:bg-gray-800',
            form: 'border-2 border-green-400 py-8 px-6 rounded-lg shadow-md',
            formField: {
              label: 'block text-sm font-medium leading-6 text-white',
              input: 'block w-full rounded-md border border-gray-200 dark:border-gray-700 py-1.5 text-white bg-transparent placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6',
            },
            formButtonPrimary: 'flex w-full justify-center rounded-md bg-green-400 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400',
          },
        }}
      />
    </div>
  );
}