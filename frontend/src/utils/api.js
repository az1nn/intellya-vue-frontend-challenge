import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

const api_token = import.meta.env.VITE_API_TOKEN

api.interceptors.request.use(
	(config) => {
	config.headers.set("x-api-key", api_token);
	return config;
	},
	(error) => {
	return Promise.reject(error);
	}
);

export default api;