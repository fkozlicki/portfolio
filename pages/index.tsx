import { Poppins } from '@next/font/google';
import styled from 'styled-components';
import About from '@/src/components/About';
import Intro from '@/src/components/Intro';
import Projects from '@/src/components/Projects';
import Experience from '@/src/components/Experience';
import Contact from '@/src/components/Contact';
import SEO from '@/src/components/SEO';

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	display: 'swap',
});

export default function Home() {
	return (
		<>
			<SEO />
			<Wrapper className={poppins.className}>
				<Intro />
				<About />
				<Experience />
				<Projects />
				<Contact />
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	background: black;
	color: white;
	overflow: hidden;
`;
