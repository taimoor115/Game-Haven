import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

// export default axios.create({
//   baseURL: "https://api.rawg.io/api",
//   params: {
//     key: "dd7f51cb6dc5463e8df90dbd90a699d3",
//   },
// });
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "dd7f51cb6dc5463e8df90dbd90a699d3",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
}

export default APIClient;
