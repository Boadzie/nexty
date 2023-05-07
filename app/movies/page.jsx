// import Image from "next/image";
import Link from "next/link";
import axios from "axios";

async function fetchMovies() {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  return data;
}

const MoviesPage = async () => {
  const { results } = await fetchMovies();
  //   console.log(movies);

  return (
    <>
      <section className="container px-4 py-4 mx-auto">
        <h1 className="p-2 mb-4 text-5xl ">Popular Movies</h1>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 ">
          {results.map((m) => {
            return (
              <div
                className="p-4 font-bold rounded-md text-slate-600 bg-slate-100"
                key={m.id}
              >
                <Link href={`/movies/${m.id}`}>
                  <img
                    className="object-cover object-center w-full overflow-hidden h-[13rem] rounded-smd "
                    src={"https://image.tmdb.org/t/p/w500" + m.backdrop_path}
                    alt={m.path}
                  />
                </Link>
                <div className="flex flex-col items-center justify-between gap-3 cursor-pointer lg:flex-row">
                  <h1 className="my-2 text-lg capitalize">{m.title}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MoviesPage;
