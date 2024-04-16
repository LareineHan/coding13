import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchPropertyImages = async (id) => {
  try {
    const response = await api.get(`/properties/${id}/images`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch property images");
  }
};

export const useGetImagesQuery = (id) => {
  return useQuery({
    queryKey: ["property", id, "images"],
    queryFn: () => fetchPropertyImages(id),
    staleTime: 1000 * 60 * 5,
  });
};
