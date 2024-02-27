import { useState } from "react";
import logo from "../assets/logo-w.png";
import Button from "../components/Button";
import NaverMap from "../components/NaverMap";
import { savePlace, searchPlace } from "../utils/api";
import MockProfiles from "../mocks/MockProfiles";
import Hamburger from "../components/Hamburger/Hamburger";

interface SearchResultItem {
  title: string;
  address: string;
  lat: number;
  lng: number;
  link: string;
  rating: number;
}
interface LatLng {
  lat: number;
  lng: number;
}

interface User {
  name: string;
  bgColor: string;
}

//임시로 시청역을 기준으로 잡았습니다. 추후 변경 예정
const Home = () => {
  const defaultCenter: LatLng = {
    lat: 37.5663,
    lng: 126.9779,
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);
  const [mapCenter, setMapCenter] = useState<LatLng>(defaultCenter);
  const [isUserListVisible, setIsUserListVisible] = useState(false);

  //임시로 시청역과 명동역을 핀포인트 기준으로 잡았습니다. 추후 삭제 예정
  // const mapMarkers = [
  //   { lat: 37.561, lng: 126.985 },
  //   { lat: 37.5663, lng: 126.9779 },
  // ];
  const [selectedLocations, setSelectedLocations] = useState<LatLng[]>([]);

  const handleSearch = async () => {
    if (!searchQuery) return; // 검색어가 비어있으면 요청을 보내지 않음
    try {
      const results = await searchPlace(searchQuery);
      console.log(results);
      const convertedResults = results.map(
        (result: { mapy: number; mapx: number }) => ({
          ...result,
          lat: result.mapy, // 'mapy' 값을 'lat'로 변환
          lng: result.mapx, // 'mapx' 값을 'lng'로 변환
        })
      );

      setSearchResults(convertedResults);
    } catch (error) {
      console.error("검색 실패:", error);
      setSearchResults([]); // 에러 발생 시 검색 결과를 비움
    }
  };

  // 지도 중심과 핀포인트를 업데이트하는 함수
  const handleLocationClick = async (result: SearchResultItem) => {
    setMapCenter({ lat: result.lat, lng: result.lng });
    setSelectedLocations([{ lat: result.lat, lng: result.lng }]);
    setSearchResults([result]);

    try {
      await savePlace(
        result.title.replace(/<[^>]*>?/gm, ""), // HTML 태그 제거
        result.link,
        result.rating || 0, // rating이 없는 경우 0으로 처리
        result.address,
        result.lat,
        result.lng
      );
      console.log("장소 저장 성공");
    } catch (error) {
      console.error("Failed to save place:", error);
    }
  };

  const handleUserList = () => {
    setIsUserListVisible(!isUserListVisible);
  };

  return (
    <>
      <div className="flex absolute min-h-screen min-w-full">
        <NaverMap center={mapCenter} markers={selectedLocations} />
      </div>
      <div className="flex relative z-5">
        <div className="flex">
          <nav className="bg-darkGray w-24 h-screen items-center pb-2 flex flex-col justify-between">
            <div className="flex flex-col w-full items-center">
              <img src={logo} alt="logo" className="w-16 h-13 m-2" />
              <Hamburger onClick={handleUserList} />
              <Button variant="creme" size="md" className="w-14 h-14 mt-2">
                유성
              </Button>
            </div>
            <div className="flex flex-col w-full items-center pb-5">
              <Button
                variant="creme"
                size="md"
                className="w-16 h-14 text-[0.85rem] text-bold my-3"
              >
                투표하기
              </Button>
              <Button
                variant="creme"
                size="md"
                className="w-16 h-14 text-[0.85rem] text-bold my-3"
              >
                링크공유
              </Button>
              <Button
                variant="creme"
                size="md"
                className="w-16 h-14 text-[0.85rem] text-bold my-3"
              >
                결과보기
              </Button>
            </div>
          </nav>
          <div
            className={`bg-white w-24 h-screen items-center p-5 flex flex-col gap-5 transition-all duration-200 ${isUserListVisible ? "opacity-100" : "opacity-0"}`}
          >
            {MockProfiles.map((user) => (
              <Button
                key={user.id}
                variant="creme"
                size="md"
                className={`w-14 h-14 bg-${user.bgColor}`}
              >
                {user.name}
              </Button>
            ))}
          </div>
        </div>
        <header className="flex justify-end w-full m-4">
          <div className="mr-8 flex flex-col">
            <input
              type="text"
              placeholder="Search"
              className="w-[25rem] h-12 bg-darkGray border border-darkGray p-2 rounded-[5px] shadow text-center text-white focus:outline-none focus:border-creme"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />

            <div className="bg-white rounded-[5px]">
              <ul>
                {searchResults.map((result, index) => (
                  <li
                    key={index}
                    className="bg-creme p-2 m-4 rounded-[5px] cursor-pointer "
                    onClick={() => handleLocationClick(result)}
                  >
                    <p className="text-mdBold text-[0.87rem] text-center">
                      {result.title.replace(/<[^>]*>?/gm, "")}
                    </p>
                    <p className="text-[0.8rem] text-center">
                      {result.address}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="h-12 bg-darkGray p-2 rounded-[5px] ">
            <Button variant="creme" size="sm" className="text-[0.9rem] mx-2">
              거리순
            </Button>
            <Button variant="creme" size="sm" className="text-[0.9rem] mx-2">
              평점순
            </Button>
            <Button variant="creme" size="sm" className="text-[0.9rem] mx-2">
              실시간 순위
            </Button>
          </div>
        </header>
      </div>
    </>
  );
};
export default Home;
