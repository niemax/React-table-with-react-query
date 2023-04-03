import axios, { AxiosError } from "axios";

// change the baseURL
axios.defaults.baseURL =
  "https://random-data-api.com/api/v2/beers?size=30&is_xml=true";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";

const request = async (options?: any, headers?: any) => {
  const client = axios.create({
    headers: { ...headers },
  });

  const onSuccess = (response: any) => {
    return response;
  };

  const onError = (error: AxiosError) => {
    console.error("request failed", error);
    const response = error.response;

    if (!response) {
      return Promise.reject({
        response: error,
        code: null,
      });
    }

    return Promise.reject(response);
  };

  return client(options).then(onSuccess).catch(onError);
};

const get = async (url: string, headers?: any) => {
  return request(
    {
      url,
      method: "GET",
    },
    headers
  );
};

const baseApi = {
  get,
};

export default baseApi;
