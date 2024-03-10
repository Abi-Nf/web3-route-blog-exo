import '@/styles/asideBlogStyle.css';
import Link from "next/link";
import {blogList} from "@/mock";

export const AsideBlog = () => {
  return (
    <aside className="aside-container">
      <h2 className="aside-title">Blogs</h2>
      <div>
        <ul className="aside-list">
          {
            blogList.map((v, i) => (
              <li key={i}>
                <Link href={`/blog/${i+1}`} >{v.content}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </aside>
  )
}