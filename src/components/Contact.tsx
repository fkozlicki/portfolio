import React from 'react';
import styled from 'styled-components';
import { Container } from '../styled/Container';
import SectionHeader from './SectionHeader';
import links from '../data/links.json';

const Contact = () => {
	return (
		<ContactSection data-scroll-section>
			<Container>
				<SectionHeader>Contact</SectionHeader>
				<LinksContainer>
					{links.map(({ name, link, href }, index) => (
						<LinkWrapper key={index}>
							<SocialName>{name}</SocialName>
							<SocialLink href={href}>{link}</SocialLink>
						</LinkWrapper>
					))}
				</LinksContainer>
			</Container>
		</ContactSection>
	);
};

export default Contact;

const ContactSection = styled.section`
	padding-block: 25vh;
`;

const LinksContainer = styled.div`
	display: grid;
	row-gap: 28px;
`;

const LinkWrapper = styled.div`
	display: grid;
	gap: 24px;
	grid-template-columns: repeat(4, 1fr);

	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(8, 1fr);
		font-size: 20px;
	}

	@media screen and (min-width: 1024px) {
		font-size: 24px;
	}
`;

const SocialName = styled.div`
	grid-column: 1 / span 1;
`;

const SocialLink = styled.a`
	grid-column: 2 / -1;
	text-decoration: none;
	color: #ffffffb0;

	&:hover {
		color: white;
	}
`;
