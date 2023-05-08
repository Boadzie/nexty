import Link from "next/link";
const Header = () => {
  return (
    <>
      <header className="relative">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/35b01c07-9009-43d3-bd56-ee16b48da1c8/GH-en-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Your Image"
          className="w-full brightness-[0.55] h-[40rem]"
        />
        <ul className="absolute top-0 bottom-0 left-0 right-0 flex items-start justify-between p-4 text-white text-opacity-100 bg-[#000a3d] bg-opacity-40">
          <li>
            <Link
              className="text-3xl font-black lg:mx-8 hover:text-late-100 hover:text-blue-500 brightness-125"
              href="/"
            >
              Nexty
            </Link>
          </li>
          <div>
            <li>
              <Link
                className="hover:text-blue-500 lg:mx-8 font-black text-3xl brightness-[10rem]"
                href="/movies"
              >
                Movies
              </Link>
            </li>
          </div>
        </ul>
      </header>
    </>
  );
};

export default Header;
