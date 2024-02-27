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
export { searchPlace };


const savePlace = async (
  title: string,
  link: string,
  rating: number,
  address: string,
  lat: number,
  lng: number
) => {
  try {
    const postData = {
      title,
      link,
      rating,
      address,
      lat,
      lng,
    };

    const response = await axiosInstance.post("/save-location", postData);
    console.log("서버 저장 결과:", response.data);

    // 필요한 경우 서버 응답에 따라 추가 작업을 수행합니다.
  } catch (error) {
    console.error("장소 정보 저장 실패:", error);
  }
};
export { savePlace };

const 
