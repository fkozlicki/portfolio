import React from 'react';
import styled from 'styled-components';
import { Container, Section } from '../styled/Utils';
import SectionHeader from './SectionHeader';

interface AboutProps {
	content: string;
}

const About = ({ content }: AboutProps) => {
	return (
		<Section data-scroll-section>
			<Container>
				<SectionHeader>About</SectionHeader>
				<Description>{content}</Description>
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
