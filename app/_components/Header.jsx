import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="p-6 flex items-center justify-between">
      <div className="flex items-center ">
        <Image src="/logo.png" alt="img" width={110} height={100} />
        <h1 className="text-4xl">EduLaw</h1>
      </div>
      <Link href={"/questions"}>
        <Button className=" p-5 lg:p-6 text-md lg:text-lg">Get Started</Button>
      </Link>
    </div>
  );
}

export default Header;
