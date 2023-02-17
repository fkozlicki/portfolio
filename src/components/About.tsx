import React from 'react';
import styled from 'styled-components';
import { Container } from '../styled/Container';
import SectionHeader from './SectionHeader';

const About = () => {
	return (
		<AboutSection data-scroll-section>
			<Container>
				<SectionHeader>About</SectionHeader>
				<Description>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus,
					beatae eveniet architecto alias laboriosam incidunt autem, rerum
					accusamus aspernatur consectetur inventore quos quia distinctio natus
					ducimus reiciendis earum corrupti iste.es
				</Description>
			</Container>
		</AboutSection>
	);
};

export default About;

const AboutSection = styled.section`
	padding-block: 25vh;
`;

const Description = styled.div`
	color: #ffffffb0;
	@media screen and (min-width: 768px) {
		font-size: 20px;
	}
	@media screen and (min-width: 1024px) {
		font-size: 24px;
	}
`;
