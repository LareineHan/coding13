import { useQuery } from '@tanstack/react-query';
import mapApi from '../mapApi';

const fetchMap = async () => {
	const response = await mapApi.get();
	return response.data;
};

export const useMapQuery = () => {
	return useQuery({
		queryKey: ['googleMaps'],
		queryFn: fetchMap,
	});
};
