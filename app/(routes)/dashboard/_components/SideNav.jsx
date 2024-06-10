'use client'

import Image from "next/image";
import React, {useEffect} from "react";
import { LayoutGrid, LibraryBig, BookOpenText, Layers } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const menuList = [
  {
    id: 1,
    name: "Dashboard",
    icon: LayoutGrid,
    path: "/dashboard",
  },
  {
    id: 2,
    name: "Courses",
    icon: BookOpenText,
    path: "/dashboard/courses",
  },
  {
    id: 3,
    name: "Library",
    icon: LibraryBig,
    path: "/dashboard/library",
  },
  {
    id: 4,
    name: "Practice Tests",
    icon: Layers,
    path: "/dashboard/practiceTest",
  },
];


function SideNav() {

  const path = usePathname();

  useEffect(() => {
    console.log(path)
  }, [path]);

  return (
    <div className="h-screen  border shadow-sm">
      <div className="flex items-center ">
        <Image src="/logo.png" alt="img" width={110} height={100} />
        <h1 className="text-4xl">EduLaw</h1>
      </div>
      <div className="mt-5">
        
        {menuList.map((menu, index) => (
          <Link href={menu.path}>
          <h1
            key={index}
            className={`text-xl font-semibold flex gap-2 items-center p-5 border hover:bg-slate-700 hover:text-white  cursor-pointer ${path == menu.path &&'bg-slate-700 text-white'}`}
          >
            {" "}
            <menu.icon />
            {menu.name}
          </h1>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
