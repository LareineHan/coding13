import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchGetPropertyDetail = async ({ id }) => {
  try {
    const response = await api.get(`/properties/${id}`);
    return response.data; // Return the data directly
  } catch (error) {
    throw new Error(`Failed to fetch property with ID: ${id}`);
  }
};

export const useGetPropertyDetailQuery = (id) => {
  return useQuery({
    queryKey: ["property-detail", id], // Include property ID in the query key
    queryFn: () => fetchGetPropertyDetail({ id }), // Pass property ID to fetchGetPropertyDetail
    select: (result) => result.data,
  });
};
