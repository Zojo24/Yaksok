import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NaverMap from "../components/NaverMap";
import searchPlace from "../utils/api";

interface SearchResultItem {
  title: string;
  link: string;
  category: string;
  description: string;
  telephone: string;
  address: string;
  roadAddress: string;
  mapx: string;
  mapy: string;
}

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);

  const handleSearch = async () => {
    if (!searchQuery) return; // 검색어가 비어있으면 요청을 보내지 않음
    try {
      const results = await searchPlace(searchQuery);
      setSearchResults(results); // 검색 결과 상태 업데이트
    } catch (error) {
      console.error("검색 실패:", error);
      setSearchResults([]); // 에러 발생 시 검색 결과를 비움
    }
  };

  return (
    <>
      <div className="flex absolute min-h-screen min-w-full">
        <NaverMap />
      </div>
      <div className="flex relative z-5">
        <nav className="bg-darkGray w-24 h-screen items-center pb-2 flex flex-col justify-between">
          <div className="flex flex-col w-full items-center">
            <img src={logo} alt="logo" className="w-16 h-13 m-2 bg-white" />
            <FontAwesomeIcon
              icon={faBars}
              size="2xl"
              style={{ color: "#ffffff" }}
              className="my-4"
            />
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
                  <li key={index} className="bg-creme p-2 m-4 rounded-[5px]}">
                    <p className="text-mdBold text-[0.87rem] text-center">
                      {" "}
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
