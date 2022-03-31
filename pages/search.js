import Head from "next/head";
import React from "react";

import { useRouter } from "next/router";
import SearchHeader from "../components/SearchHeader";
import Response from "../Response";
import SearchResults from "../components/SearchResults";
import SearchFooter from "../components/SearchFooter";
import PaginationButtons from "../components/PaginationButtons";

const Search = ({ results }) => {
  const router = useRouter();
  const query = router.query;
  const searchTerm = [Object.keys(query)[0]][0];

  // console.log(results);
  return (
    <div>
      <Head>
        <title>{searchTerm} - Google Search</title>
      </Head>

      <SearchHeader searchTerm={searchTerm} />
      <SearchResults results={results} />

      <PaginationButtons />
      <SearchFooter />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const API_KEY = process.env.API_KEY;
  const CONTEXT_KEY = process.env.CONTEXT_KEY;
  const searchTerm = [Object.keys(context.query)[0]][0];
  const startIndex = context.query.start || "0";

  // using dummmy data so we don't exceed api search limit. Get rid of dummy data when finished
  const useDummyData = false;
  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}&start=${startIndex}`
      ).then((res) => res.json());

  return {
    props: {
      results: data,
    },
  };
}
