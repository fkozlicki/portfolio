const Link = ({ children, href, label }) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer noopener"
			className="text-gray-600 hover:text-gray-900  dark:text-gray-400 dark:hover:text-white duration-300"
			aria-label={label}
		>
			{children}
		</a>
	);
};

export default Link;
