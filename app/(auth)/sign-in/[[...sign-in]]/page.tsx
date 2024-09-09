import { SignIn } from '@clerk/nextjs';
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function Page() {
  const user = await currentUser();
  if (user) return redirect("/sign-in");

  return (
    <div>
      <SignIn
        appearance={{
          elements: {
            formContainer: 'py-12 px-6 lg:px-8',
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
  )
}

export default Page;