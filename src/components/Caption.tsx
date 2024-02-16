type captionProps = {
	text: string;
};

const Caption = ({ text }: captionProps) => {
	return (
		<div className="w-[300px] h-[50px] border border-border border-solid rounded-[10px] flex justify-center items-center">
			{text}
		</div>
	);
};

export default Caption;
