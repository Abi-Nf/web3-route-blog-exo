import Link from 'next/link';
import {blogList} from "@/mock";
import '@/styles/home-style.css';

export default function HomePage(){
  return (
    <div className="center-content">
      <ul className="home-list">
        {
          blogList.map((v, i) => (
            <li key={i}>
              <Link href={`/blog/${i + 1}`} >{v.content}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
