import { createPost } from "@/actions/actions";

export default function form() {
  return (
    <form action={createPost} 
    className="flex flex-col max-w-[400px] mx-auto gap-2 mt-20">
        <input 
            type="text"
            placeholder="New Post"
            name="title"
            required

        className="border rounded px-3 h-full" />
        <textarea 
            // type="text"
            placeholder="content"
            name="body"
            className="border rounded px-3 py-2"
            rows={6}
            required />

        <button className="bg-blue-500 border rounded text-center text-white p-2 flex flex-col mt-4 border-spacing-1">Submit</button>
    </form>
  )
}
