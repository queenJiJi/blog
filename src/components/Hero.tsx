import React from "react";
import Image from "next/image";
import profileImage from "../../public/images/profile.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        src={profileImage}
        alt="Picture of the author"
        className="w-[250px] h-[250px] rounded-full object-contain mx-auto"
        priority
      />
      <h2 className="text-3xl font-bold mt-2">{"Hi, I'm JiJi "}</h2>
      <h3 className="text-xl font-semibold">Front-end Developer</h3>
      <p>사용자의 경험을 설계하는 개발자, 박지지</p>
      <Link href="/contact">
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
