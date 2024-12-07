import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ReactLenis } from 'lenis/react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Poppins, Anton } from 'next/font/google';
import WebGL from '@/components/webgl';

export const metadata: Metadata = {
	title: 'Filip Kozlicki | Portfolio',
	description: 'Filip Kozlicki | Software Engineer | Portfolio',
	twitter: {
		title: 'Filip Kozlicki | Portfolio',
		description: 'Filip Kozlicki | Software Engineer | Portfolio',
		images: {
			url: 'https://filipkozlicki.pl/opengraph-image.png',
			width: 800,
			height: 600,
		},
	},
	openGraph: {
		title: 'Filip Kozlicki | Portfolio',
		description: 'Filip Kozlicki | Software Engineer | Portfolio',
		siteName: 'Filip Kozlicki',
		type: 'website',
		images: {
			url: 'https://filipkozlicki.pl/opengraph-image.png',
			width: 800,
			height: 600,
		},
		url: 'https://filipkozlicki.pl',
	},
};

const font = localFont({
	src: './fonts/Integral.otf',
	display: 'swap',
	variable: '--font-integral',
});

const poppins = Poppins({
	subsets: ['latin'],
	weight: '300',
});

const anton = Anton({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-anton',
});

gsap.registerPlugin(useGSAP);

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<ReactLenis root>
				<body
					className={`antialiased relative bg-[#060606] ${font.variable} ${anton.variable} ${poppins.className}`}
				>
					<div className="fixed top-0 left-0 h-screen right-0">
						<WebGL />
					</div>

					<div className="relative z-10">{children}</div>
				</body>
			</ReactLenis>
		</html>
	);
}
