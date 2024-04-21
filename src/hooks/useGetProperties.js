import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import queryString from "query-string";

const fetchGetProperties = async (params) => {
  try {
    console.log("params : ", params);
    const results = await api.get("/properties", {
      params: queryString.parse(params),
    });
    return results.data;
  } catch (error) {
    throw new Error("Failed to fetch properties");
  }
};

export const useGetPropertiesQuery = (params) => {
  console.log("searchParams : ", params);
  const stringifiedParams = queryString.stringify(params);
  return useQuery({
    queryKey: ["properties", stringifiedParams],
    queryFn: () => fetchGetProperties(stringifiedParams), // Pass params to fetchGetProperties
    staleTime: 1000 * 60 * 5,
  });
};
