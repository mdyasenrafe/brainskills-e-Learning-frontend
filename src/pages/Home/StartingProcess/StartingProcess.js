import React from "react";

const StartingProcess = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-10">
        <h1 className="md:text-center mx-auto font-Roboto font-bold text-3xl lg:text-4xl lg:w-2/4 xl:w-2/6">
          The Process of starting the
          <span className="relative ml-2">
            Course
            <div className="absolute animate-bounce -bottom-4 left-0 w-20 h-4">
              <div className="w-16 h-2 animate-pulse  rounded-tr-full bg-red-500"></div>
            </div>
          </span>
        </h1>
      </div>
    </section>
  );
};

export default StartingProcess;
