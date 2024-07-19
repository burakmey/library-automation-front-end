import axios from "axios";
import { base } from "../constants/ApiEndpoints";

export default axios.create({ baseURL: base });

export const axiosPrivate = axios.create({
  baseURL: base,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
