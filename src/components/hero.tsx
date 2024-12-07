'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import Loader from './loader';

export default function Hero() {
	const forename = useRef(null);
	const surname = useRef(null);
	const position = useRef(null);
	const [start, setStart] = useState(false);

	useGSAP(() => {
		// animation here
		if (start) {
			const timeline = gsap.timeline();
			timeline.to(forename.current, {
				transform: 'translateY(0)',
			});
			timeline.to(surname.current, { transform: 'translateY(0)' }, '-=0.3');
			timeline.to(position.current, { transform: 'translateY(0)' }, '-=0.2');
		}
	}, [start]);

	return (
		<>
			<Loader onComplete={() => setStart(true)} />

			<div className="max-w-7xl mx-auto w-full px-4 md:px-8">
				<div className="h-screen py-[12rem] flex justify-start items-end">
					<div>
						<div className="overflow-hidden">
							<p
								ref={forename}
								className="text-[40px] leading-[40px] md:text-[90px] md:leading-[90px] font-integral font-extrabold tracking-wide translate-y-full"
							>
								FILIP
							</p>
						</div>
						<div className="overflow-hidden">
							<p
								ref={surname}
								className="text-[40px] leading-[40px] md:text-[90px] font-integral font-extrabold tracking-wide md:leading-[90px] translate-y-full"
							>
								KOZLICKI
							</p>
						</div>
						<div className="overflow-hidden mt-2 md:mt-4">
							<p
								ref={position}
								className="text-lg text-white/80 md:text-2xl translate-y-full"
							>
								Software Engineer
							</p>
						</div>
					</div>
					<div></div>
				</div>
			</div>
		</>
	);
}
