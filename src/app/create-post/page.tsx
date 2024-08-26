import Form from "@/components/form";
import { getKindeServerSession, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function page() {
    // const {isAuthenticated} = getKindeServerSession();
    // if( !(await isAuthenticated())){
    //     redirect('/api/auth/login?post_login_redirect_url=/create-post')
    // }
  return <main>
    <h1 className="text-4xl md:text-5xl font-bold mb-5 text-center mt-4">Create Post</h1>
    <Form />
    <LogoutLink className="text-center flex flex-col mt-14"> Logout </LogoutLink>
  </main>
}
