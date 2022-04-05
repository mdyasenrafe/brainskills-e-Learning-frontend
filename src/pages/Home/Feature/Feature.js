import React from "react";
// data 
const data = [
  {
    title: "Maximum Efficiency",
    photo: "https://i.ibb.co/JHLvsrt/out-line.png",
    description: "Adopting fast learning techniques by real-world experts",
  },
  {
    title: "Expedite Learning",
    photo: "https://i.ibb.co/j3vjDzZ/learning.png",
    description:
      "Learning from the course has the potential to achieve maximum efficiency",
  },
  {
    title: "Open-source Platform",
    photo: "https://i.ibb.co/7jX7dGF/source.png",
    description:
      "The world's learning open-source platform that helps your career",
  },
];
const Feature = () => {


  return (
    <div className="p-20">
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div className="flex items-center px-4  py-2 shadow-md hover:shadow-none rounded-lg ease-in-out duration-300" key={index}>
            <div>
              <img src={item?.photo} alt="" />
            </div>
            <div className="ml-6">
              <h1 className="title font-extrabold text-xl">{item?.title}</h1>
              <p className="pt-3 text-gray-600">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
