import {PropsWithChildren} from "react";
import {AsideBlog} from "@/components";
import "@/styles/blogPage.css";

export default function RootLayout({
 children,
}: PropsWithChildren) {
  return (
    <div className="row">
      <AsideBlog />
      <div className="w-full flex-col">
        {children}
      </div>
    </div>
  );
}
