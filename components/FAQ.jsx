import React from "react";

const FAQ = () => {
  return (
    <>
      <section className="container px-4 mx-auto py-14">
        <h1 className="my-4 text-4xl text-white lg:text-5xl">
          Frequently Asked Questions
        </h1>
        <div
          tabIndex={0}
          className=" text-white border rounded-sm collapse hover:bg-[#03115a] collapse-plus border-base-300"
        >
          <div className="text-3xl font-bold collapse-title">
            What is Nexty?
          </div>
          <div className="collapse-content">
            <p className="max-w-5xl text-2xl font-medium">
              Nexty is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices.
            </p>
            <p className="max-w-5xl mt-4 text-2xl">
              You can watch as much as you want, whenever you want without a
              single commercial – all for one low monthly price. There's always
              something new to discover and new TV shows and movies are added
              every week!
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="mt-5 text-white border rounded-sm collapse hover:bg-[#03115a] collapse-plus border-base-300"
        >
          <div className="text-3xl font-bold collapse-title">
            How much does Nexty cost?
          </div>
          <div className="collapse-content">
            <p className="max-w-5xl text-2xl font-medium">
              Watch Nexty on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              US$2.99 to US$9.99 a month. No extra costs, no contracts.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="mt-5 text-white border rounded-sm collapse hover:bg-[#03115a] collapse-plus border-base-300"
        >
          <div className="text-3xl font-bold collapse-title">
            Where can I watch?
          </div>
          <div className="collapse-content">
            <p className="max-w-5xl text-2xl font-medium">
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles.
            </p>
            <p className="max-w-5xl mt-4 text-2xl font-medium">
              You can also download your favorite shows with the iOS, Android,
              or Windows 10 app. Use downloads to watch while you're on the go
              and without an internet connection. Take Nexty with you anywhere.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
