
import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchGetProperties = async (params) => {
	try {
		const results = await api.get('/properties', {
			params: {
				...params,
			},
		});
		return results.data;
	} catch (error) {
		throw new Error('Failed to fetch properties');
	}
};

export const useGetPropertiesQuery = (params) => {
	return useQuery({
		queryKey: ['properties', params], // Include params in the query key
		queryFn: () => fetchGetProperties(params), // Pass params to fetchGetProperties
		staleTime: 1000 * 60 * 5,
	});
};
