import React from 'react';
import styled from 'styled-components';

interface SectionHeaderProps {
	children: string;
}

const SectionHeader = ({ children }: SectionHeaderProps) => {
	return (
		<StyledHeader>
			{children.split('').map((letter, index) => (
				<HeaderContent key={index} data-scroll>
					<HeaderContent
						data-scroll
						data-scroll-speed="4"
						data-scroll-delay={(0.04 + 0.01 * (index + 1)).toFixed(2)}
					>
						{letter}
					</HeaderContent>
				</HeaderContent>
			))}
		</StyledHeader>
	);
};

export default SectionHeader;

const StyledHeader = styled.h3`
	font-size: clamp(32px, 5vw, 128px);
	font-weight: 500;
	margin-bottom: 5vw;
	text-transform: uppercase;
`;

const HeaderContent = styled.span`
	display: inline-block;
`;
