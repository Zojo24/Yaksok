import logo from "../assets/logo.png";
import Button from "../components/Button";

const StartMake = () => {
	return (
		<div className="h-lvh flex justify-center items-center">
			<div className="flex flex-col justify-center items-center gap-10 bg-white rounded-[10px] px-32 py-12">
				<h1 className="w-20 h-20">
					<img src={logo} alt="logo" />
				</h1>
				<p>약속(YAKSOK)에 오신 걸 환영합니다.</p>
				<Button variant="orange" size="lg" className="w-full text-white">
					새로 생성하기
				</Button>
			</div>
		</div>
	);
};

export default StartMake;
