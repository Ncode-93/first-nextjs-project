// import UpvoteBtn from "@/components/upvotebtn";

import prisma from "@/lib/db";
import { notFound } from "next/navigation";

interface PageParams {
  id: string;
}

export default async function Page({params} : {params: PageParams}) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if(!post){
    notFound();
  }
  // const [upvoteCount, setUpvoteCount] = useEffect(0);
  return <main className="px-7 pt-24 text-center">
    
    <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
    <p className="max-w-[700px] mx-auto">{post.body}</p>
    {/* <UpvoteBtn /> */}
  </main>
  
}
