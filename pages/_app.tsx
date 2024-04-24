import type { AppProps } from 'next/app';
import '../src/styled/globals.css';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import ScrollTriggerProxy from '@/src/components/ScrollTriggerProxy';

export default function App({ Component, pageProps }: AppProps) {
	const containerRef = useRef<HTMLElement>(null);
	const { asPath } = useRouter();

	return (
		<LocomotiveScrollProvider
			options={{
				smooth: true,
				multiplier: 2.5,
				smartphone: {
					smooth: true,
				},
				tablet: {
					smooth: true,
				},
				lerp: 0.03,
			}}
			watch={[]}
			location={asPath}
			onLocationChange={(scroll: any) =>
				scroll.scrollTo(0, { duration: 0, disableLerp: true })
			}
		>
			<ScrollTriggerProxy />
			<main data-scroll-container ref={containerRef}>
				<Component {...pageProps} />
			</main>
		</LocomotiveScrollProvider>
	);
}
