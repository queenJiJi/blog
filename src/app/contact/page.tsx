import ContanctForm from "@/components/ContanctForm";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import LottieContainer from "@/components/LottieContainer";
import mailLottie from "../../../public/lottie/MailLottie.json";

const LINKS = [
  {
    icon: <AiFillGithub />,
    url: "https://github.com/queenJiJi",
  },
  {
    icon: <AiFillLinkedin />,
    url: "https://www.linkedin.com/in/jiji52/",
  },
];

export default function Contactpage() {
  return (
    <section className="flex flex-col px-4 justify-center items-center lg:items-start lg:flex-row lg:justify-around lg:mt-10">
      <article className="flex flex-col">
        <h1 className="text-4xl font-extrabold">
          Get In Touch<span className="text-4xl text-pink-500">.</span>
        </h1>
        <article className="text-base md:text-lg mb-3">
          <p>궁금하신 사항은 전송 폼을 이용해주세요.</p>
          <p>혹은 아래의 연락 수단을 이용해주세요!</p>
        </article>
        <ul className="flex space-x-4 mt-2">
          {LINKS.map((link, index) => (
            <a
              className="text-2xl hover:text-pink-200"
              key={index}
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </ul>
        <article className="px-10 lg:px-0">
          <LottieContainer file={mailLottie} />
        </article>
      </article>
      <ContanctForm />
    </section>
  );
}
