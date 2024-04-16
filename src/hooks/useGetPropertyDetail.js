import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchGetPropertyDetail = async (id) => {
  try {
    const result = await api.get(`/properties/${id}`);
    return result.data;
  } catch (error) {
    throw new Error("Failed to fetch property details");
  }
};

export const useGetPropertyDetailQuery = (id) => {
  return useQuery({
    queryKey: ["property", id],
    queryFn: () => fetchGetPropertyDetail(id),
    staleTime: 1000 * 60 * 5,
  });
};
