import axios from "axios";
// async function fetchMovie({ params }) {

//   return data;
// }

const MoviePage = async ({ params }) => {
  const { data: movie } = await axios.get(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}`
  );
  //   console.log(movie);
  return (
    <>
      <section className="container px-4 py-4 mx-auto">
        <div className="grid h-[25rem] grid-cols-1 place-content-center lg:grid-cols-3">
          <div
            className="p-4 font-bold text-slate-600 bg-slate-100"
            key={movie.id}
          >
            <img
              className="object-cover object-center h-full overflow-hidden rounded-smd "
              src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
              alt={movie.path}
            />
          </div>
          <div className="col-span-2 p-5">
            <h1 className="p-2 mb-4 text-4xl ">{movie.title}</h1>
            <p className="px-2 font-extralight">{movie.release_date}</p>
            <p className="p-2">{movie.overview}</p>
            <p className="p-2">
              <span className="text-lg font-bold">Popularity</span>:{" "}
              {movie.popularity}
            </p>
            <p className="p-2">
              <span className="text-lg font-bold">Budget: </span>
              {movie.budget.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoviePage;
