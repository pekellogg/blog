import { getPosts } from '@/app/lib/data';
import Post from '@/app/ui/components/posts/Post';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const posts = await getPosts();
  const post = posts?.find((post) => post.id === ""); // params.id; empty string will never match any post (to test 404 errors)

  if (!post) {
    notFound();
  }

  return (
    <>
      <h1>Post</h1>
      {post && <Post id={post.id} title={post.title} content={post.content} date={post.date}/>}
    </>)
}