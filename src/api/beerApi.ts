import baseApi from "./baseApi";

export interface Beer {
  alcohol: string;
  blg: string;
  brand: string;
  hop: string;
  ibu: string;
  id: number;
  malts: string;
  name: string;
  style: string;
  uid: string;
  yeast: string;
}

async function getBeers(): Promise<Beer[] | Error> {
  const response = await baseApi.get("/beers?size=30&is_xml=true");
  if (response.status !== 200) {
    throw new Error("failed to query beers");
  }

  return response.data;
}

const beerApi = {
  getBeers,
};

export default beerApi;
