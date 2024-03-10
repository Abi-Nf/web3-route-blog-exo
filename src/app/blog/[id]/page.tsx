import Link from "next/link";
import {PathParam} from "@/types";
import { BlogItem, blogList } from "@/mock";

interface Params {
  id: string;
}

export default function BlogPage({ params: { id } }: PathParam<Params>){
  const data: BlogItem = blogList[(+id)  - 1];

  return (
    <div className="blog-page">
      <div className="blog-content-centered">
        <span>{data.content}</span>
        <Link href={`/blog/${id}/image`}>
          <img src={data.path} className="blog-image" alt="image sample" />
        </Link>
      </div>
    </div>
  );
}