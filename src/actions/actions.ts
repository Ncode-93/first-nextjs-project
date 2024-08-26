"use server";
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"; //special note- use "next/navigation" for using redirect in your code otherwise, it cause issue

 //not being used here to create a server component, the default is already a server component. For more refer to image inside public folder.
export async function createPost(formData: FormData){
    // auth check
    const {isAuthenticated} = getKindeServerSession();
    if(!(await isAuthenticated())){
        redirect('/api/auth/login');
    }
    const title = formData.get("title") as string
    const body = formData.get("body") as string
    // console.log(title, body);

    // update database using prisma
    await prisma.post.create({
        data: {
            title,
            body,
        },
    });

    // revalidate cache
    revalidatePath("/posts");

}