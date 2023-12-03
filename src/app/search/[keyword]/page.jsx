import React from "react";
import Movies from "@/components/Movies";
import { log } from "console";

const Page = async ({ params }) => {
  const keyword = params.keyword;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=f20a317f7ab171f8b1abdd3082a42853&query=${keyword}&language=en-US&include_adult=false`
  );
  const data = await res.json();
  
  return (
    <div>
      {!data?.results ? (
        <div>Sonuç bulunamadı..</div>
      ) : (
        <div className="flex items-center flex-wrap gap-3">
          {data.results?.map((dt, i) => (
            <Movies dt={dt} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
