import { Post } from "@/app/lib/definition";
import Link from "next/link";

export default function Component({ id, title, content, date }: Post) {
    return (
        <>
            <Link href={`/blog/post/${id}`}><h2>{title}</h2></Link>
            <p className="text-gray-500">{date}</p>
            <p>{content}</p>
        </>
    );
}