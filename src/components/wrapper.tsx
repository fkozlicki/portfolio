'use client';

import { useScroll } from '@/hooks/use-scroll';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReactLenis, { useLenis } from 'lenis/react';
import { PropsWithChildren, useEffect } from 'react';

export default function Wrapper({ children }: PropsWithChildren) {
	const lenis = useLenis();

	gsap.registerPlugin(useGSAP, ScrollTrigger);

	useScroll(ScrollTrigger.update);

	useEffect(() => {
		if (lenis) {
			ScrollTrigger.refresh();
			lenis?.start();
		}
	}, [lenis]);

	return <ReactLenis root>{children}</ReactLenis>;
}
