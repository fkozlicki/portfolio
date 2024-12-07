'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

interface JobProps {
	id: number;
	position: {
		name: string;
		description: string;
	};
	company: {
		name: string;
		site: string;
	};
	stack: string[];
	year: string;
}

export default function Job({ id, company, position, stack, year }: JobProps) {
	const circleRef = useRef(null);
	const lineRef = useRef(null);
	const positionRef = useRef(null);
	const descriptionRef = useRef(null);
	const tagsRef = useRef(null);
	const yearsRef = useRef(null);

	useGSAP(() => {
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: '.experience',
				start: '20% center',
			},
		});

		const index = id - 1;

		const delay = index * 0.8;

		timeline.fromTo(
			circleRef.current,
			{ scale: 0 },
			{ scale: 1, duration: 0.2, delay }
		);

		timeline.fromTo(
			lineRef.current,
			{ scaleY: 0, transformOrigin: 'top' },
			{ scaleY: 1, duration: 0.6 }
		);

		timeline.fromTo(
			[yearsRef.current, positionRef.current],
			{ opacity: 0 },
			{ opacity: 1, duration: 0.2 },
			'-=0.6'
		);

		timeline.fromTo(
			descriptionRef.current,
			{ opacity: 0 },
			{ opacity: 1, duration: 0.2 },
			'-=0.4'
		);

		timeline.fromTo(
			tagsRef.current,
			{ opacity: 0 },
			{ opacity: 1, duration: 0.2 },
			'-=0.2'
		);
	});

	return (
		<div className="flex gap-4 md:gap-8">
			<span
				ref={yearsRef}
				className="font-integral md:text-lg -mt-1.5 hidden sm:inline"
			>
				{year}
			</span>
			<div className="flex-col items-center hidden sm:flex">
				<div
					ref={circleRef}
					className="size-3 md:size-4 rounded-full bg-white"
				></div>
				<div ref={lineRef} className="w-0.5 md:w-1 h-full bg-white"></div>
			</div>
			<div className="pb-6 md:pb-10">
				<p
					ref={positionRef}
					className="font-integral text-xl md:text-3xl -mt-1.5"
				>
					{position.name} @{' '}
					<a href={company.site} className="hover:underline">
						{company.name}
					</a>
				</p>
				<p ref={descriptionRef} className="mt-4 md:text-xl">
					{position.description}
				</p>
				<div
					ref={tagsRef}
					className="flex items-center gap-2 mt-3 flex-wrap text-xs md:text-base"
				>
					{stack.map((name) => (
						<div key={name}>{name}</div>
					))}
				</div>
			</div>
		</div>
	);
}
