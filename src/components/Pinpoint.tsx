import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

type pinpointProps = {
	order: number;
};

const Pinpoint = ({ order }: pinpointProps) => {
	return (
		<div className="relative w-[80px] h-[80px]">
			<FontAwesomeIcon className="w-full h-full text-[80px] text-orange" icon={faLocationPin} />
			<span className="text-titleLg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{order}</span>
		</div>
	);
};

export default Pinpoint;
