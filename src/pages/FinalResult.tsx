import heart from "../assets/Heart.png";
import plusOne from "../assets/plus-one.png";
import Button from "../components/Button";

interface ResultProps {
	name: string;
	url: string;
}

const FinalResult = ({ name, url }: ResultProps) => {
	return (
		<div className="h-lvh flex justify-center items-center">
			<div className="relative flex flex-col justify-center items-center gap-5 bg-white rounded-[10px] px-32 py-12">
				<img src={heart} alt="heart" className="w-20 h-20" />
				<img src={plusOne} alt="plusOne" className="w-28 h-36 absolute -left-10 -top-10" />
				<p className="text-titleMd font-bold">{name}</p>
				<a href={url} target="_blank" className="text-titleMd hover:underline">
					{url}
				</a>
				<Button variant="orange" size="lg" className="w-full text-white">
					공유하기
				</Button>
			</div>
		</div>
	);
};

export default FinalResult;
