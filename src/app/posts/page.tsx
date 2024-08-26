// export default function Page() {
//     return <main className="text-center pt-3 px-5">
//         <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts</h1>
//     </main>


import PostLists from "@/components/posts-list";
// import { Suspense } from "react";
import Link from "next/link";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Suspense } from "react";
export default async function Page() {
    return (
      <main className="text-center pt-3 px-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts</h1>
        <Suspense fallback="Loading......">
          <PostLists />
        </Suspense>
        
      </main>
    );
  }
  