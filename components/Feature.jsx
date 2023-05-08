import React from "react";

const Feature = () => {
  return (
    <>
      <section className="container w-full px-4 py-4 mx-auto text-white ">
        <div className="grid grid-cols-1">
          <div className="flex flex-col items-center justify-between gap-4 border-b-4 lg:flex-row border-slate-600">
            <div className="">
              <h1 className="my-4 font-bold lg:text-5xl">Enjoy on your TV</h1>
              <p className="text-2xl font-medium">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            </div>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/enjoyOnTv/en.png"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-between gap-4 border-b-4 lg:flex-row border-slate-600">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/watchEverywhere/en.png"
              alt=""
              className="order-last lg:order-none"
            />
            <div className="">
              <h1 className="my-4 font-bold lg:text-5xl">Watch everywhere</h1>
              <p className="text-2xl font-medium">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 border-b-4 lg:flex-row border-slate-600">
            <div className="">
              <h1 className="my-4 font-bold lg:text-5xl">
                Create profiles for kids
              </h1>
              <p className="text-2xl font-medium">
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/kids/en.png"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-between gap-4 border-b-4 lg:flex-row border-slate-600">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/download/en.png"
              alt=""
              className="order-last lg:order-none"
            />
            <div className="">
              <h1 className="my-4 font-bold lg:text-5xl">
                Download your shows to watch offline
              </h1>
              <p className="text-2xl font-medium">
                Save your favorites easily and always have something to watch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
