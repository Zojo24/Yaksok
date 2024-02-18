import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");

  return (
    <div className="flex">
      <nav className="bg-darkGray flex flex-col justify-between w-14 h-screen items-center pb-2">
        <div className="flex flex-col w-full items-center">
          <img src={logo} alt="logo" className="w-10 h-13 m-2 bg-white" />
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            style={{ color: "#fbfdfe" }}
            className="m-2"
          />
          <Button variant="creme" size="sm" className="w-10 text-[0.8rem] mt-2">
            유성
          </Button>
        </div>
        <div className="flex flex-col w-full items-center pb-5">
          <Button
            variant="creme"
            size="sm"
            className="w-10 text-[0.6rem] mt-2 mb-4"
          >
            투표하기
          </Button>
          <Button
            variant="creme"
            size="sm"
            className="w-10 text-[0.6rem] mt-2 mb-4"
          >
            링크공유
          </Button>
          <Button
            variant="creme"
            size="sm"
            className="w-10 text-[0.6rem] mt-2 mb-4"
          >
            결과보기
          </Button>
        </div>
      </nav>
      <header className="flex justify-end w-full m-4">
        <div className="mr-8">
          <input
            type="text"
            placeholder="Search"
            className="w-[20rem] h-12 bg-darkGray border border-darkGray p-2 rounded-[5px] shadow text-center text-white focus:outline-none focus:border-creme"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
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
  );
};
export default Home;
