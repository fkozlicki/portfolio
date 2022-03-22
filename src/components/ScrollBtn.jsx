const ScrollBtn = () => {
	const backToTop = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};
	window.onscroll = function () {
		scrollFunction();
	};

	function scrollFunction() {
		if (
			document.body.scrollTop > 200 ||
			document.documentElement.scrollTop > 200
		) {
			document.querySelector(".to-top").style.visibility = "visible";
			document.querySelector(".to-top").style.opacity = "1";
		} else {
			document.querySelector(".to-top").style.visibility = "hidden";
			document.querySelector(".to-top").style.opacity = "0";
		}
	}
	return (
		<button
			onClick={backToTop}
			type="button"
			data-mdb-ripple="true"
			data-mdb-ripple-color="light"
			className="hidden fixed md:inline-block invisible opacity-0 p-3 bg-[#102d4e] text-white font-medium leading-tight uppercase rounded-lg shadow-md hover:bg-[#173D68] dark:bg-[#0B1B23] dark:hover:bg-[#132E3C] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition  ease-in-out bottom-5 right-5 to-top"
			id="btn-back-to-top"
		>
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fas"
				className="w-3 h-3"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
			>
				<path
					fill="currentColor"
					d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
				></path>
			</svg>
		</button>
	);
};

export default ScrollBtn;
