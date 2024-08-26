import { SignUp } from '@clerk/nextjs'
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
async function Page() {
  const user = await currentUser();
  if (user) redirect("/feed"); //
  return <SignUp />
}

export default Page;