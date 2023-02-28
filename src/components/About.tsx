import React from 'react';
import styled from 'styled-components';
import { Container, Section } from '../styled/Utils';
import SectionHeader from './SectionHeader';

const About = () => {
	return (
		<Section data-scroll-section>
			<Container>
				<SectionHeader>About</SectionHeader>
				<Description>
					I am computer science student based in Lublin, Poland. I am into
					developing web applications. Mainly focused on React with TypeScript.
					Really like exploring new technologies by building interesting
					projects.
				</Description>
			</Container>
		</Section>
	);
};

export default About;

const Description = styled.div`
	color: #ffffffb0;
	@media screen and (min-width: 768px) {
		font-size: 20px;
	}
	@media screen and (min-width: 1024px) {
		font-size: 24px;
	}
`;
