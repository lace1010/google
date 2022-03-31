import React from "react";
import { DotsVerticalIcon } from "@heroicons/react/outline";

const SearchResults = ({ results }) => {
  return (
    <div className="px-6 lg:pl-44 min-h-[500px]">
      <p className="text-gray-500 mb-5 mt-3 text-md">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>

      {/* make div that displays info like google. done */}
      {results &&
        results?.items?.map((result) => (
          <div key={result.link} className="max-w-xl mb-8">
            <div className="flex items-center">
              <a href={result.link} className="text-sm text-gray-700">
                {result.formattedUrl}
              </a>
              <DotsVerticalIcon className="h-4 w-4 ml-5 text-gray-600 cursor-pointer" />
            </div>
            <a
              href={result.link}
              // #660099
            >
              <h2 className="py-1 text-[#1A0DAB] hover:underline text-xl truncate">
                {result.title}
              </h2>
            </a>
            <p className="line-clamp-2">{result.snippet}</p>
          </div>
        ))}
    </div>
  );
};

export default SearchResults;
