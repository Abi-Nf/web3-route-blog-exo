'use client'

import {useEffect} from "react";
import {redirect, RedirectType} from "next/navigation";

export default function Home() {
  useEffect(() => {
    redirect('/home', RedirectType.push);
  }, []);

  return <h1>Redirecting to home...</h1>;
}
