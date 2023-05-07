import Link from "next/link";
const Header = () => {
  return (
    <>
      <header className="min-h-[40rem] relative z-0 brightness-[0.4]  bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/35b01c07-9009-43d3-bd56-ee16b48da1c8/GH-en-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg')] text-white bg-slate-600">
        <ul className="flex items-center justify-between gap-4 p-5 mx-20 text-2xl font-bold brightness-100 ">
          <div className="flex gap-2 ">
            <li>
              <Link
                className="text-3xl font-black hover:text-late-100 hover:text-blue-500"
                href="/"
              >
                Nexty
              </Link>
            </li>
          </div>
          <div>
            <li>
              <Link className="hover:text-blue-500" href="/movies">
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
