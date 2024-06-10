import { Button } from "@/components/ui/button";
import { CoursesList } from "@/data";
import React from "react";
import { CourseComponent } from "./courses/page";

function ProgressTracker() {
  return (
    <div className="lg:w-[800px] border p-4">
      <h1 className="text-2xl font-bold">Progress Tracker</h1>
      <p>This is how far you've gone in completing the courses</p>
      <div className="flex justify-between mb-1 mt-6">
        <span className="text-base font-medium text-blue-700 dark:text-white">
          Progress
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-white">
          45%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: "45%" }}
        ></div>
      </div>
    </div>
  );
}

function CaseOfTheDay() {
  return (
    <div className="border  p-4 w-[300px] flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold text-center">Case of the Day</h1>
      <p className="text-lg text-center text-red-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        viverra ex quis erat vehicula eleifend.
      </p>
      <Button className="text-lg p-5 bg-purple-400">Learn More</Button>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold underline">Dashboard</h1>
      <div className="p-8 flex flex-col lg:flex-row gap-12 items-center">
        <ProgressTracker />
        <CaseOfTheDay />
      </div>
      <div className="p-8">
        <h1 className="text-2xl font-bold underline">Recently Opened</h1>
        <div className="flex flex-wrap gap-12 mt-8">
          {CoursesList.map((course, index) => (
            <CourseComponent
              img={course.img}
              name={course.name}
              description={course.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
