"use client";

import Lottie from "lottie-react";

type Props = {
  file: object;
};

export default function LottieContainer({ file }: Props) {
  return (
    <section className="hidden md:block w-full md:max-w-[350px] lg:max-w-[500px]">
      <Lottie
        animationData={file}
        autoplay={true}
        loop={true}
        width={300}
        height={300}
      />
    </section>
  );
}
