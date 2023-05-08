import React from "react";
import Feature from "@/components/Feature";

const HomePage = () => {
  return (
    <>
      <section className=" mx-4 lg:mx-[2.5rem]  min-h-[40rem] z-50  absolute top-[5rem] lg:top-[10rem]">
        <h1 className="w-full mb-4 text-4xl font-black text-white opacity-100 lg:mb-0 brightness-100 my-14 lg:text-7xl">
          Unlimited movies, TV shows, <br /> and more
        </h1>
        <div className="flex flex-col mt-2 lg:items-start">
          <p className="text-2xl font-bold text-white lg:text-3xl">
            Plans now start at US$2.99/month.
          </p>
          <p className="mt-2 text-lg font-bold text-white lg:text-left">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <form
          className="flex flex-col items-start gap-2 mt-3 lg:items-center lg:flex-row"
          action=""
        >
          <input
            className="w-[18rem] text-white lg:w-[28rem] p-4 lg:p-5 bg-transparent rounded-sm ring-slate-400 focus:outline-none ring-1"
            placeholder="Email address..."
            type="text"
          />
          <button
            className="px-4 py-3 text-lg font-bold text-white bg-red-600 rounded-md lg:py-5 lg:text-2xl"
            type="submit"
          >
            Get Started
          </button>
        </form>
      </section>
      <Feature />
    </>
  );
};

export default HomePage;
