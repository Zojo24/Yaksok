import { useState, useEffect } from "react";
import logo from "../assets/logo-w.png";
import Button from "../components/Button";
import NaverMap from "../components/NaverMap";
import { fetchPlaceInfo, savePlace, searchPlace } from "../utils/api";
import MockProfiles from "../mocks/MockProfiles";
import HamburgerMenu from "../components/HamburgerMenu";
import { CartItem, LatLng, SearchResultItem } from "../types/\btypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faXmark } from "@fortawesome/free-solid-svg-icons";
import Cart from "../components/Cart";
import { useCartStore } from "../store/cartStore";
import { useSearchStore } from "../store/searchStore";
import { MockSearch } from "../mocks/MockSearch";

//임시로 시청역을 기준으로 잡음 (추후 변경 예정)
const Home = () => {
  const { cartItems, addToCart, addLocation } = useCartStore();
  const defaultCenter: LatLng = { lat: 37.5663, lng: 126.9779 };

  const [searchQuery, setSearchQuery] = useState("");
  const [mapCenter, setMapCenter] = useState<LatLng>(defaultCenter);
  const [isUserListVisible, setIsUserListVisible] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState(
    MockSearch.map((item) => ({
      lat: item.lat,
      lng: item.lng,
    }))
  );
  //목업
  // const [searchResults, setSearchResults] = useState(MockSearch);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const [selectedCartItems, setSelectedCartItems] = useState<CartItem[]>([]);
  const { searchResults, setSearchResults } = useSearchStore((state) => ({
    searchResults: state.searchResults,
    setSearchResults: state.setSearchResults,
  }));

  //목업 데이터용
  // useEffect(() => {
  //   setSelectedLocations(
  //     MockSearch.map((item) => ({ lat: item.lat, lng: item.lng }))
  //   );
  // }, []);

  const handleSearch = async () => {
    if (!searchQuery) return;
    try {
      const results = await searchPlace(searchQuery);
      const convertedResults = results.map(
        (result: { mapy: number; mapx: number }) => ({
          ...result,
          lat: result.mapy / 10000000,
          lng: result.mapx / 10000000,
        })
      );

      setSearchResults(convertedResults);
    } catch (error) {
      console.error("검색 실패:", error);
      setSearchResults([]);
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

      // 장소 저장 성공 후, 추가 정보를 불러오기 (실제 구조에 맞춰 조정 필요)
      const placeInfo = {
        title: result.title.replace(/<[^>]*>?/gm, ""),
        link: result.link,
        rating: result.rating || 0,
        address: result.address,
        point: { x: result.lat, y: result.lng },
        distance: 0,
        vote: [],
        memos: [],
      };

      await fetchPlaceInfo(placeInfo);
      console.log("가게 추가 정보 불러오기 성공");
    } catch (error) {
      console.error("Failed to save place:", error);
    }
  };

  const handleUserList = () => {
    setIsUserListVisible(!isUserListVisible);
  };

  const toggleCartDropdown = () => {
    setIsCartDropdownOpen(!isCartDropdownOpen);
  };

  const handleAddResult = (item: SearchResultItem) => {
    const newItem = {
      id: item.index,
      title: item.title,
      address: item.address,
      lat: item.lat,
      lng: item.lng,
    };
    addToCart(newItem);
    console.log(newItem);
    addLocation({ lat: item.lat, lng: item.lng });
    addSelectedItemsToMap();
  };
  const handleSelectCartItem = (item: CartItem, isSelected: boolean) => {
    setSelectedCartItems((prevSelected) => {
      const itemIndex = prevSelected.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (isSelected && itemIndex === -1) {
        return [...prevSelected, item];
      } else if (!isSelected && itemIndex !== -1) {
        return prevSelected.filter((_, index) => index !== itemIndex);
      }
      return prevSelected;
    });
  };

  const addSelectedItemsToMap = () => {
    const newLocations = selectedCartItems.reduce((acc, item) => {
      const exists = acc.some(
        (loc) => loc.lat === item.lat && loc.lng === item.lng
      );
      if (!exists) {
        acc.push({ lat: item.lat, lng: item.lng });
      }
      return acc;
    }, []);

    setSelectedLocations(newLocations);
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
              <HamburgerMenu onClick={handleUserList} />
              <Button variant="creme" size="md" className="w-14 h-14 mt-2">
                유성
              </Button>
              <Button
                variant="creme"
                size="md"
                className="w-14 h-14 text-[0.85rem] text-bold my-3"
                onClick={toggleCartDropdown}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
              </Button>
              {isCartDropdownOpen && (
                <div className="absolute left-24 top-44 p-5 mt-2 ml-1 flex flex-col bg-white shadow-md rounded-lg shadow-darkGray">
                  <Cart
                    cartItems={cartItems}
                    onSelectItem={handleSelectCartItem}
                    onAddMap={addSelectedItemsToMap}
                  />
                  <button
                    className="absolute top-0 right-0 m-3"
                    onClick={() => setIsCartDropdownOpen(false)}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>
              )}
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
            {/* 검색결과 */}
            <div className="bg-white rounded-[5px]">
              <ul>
                {searchResults.map((result, index) => (
                  <li
                    key={index}
                    className="bg-creme p-2 m-4 rounded-[5px] flex flex-col items-right cursor-pointer "
                    onClick={() => handleLocationClick(result)}
                  >
                    <p className="text-mdBold text-[0.87rem] text-center">
                      {result.title.replace(/<[^>]*>?/gm, "")}
                    </p>
                    <p className="text-[0.8rem] text-center mb-2">
                      {result.address}
                    </p>
                    <Button
                      variant="white"
                      size="md"
                      className="text-[0.85rem] justify-center items-center text-bold"
                      onClick={() => handleAddResult(result)}
                    >
                      장바구니에 추가
                    </Button>
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
