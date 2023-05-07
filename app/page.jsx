import React from "react";

const HomePage = () => {
  return (
    <>
      <section className="mx-[2.5rem]  min-h-[40rem] z-50 w-full absolute top-[10rem]">
        <h1 className="font-black text-white opacity-100 brightness-100 my-14 text-7xl">
          Unlimited movies, TV shows, <br /> and more
        </h1>
        <p className="text-3xl font-bold text-white">
          Plans now start at US$2.99/month.
        </p>
        <p className="mt-2 text-lg font-bold text-white">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className="flex items-center gap-2 mt-3" action="">
          <input
            className="w-[28rem] p-5 bg-transparent rounded-sm ring-slate-400 focus:outline-none ring-1"
            type="text"
          />
          <button
            className="px-4 py-5 text-2xl font-bold text-white bg-red-600 rounded-md"
            type="submit"
          >
            Get Started
          </button>
        </form>
      </section>
    </>
  );
};

export default HomePage;
