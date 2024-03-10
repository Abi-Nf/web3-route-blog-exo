import {PathParam} from "@/types";
import {BlogItem, blogList} from "@/mock";

interface Params {
  id: string;
}

export default function ImagePage({ params: { id } }: PathParam<Params>){
  const data: BlogItem = blogList[(+id)  - 1];

  return (
    <div className="blog-image-path">
      <img className="blog-image-full" src={data.path} alt="sample image" />
    </div>
  )
}