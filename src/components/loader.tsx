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
		className="flex flex-col items-center text-[100px] leading-[100px]"
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

		timeline.add(animateDigits(digit3Ref, 4));
		timeline.add(animateDigits(digit2Ref, 5), '-=4');
		timeline.add(animateDigits(digit1Ref, 2, 3), '-=5');

		timeline.to(ref.current, {
			y: '-100%',
			duration: 0.5,
			ease: 'power2.inOut',
		});
	});

	function animateDigits(
		ref: RefObject<HTMLDivElement>,
		duration: number,
		delay = 0
	) {
		const element = ref.current!;

		const totalDistance = element.scrollHeight - element.clientHeight - 25;

		return gsap.to(element, {
			y: -totalDistance,
			duration,
			ease: 'power2.inOut',
			delay,
		});
	}

	return (
		<div
			ref={ref}
			className="fixed inset-0 flex flex-col justify-center items-center bg-black text-white z-50"
		>
			<div className="overflow-hidden flex h-[100px] font-anton">
				{digitColumns.map(({ ref, digits, withZero }, index) => (
					<DigitColumn
						key={index}
						ref={ref}
						digits={digits}
						withZero={withZero}
					/>
				))}
				<span className="relative text-[100px] leading-[100px]">%</span>
			</div>
		</div>
	);
}

function generateDigits(count: number): string[] {
	return Array.from({ length: count }, (_, i) => String(i % 10));
}
