"use client"

import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation"; // Import useRouter from 'next/router'
import { CoursesList, Topics } from "@/data";

function TopicComponent({ topic }) {
  return (
    <div className="flex items-center hover:scale-105 transition-all cursor-pointer border-2 lg:w-[700px] p-4 shadow-sm rounded justify-between">
      <h1 className="text-lg font-semibold">{topic.name}</h1>
      <ArrowRight className="text-purple-400 w-10" />
    </div>
  );
}

function CourseDetails({searchParams}) {
  const filteredTopics = Topics.filter(topic => topic.courseTitle === searchParams.name);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold underline">{searchParams.name}</h1>
      <p className="mt-2 text-lg">{searchParams.description}</p>

      <div className="mt-12 p-8">
        <h1 className="font-bold text-2xl underline">Topics</h1>
        <p className="mt-2 text-lg">
          Topics under {searchParams.name} include:
        </p>

        <div className="mt-12 px-6 flex flex-col gap-4">
          {filteredTopics.map((topic, index) => (
            <TopicComponent key={index} topic={topic} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;