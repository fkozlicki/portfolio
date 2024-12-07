'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { IconCloud } from './icon-cloud';

export default function About({
	text = 'I am computer science student based in Lublin, Poland. I am into developing web applications. Mainly focused on React with TypeScript. Really like exploring new technologies by building interesting projects.',
}) {
	const containerRef = useRef(null);
	const textRef = useRef<HTMLDivElement | null>(null);

	useGSAP(() => {
		const words = textRef.current?.querySelectorAll('span');

		if (!words) {
			return;
		}

		gsap.set(words, { opacity: 0.2 });

		gsap.fromTo(
			words,
			{ opacity: 0.2 },
			{
				opacity: 1,
				scrollTrigger: {
					trigger: containerRef.current,
					start: 'top top',
					end: 'bottom bottom',
					scrub: true,
				},
				stagger: {
					each: 0.1,
				},
			}
		);
	});

	const splitText = text.split(' ').map((word, index) => (
		<span key={index} className="word">
			{word}&nbsp;
		</span>
	));

	return (
		<div className="max-w-7xl mx-auto px-4 md:px-8">
			<div ref={containerRef} className="h-[200vh] relative">
				<div className="sticky top-0 flex items-center h-1/2">
					<div className="flex flex-col gap-4 md:flex-row md:items-center lg:gap-12">
						<div className="md:order-1 flex-1">
							<IconCloud iconSlugs={slugs} />
						</div>
						<div className="flex-1">
							<p className="text-[32px] leading-[32px] md:text-[52px] md:leading-[52px] font-integral tracking-wide">
								About
							</p>
							<p
								ref={textRef}
								className="mt-4 text-white/80 inline-flex flex-wrap md:text-xl"
							>
								{splitText}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const slugs = [
	'typescript',
	'javascript',
	'java',
	'react',
	'html5',
	'css3',
	'nodedotjs',
	'express',
	'nextdotjs',
	'prisma',
	'amazonaws',
	'postgresql',
	'vercel',
	'testinglibrary',
	'jest',
	'cypress',
	'docker',
	'git',
	'github',
	'visualstudiocode',
	'figma',
	'springboot',
	'graphql',
	'drizzle',
	'trpc',
	'reactquery',
	'redux',
	'vite',
	'tailwindcss',
	'zod',
	'storybook',
	'gatsby',
];
