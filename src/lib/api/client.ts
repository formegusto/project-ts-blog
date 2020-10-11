import axios, { AxiosInstance } from 'axios';

const client: AxiosInstance = axios.create();

client.defaults.baseURL = "http://localhost:4000/"

export default client;