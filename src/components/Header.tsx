import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className=" flex justify-between items-center p-4">
      <Link href="/">
        <h1 className="text-3xl font-bold">{"JiJi's Blog"}</h1>
      </Link>
      <nav className="flex gap-4">
        <Link href="/" className="hover:font-bold">
          Home
        </Link>
        <Link href="/about" className="hover:font-bold">
          About
        </Link>
        <Link href="/posts" className="hover:font-bold">
          Posts
        </Link>
        <Link href="/contact" className="hover:font-bold">
          Contact
        </Link>
      </nav>
    </header>
  );
}
