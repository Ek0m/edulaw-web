import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Questions() {
  return (
    <div className="flex flex-col items-center mx-12">
      <div>
        <Image src="/logo.png" alt="img" width={110} height={100} />
        <h1 className="text-4xl">EduLaw</h1>
      </div>
      <div className="mt-8 flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Cognitive Test</h1>
        <p className="text-2xl ">
          This test takes about 15mins to complete. Your result would allow
          EduLaw recommend the most suitable study method for you.
        </p>
        <div className="mt-5">
          <h1 className="text-xl font-semibold">
            The cognitive test would include the following stages:{" "}
          </h1>
          <ol className="px-6 py-2">
            <li>1. Memory Test</li>
            <li>2. Cognitive Test</li>
          </ol>
        </div>
      </div>
      <div className=" flex flex-col gap-6">
        <Button className="text-lg p-6">Start Test</Button>
        <Link href="/dashboard">
          <Button className="text-lg bg-purple-400 p-6">Skip Test</Button>
        </Link>
      </div>
    </div>
  );
}

export default Questions;
