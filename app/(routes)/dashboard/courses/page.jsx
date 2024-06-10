import React from "react";
import { CoursesList } from "@/data";
import Image from "next/image";
import Link from "next/link";

export function CourseComponent({ data, img, name, description }) {
  return (
    <div className="border p-4 flex flex-col w-80 cursor-pointer hover:scale-105 hover:transition-all hover:duration-75 hover:ease-in-out">
      <Image src={img} alt="img" width={300} height={100} />
      <div className="w-full h-[1px] bg-gray-300 mt-4" />
      <div className="p-3">
        <h1 className="text-xl font-semibold">{name}</h1>
        <p>{description}</p>
      </div>
      <Link
        href={{
          pathname: "/dashboard/courses/courseDetails",
          query:  data ,
        }}
      >
        <p className="flex justify-end">See more</p>
      </Link>
    </div>
  );
}

function Courses() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold underline">Courses</h1>
      <p className="tracking-wider mt-2">
        Here are the courses offered by the Nigerian Law School
      </p>

      <div className="flex flex-wrap gap-8 mt-4 ">
        {CoursesList.map((course, index) => (
          <CourseComponent
            key={index}
            data={course} 
            img={course.img}
            name={course.name}
            description={course.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;