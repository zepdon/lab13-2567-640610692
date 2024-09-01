"use client";

import { MovieRow } from "@/components/MovieRow";
import { movieDB } from "@/libs/movieDB";

export default function SearchResultPage() {
  //tip1 : before filtering movie, replace all "%20" with " " (space) in the input
  // const processedSearchInput = ...

  /*
  tip2 : Use "includes" string method to check substring
  Example : "ABC".includes("AB") -> return true

  tip3 : To implement case insensitive searching, use "toLocaleLowerCase" string method
  to convert movie title and searchInput to lower case 
  const filteredMovies = movieDB.filter((movie) =>
    you code here...
  );
  */

  return (
    <div>
      <p className="fw-bold fs-4 text-center my-0">
        Searching &quot; ... &quot;
      </p>
      <p className="fw-bold fs-4 text-center">Found ... result(s)</p>
      {/* Use  "filteredMovies" variable to map-loop rendering MovieRow component */}
    </div>
  );
}
