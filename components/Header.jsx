import Link from "next/link";
const Header = () => {
  return (
    <>
      <header className="text-white bg-slate-600">
        <ul className="flex items-center justify-between gap-4 p-5 mx-20 text-2xl font-bold ">
          <div className="flex gap-2">
            <li>
              <Link className="hover:text-blue-500" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500" href="/about/team">
                Team
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
