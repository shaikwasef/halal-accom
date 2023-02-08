import { bearerToken } from '../constants';

export const config = {
	headers: { Authorization: `Bearer ${bearerToken}` }
};
