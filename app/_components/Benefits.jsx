import Image from "next/image";
import React from "react";

const benefitdata = [
  {
    img: "./personalized.svg",
    title: "Personalized Learning Method",
    text: "EduLaw tests and recomends learning methods tailored to suit your learning pace for an excellent learning method",
  },
  {
    img: "./courses.svg",
    title: "Progress Tracker",
    text: "This feature allows you to track your progress on a particular course. You can creae goals and track your progress in real-time.",
  },
  {
    img: "./library.svg",
    title: "Up-to-date Library",
    text: " EduLaws's library carries not just e-notes and documents , it contains audio and audio-visual materials.",
  },
  {
    img: "./progress.svg",
    title: "High Quality Courses",
    text: "Each course contains well detailed notes that help students understand each topic to the highest capacity.",
  },
];

function BenefitContainer({ title, text, img }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 border p-4">
      <Image src={img} alt="cho" width={200} height={100} />
      <div className="h-[2px] w-full border-b border-gray-300 " />
      <div className="flex flex-col gap-1">
        <h1 className="text-xl text-center font-semibold ">{title}</h1>
        <p className="w-72 text-center">{text}</p>
      </div>
    </div>
  );
}

function Benefits() {
  return (
    <div className="flex p-6 flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-purple-900">Why Choose Us?</h2>
      <div className="mt-6 grid lg:grid-cols-2 gap-10">
        {benefitdata.map((benefits, index) => (
          <BenefitContainer
            key={index}
            text={benefits.text}
            img={benefits.img}
            title={benefits.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Benefits;
