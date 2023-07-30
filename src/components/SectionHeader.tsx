import React from 'react';
import styled from 'styled-components';

interface SectionHeaderProps {
	children: string;
}

const SectionHeader = ({ children }: SectionHeaderProps) => {
	return (
		<StyledHeader data-scroll>
			{children.split('').map((letter, index) => (
				<HeaderContent
					key={index}
					data-scroll
					data-scroll-speed="3"
					data-scroll-delay={(0.04 + (0.02 * (index + 1))).toFixed(2)}
				>
					{letter}
				</HeaderContent>
			))}
		</StyledHeader>
	);
};

export default SectionHeader;

const StyledHeader = styled.h3`
	font-size: clamp(32px, 5vw, 128px);
	font-weight: 500;
	margin-bottom: clamp(32px, 5vw, 50px);
	text-transform: uppercase;
`;

const HeaderContent = styled.span`
	display: inline-block;
`;
