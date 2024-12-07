'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { forwardRef, RefObject, useRef } from 'react';

const DigitColumn = forwardRef<
	HTMLDivElement,
	{ digits: string[]; withZero?: boolean }
>(({ digits, withZero }, ref) => (
	<div
		ref={ref}
		className="flex flex-col items-center text-[64px] leading-[64px] md:text-[100px] md:leading-[100px]"
	>
		{digits.map((digit, index) => (
			<span key={index}>{digit}</span>
		))}
		{withZero && <span>0</span>}
	</div>
));

DigitColumn.displayName = 'DigitColumn';

export default function Loader({ onComplete }: { onComplete: () => void }) {
	const ref = useRef<HTMLDivElement>(null);
	const digit1Ref = useRef<HTMLDivElement>(null);
	const digit2Ref = useRef<HTMLDivElement>(null);
	const digit3Ref = useRef<HTMLDivElement>(null);

	const digitColumns = [
		{ ref: digit1Ref, digits: generateDigits(2) },
		{ ref: digit2Ref, digits: generateDigits(10), withZero: true },
		{ ref: digit3Ref, digits: generateDigits(30), withZero: true },
	];

	useGSAP(() => {
		const timeline = gsap.timeline({
			onComplete,
		});

		timeline.add(animateDigits(digit3Ref, 3));
		timeline.add(animateDigits(digit2Ref, 3), '-=2.5');
		timeline.add(animateDigits(digit1Ref, 2), '-=1');

		timeline.to(ref.current, {
			y: '-100%',
			duration: 0.5,
			ease: 'power2.inOut',
		});
	});

	function animateDigits(ref: RefObject<HTMLDivElement>, duration: number) {
		const element = ref.current!;

		const totalDistance = element.scrollHeight - element.clientHeight;

		return gsap.to(element, {
			y: -totalDistance,
			duration,
			ease: 'power2.inOut',
		});
	}

	return (
		<div
			ref={ref}
			className="fixed inset-0 flex flex-col justify-center items-center bg-[#060606] text-white z-50"
		>
			<div className="overflow-hidden flex h-[64px] md:h-[100px] font-integral">
				{digitColumns.map(({ ref, digits, withZero }, index) => (
					<DigitColumn
						key={index}
						ref={ref}
						digits={digits}
						withZero={withZero}
					/>
				))}
				<span className="relative text-[64px] leading-[64px] md:text-[100px] md:leading-[100px]">
					%
				</span>
			</div>
		</div>
	);
}

function generateDigits(count: number): string[] {
	return Array.from({ length: count }, (_, i) => String(i % 10));
}
