import React from "react";

const JoinCommunity = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="max-w-4xl  mx-auto bg-white overflow-hidden ">
        <div className="md:flex justify-center">
          <div className="md:shrink-0">
            <img
              className=""
              src="https://i.ibb.co/3m97DKW/education.png"
              alt="Man looking at item at a store"
            />
          </div>
          <div className="p-10">
            <h1 className=" tracking-wide font-bold text-4xl text-indigo-500 font-semibold">
              Transform Your Life Through Education
            </h1>

            <p className="mt-8 mb-2 text-slate-500">
              Helping employees gain skills and providing career development
              often take a back seat to business priorities but workplace.
            </p>

            <h1 className=" tracking-wide font-bold text-2xl text-indigo-500 font-semibold">
              Join Our Community
            </h1>

            <div className="mt-8">
              <form className=" flex">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="your@mail.com"
                />

                <button className="px-8 rounded-r-lg bg-indigo-500  font-bold p-4 text-white uppercase border-indigo-500 border-t border-b border-r">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
