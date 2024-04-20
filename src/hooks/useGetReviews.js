import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
const fetchPropertyReviews = async (id) => {
  try {
    const response = await api.get(`/properties/${id}/reviews`);
    console.log("fetchPropertyReviews", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch property reviews:", error);
    throw new Error("Failed to fetch property reviews");
  }
};

export const useGetReviewsQuery = (id) => {
  return useQuery({
    queryKey: ["property", id, "reviews"],
    queryFn: () => fetchPropertyReviews(id),
    staleTime: 1000 * 60 * 5,
  });
};
