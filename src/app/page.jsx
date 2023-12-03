import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ searchParams }) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=f20a317f7ab171f8b1abdd3082a42853&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await response.json();

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {data?.results?.map((dt, i) => (
        <Movies dt={dt} />
      ))}
    </div>
  );
};

export default Page;
