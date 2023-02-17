import React from 'react';
import styled from 'styled-components';
import { Container } from '../styled/Container';

const Intro = () => {
	return (
		<IntroSection data-scroll-section>
			<Container>
				<IntroWrapper>
					<h1>
						<Name
							data-scroll
							data-scroll-speed="3"
							data-scroll-direction="horizontal"
							data-scroll-position="left"
						>
							Filip
						</Name>
						<Name
							data-scroll
							data-scroll-speed="-3"
							data-scroll-direction="horizontal"
							data-scroll-position="left"
						>
							Koźlicki
						</Name>
					</h1>
					<Title data-scroll data-scroll-speed="1" data-scroll-position="top">
						Front-end Developer
					</Title>
				</IntroWrapper>
			</Container>
		</IntroSection>
	);
};

export default Intro;

const IntroSection = styled.div`
	padding-block: 20vh;
	max-height: 100vh;
`;

const IntroWrapper = styled.div``;

const Avatar = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 8px;
	background: gray;
`;

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
