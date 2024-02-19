import axios from "axios";
import { Naver_ID, Naver_Secret } from "../config";

const axiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    "X-Naver-Client-Id": Naver_ID,
    "X-Naver-Client-Secret": Naver_Secret,
  },
});

const searchPlace = async (query: string) => {
  try {
    const response = await axiosInstance.get("/v1/search/local.json", {
      params: { query, display: 20, start: 1, sort: "random" },
    });
    console.log("네이버에서 받은 결과 =", response.data);
    return response.data.items;
  } catch (error) {
    console.error("API 호출 중 오류가 발생했습니다:", error);
    throw error;
  }
};
export default searchPlace;
