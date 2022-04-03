const SectionHeader = ({ title, subtitle }) => {
	return (
		<div
			className="mb-12 md:mb-16 text-gray-700 dark:text-white text-center"
			data-aos="fade-left"
		>
			<h1 className="text-center font-semibold text-2xl md:text-4xl mb-1">
				{title}
			</h1>
			<h1 className="text-xs md:text-sm text-gray-400">{subtitle}</h1>
		</div>
	);
};

export default SectionHeader;
