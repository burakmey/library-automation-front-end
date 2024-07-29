import axios from "axios";
import { base } from "../constants/ApiEndpoints";

// Axios instance for public endpoints.
const api = axios.create({ baseURL: base, timeout: 10000 });

// Axios instance for private endpoints.
const apiPrivate = axios.create({
  baseURL: base,
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
  withCredentials: true,
});

export { api, apiPrivate };
