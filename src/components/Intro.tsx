import React from 'react';
import styled from 'styled-components';
import { Container, Section } from '../styled/Utils';

interface IntroProps {
	firstName: string;
	lastName: string;
	title: string;
}

const Intro = ({ firstName, lastName, title }: IntroProps) => {
	return (
		<Section data-scroll-section>
			<Container>
				<h1>
					<Name
						data-scroll
						data-scroll-speed="3"
						data-scroll-direction="horizontal"
						data-scroll-position="left"
					>
						{firstName}
					</Name>
					<Name
						data-scroll
						data-scroll-speed="-3"
						data-scroll-direction="horizontal"
						data-scroll-position="left"
					>
						{lastName}
					</Name>
				</h1>
				<Title data-scroll data-scroll-speed="1" data-scroll-position="top">
					{title}
				</Title>
			</Container>
		</Section>
	);
};

export default Intro;

const Name = styled.span`
	font-size: 12vw;
	font-weight: 700;
	text-transform: uppercase;
	line-height: 1.2;
	display: block;
`;

const Title = styled.h3`
	font-size: 4vw;
	color: #ffffffba;
	font-weight: 400;
	margin-left: 0.3vw;
`;
