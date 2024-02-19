import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://openapi.naver.com",
  headers: {
    "X-Naver-Client-Id": "wjhPXu11ak5t7jIRk9VZ",
    "X-Naver-Client-Secret": "PP87YSUeGv",
  },
});

export const searchPlace = async (query) => {
  try {
    const response = await axiosInstance.get("/v1/search/local.json", {
      params: { query, display: 1 },
    });
    return response.data.items;
  } catch (error) {
    console.error("API 호출 중 오류가 발생했습니다:", error);
    throw error;
  }
};
