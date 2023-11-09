import axios from "axios";
import { URL } from "../config/constant";

export const getData = async () => {
  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (e) {
    console.error("Failed to get data", e);
  }
};
