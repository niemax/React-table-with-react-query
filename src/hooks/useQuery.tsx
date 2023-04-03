import { useQuery } from "@tanstack/react-query";
import beerApi, { Beer } from "../api/beerApi";

const FIVE_MINUTES = 1000 * 60 * 5;

const useBeerQuery = () => {
  return useQuery<Beer[] | Error>(["beers"], () => beerApi.getBeers(), {
    refetchOnWindowFocus: false,
    cacheTime: FIVE_MINUTES,
    staleTime: Infinity,
  });
};

const queries = {
  useBeerQuery,
};

export default queries;
