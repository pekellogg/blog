import { connectToDb, getPosts } from "@/app/lib/data";
import { Button } from "@/app/ui/components/button";
import Post from "@/app/ui/components/posts/Post";
import Link from "next/link";
// import { Post as TPost } from "@/app/lib/definition";
// import { posts } from "@/app/lib/placeholder-data";

export default async function Page() {
    const client = await connectToDb();
    const posts = await getPosts();

    return (
        <>
            {client && <p className="text-green-600">Connected to database</p>}
            <Link href="/blog/post/insert"><Button className="outline outline-1  border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white my-5 py-2 px-4 rounded">New +</Button></Link>
            <h1>Posts</h1>
            {posts && posts?.map((post) => (
                <div key={post.id} className="border border-gray-200 p-4 my-4">
                    <Post id={post.id} title={post.title} content={post.content} date={post.date} />
                </div>
            ))}
        </>
    )
}