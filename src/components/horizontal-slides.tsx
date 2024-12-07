'use client';

import { useScroll } from '@/hooks/use-scroll';
import { clamp, mapRange } from '@/lib/math';
import { useMediaQuery, useRect } from '@darkroom.engineering/hamo';
import gsap from 'gsap';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'react-use';

export default function HorizontalSlides({ children }: PropsWithChildren) {
	const elementRef = useRef<HTMLDivElement | null>(null);
	const isMobile = useMediaQuery('(max-width: 1023px)');
	const [wrapperRectRef, wrapperRect] = useRect();
	const [elementRectRef, elementRect] = useRect();

	const { height: windowHeight } = useWindowSize();

	const [windowWidth, setWindowWidth] = useState<number>(0);

	useScroll(({ scroll }) => {
		if (!elementRect || !elementRef.current) return;

		const start = wrapperRect.top - windowHeight;
		const end = wrapperRect.top + wrapperRect.height - windowHeight;

		let progress = mapRange(start, end, scroll, 0, 1);
		progress = clamp(0, progress, 1);

		const x = progress * (elementRect.width - windowWidth);

		const cards = [...elementRef.current.children];

		gsap.to(cards, {
			x: -x,
			stagger: 0.033,
			ease: 'none',
			duration: 0,
		});
	});

	useEffect(() => {
		const onResize = () => {
			setWindowWidth(
				Math.min(window.innerWidth, document.documentElement.offsetWidth)
			);
		};

		window.addEventListener('resize', onResize, false);
		onResize();

		return () => {
			window.removeEventListener('resize', onResize, false);
		};
	}, []);

	return (
		<div
			ref={wrapperRectRef}
			style={
				elementRect && isMobile === false
					? { height: elementRect.width + 'px' }
					: {}
			}
		>
			<div className="flex overflow-hidden sticky top-1/3">
				<div
					ref={(node) => {
						elementRef.current = node;
						elementRectRef(node);
					}}
					className="lg:flex [&>*]:shrink-0 hidden"
				>
					{children}
				</div>

				<div className="flex flex-col items-center justify-center w-full [&>*]:mb-8 lg:hidden">
					{children}
				</div>
			</div>
		</div>
	);
}
