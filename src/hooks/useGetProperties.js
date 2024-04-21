import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import queryString from "query-string";
const fetchGetProperties = async (params) => {
  try {
    console.log(params, "fetch!!!!");
    const results = await api.get("/properties", {
      params: queryString.parse(params),
    });

    return results.data;
  } catch (error) {
    console.log(error, "fetch!!!!");
    throw new Error("Failed to fetch properties");
  }
};

export const useGetPropertiesQuery = (params) => {
  console.log("searchParams : ", params);
  const stringifiedParams = queryString.stringify(params);
  return useQuery({
    queryKey: ["properties", stringifiedParams], // Include stringified params in the query key
    queryFn: () => fetchGetProperties(stringifiedParams), // Pass stringified params to fetchGetProperties
    staleTime: 1000 * 60 * 5,
  });
};
