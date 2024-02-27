import { useState } from "react";

interface HamburgerProps {
	onClick: () => void;
}

const HamburgerMenu = ({ onClick }: HamburgerProps) => {
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setIsActive(!isActive);
		onClick();
	};

	const hamburgerClasses =
		"flex flex-col justify-center items-center w-[50px] h-[50px] bg-transparent border-none cursor-pointer";
	const menuClasses = "block w-[30px] h-1 bg-white my-[3px] mx-auto rounded-[1.5px]";

	return (
		<button className={`${hamburgerClasses}`} onClick={handleClick}>
			<span
				className={`${menuClasses} ${isActive ? "rotate-45 origin-[10%_200%] transition transform opacity duration-200" : ""}`}></span>
			<span className={`${menuClasses} ${isActive ? "opacity-0" : ""}`}></span>
			<span
				className={`${menuClasses} ${isActive ? "-rotate-45 origin-[10%_-70%] transition transform opacity duration-200" : ""}`}></span>
		</button>
	);
};

export default HamburgerMenu;
