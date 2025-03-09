'use client';

import { MouseEventHandler, useState } from 'react';

export interface Project {
	name: string;
	description: string;
	stack: string[];
	demo: string;
	code: string;
}

export default function Project({
	name,
	description,
	stack,
	demo,
	code,
}: Project) {
	const [{ x, y }, setMouse] = useState({
		x: 0,
		y: 0,
	});
	const [visible, setVisible] = useState(false);

	const hoverProject: MouseEventHandler<HTMLDivElement> = (event) => {
		const { clientX, clientY } = event;
		const { left, top } = (
			event.currentTarget as HTMLDivElement
		).getBoundingClientRect();
		const x = clientX - left - 50;
		const y = clientY - top - 50;
		setMouse({ x, y });
	};

	const tagsString = stack.reduce((acc, tag, index) => {
		acc += tag;
		if (index + 1 < stack.length) acc += ' • ';
		return acc;
	}, '');

	return (
		<div className="relative max-w-[600px] lg:w-[600px] lg:mr-28 lg:first:ml-[600px] overflow-hidden">
			<div
				className="relative border backdrop-blur-[6px] p-4 md:p-8 border-white/[0.08] z-10 h-full flex flex-col"
				onMouseMove={hoverProject}
				onMouseEnter={() => setVisible(true)}
				onMouseLeave={() => setVisible(false)}
			>
				<div className="flex justify-between items-center">
					<span className="font-integral text-xl md:text-3xl">{name}</span>
					<div className="flex gap-4">
						<a
							href={demo}
							target="__blank"
							className="hover:text-white text-white/80"
						>
							Demo
						</a>
						<a
							href={code}
							target="__blank"
							className="hover:text-white text-white/80"
						>
							Code
						</a>
					</div>
				</div>

				<p className="my-4 md:text-xl">{description}</p>

				<div className="mt-auto text-xs md:text-base">{tagsString}</div>

				<div
					className="size-[120px] bg-[#17a123] blur-[75px] rounded-full mix-blend-soft-light will-change-transform absolute top-0 left-0 pointer-events-none z-[-1] transition-opacity duration-[1.2s] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
					style={{
						transform: `translate(${x}px, ${y}px)`,
						opacity: visible ? 1 : 0,
					}}
				></div>
			</div>
		</div>
	);
}
