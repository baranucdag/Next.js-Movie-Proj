import React from "react";
import Image from "next/image";

const getMovieDetail = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=f20a317f7ab171f8b1abdd3082a42853`
  );
  return await res.json();
};

const Page = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovieDetail(id);

  return (
    <div className="relative p-7 min-h-screen">
      <Image
        style={{ objectFit: "cover" }}
        fill
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}
      />
      <div className="absolute">
        <div className="text-4xl font-bold my-3">{movieDetail?.title}</div>
        <div className="w-1/2">{movieDetail?.overview}</div>
        <div className="my-3">
          {movieDetail?.release_date} -- {movieDetail?.vote_average}
        </div>
        <div className="my-2 border w-32 hover:bg-white hover:text-black p-2 rounded-md text-center text-lg cusor-pointer">
          Trail
        </div>
      </div>
    </div>
  );
};

export default Page;
