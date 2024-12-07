import WebGL from '@/components/webgl';
import Wrapper from '@/components/wrapper';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

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
	src: './fonts/Integral.ttf',
	display: 'swap',
	variable: '--font-integral',
});

const poppins = Poppins({
	subsets: ['latin'],
	weight: '300',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Wrapper>
				<body
					className={`antialiased relative bg-[#060606] ${font.variable} ${poppins.className}`}
					suppressHydrationWarning
				>
					<div className="fixed top-0 left-0 h-screen right-0">
						<WebGL />
					</div>

					<div className="relative z-10">{children}</div>
				</body>
			</Wrapper>
		</html>
	);
}
