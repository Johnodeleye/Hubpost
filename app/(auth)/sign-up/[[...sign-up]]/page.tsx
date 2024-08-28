import { SignUp } from '@clerk/nextjs'
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";
async function Page() {
  const user = await currentUser();
  if (!user) return (
      <SignUp />
  );
  const userInfo = await fetchUser(user.id);
  if(!userInfo?.onboarded) redirect('/onboarding');
  if (user) redirect("/feed"); //
  return <SignUp />
}

export default Page;