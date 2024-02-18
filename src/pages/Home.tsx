import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};
export default Home;
