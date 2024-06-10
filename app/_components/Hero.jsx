import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="p-6 flex flex-col lg:flex-row items-center justify-between gap-24">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl lg:text-4xl lg:text-start  font-bold text-center">
          Learn and Study Law with Us
        </h1>
        <p className="text-center lg:text-start text-xl">
          With our personalized learning algorithm, you can study law much more
          easier!
        </p>
        <div className="flex items-center justify-center lg:justify-start">
          <Link href="/questions">
            <Button className="w-56 text-lg p-6">Get Started</Button>
          </Link>
        </div>
      </div>
      <Image src={"./hero.svg"} alt="hero" width={450} height={100} />
    </div>
  );
}

export default Hero;
