import React from "react";

const Feature = () => {
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

  return (
    <div className="pt-20 pb-12 container mx-auto mx-4">
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-7 spac-y-4 place-self-center">
        {data.map((item, index) => (
          <div className="flex items-center" key={index}>
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
