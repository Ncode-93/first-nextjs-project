"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
const navLinks = [
    {
        href:"/",
        label:"Home",
    },{
        href:"/posts",
        label:"Posts",
    },{
        href:"/create-post",
        label:"Create post"
    }
]
export default function Header() {
    const pathName = usePathname();
    console.log(pathName);
  return<header className="flex justify-between items-center py-4 px-7 border-b">
    <Link href="/">
    <Image 
    //link se image dikhane ke liye domain likhna padta h in next.config.mjs
    src = "https://bytegrad.com/course-assets/youtube/example-logo.png" 
    alt="logo.png"
    className="pt-5 mx-6 pb-2"
    width="50"
    height="50"/></Link>
    <nav>
        <ul className="flex gap-x-5 text-[14px]">
            {
                navLinks.map((link)=>(
                    <li key={link.href}>
                        <Link className={` ${pathName===link.href ? "text-zinc-900": " text-zinc-400"}`} href={link.href}>{link.label}</Link></li>
                ))
            }
        </ul>
    </nav>
  </header>
}
