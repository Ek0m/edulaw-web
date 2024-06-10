import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between p-6">
      <div className="flex items-center ">
        <Image src="/logo.png" alt="img" width={110} height={100} />
        <h1 className="text-4xl">EduLaw</h1>
      </div>
      <div className="mt-5">
        <ul className="space-y-4">
          <li className="text-lg">Contact Us</li>
          <li className="text-lg">Community</li>
          <li className="text-lg">Instagram</li>
          <li className="text-lg">Twitter</li>
        </ul>
      </div>
      
    </div>
  );
}

export default Footer;
