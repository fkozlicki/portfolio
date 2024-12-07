import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="w-screen h-screen grid place-items-center p-4 md:p-8">
			<div className="grid justify-items-center">
				<p className="text-[40px] leading-[40px] md:text-[90px] md:leading-[90px] font-integral font-extrabold tracking-wide">
					NOT FOUND
				</p>
				<p className="mt-8 text-center md:text-xl font-semibold text-white/80">
					You won&apos;t find here anyhing. It is only my portfolio website.
					<br />
					Click the link below to see it.
				</p>
				<Link
					href="/"
					className="mt-4 bg-white hover:bg-white/80 text-black font-semibold md:w-28 md:h-10 w-20 h-8 rounded-full md:text-lg inline-flex items-center justify-center text-sm"
				>
					Home
				</Link>
			</div>
		</div>
	);
}
