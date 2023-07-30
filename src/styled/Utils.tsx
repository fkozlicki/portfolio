import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1200px;
	margin: auto;
	padding-inline: 2.5rem;
	@media screen and (min-width: 640px) {
		padding-inline: 2rem;
	}
`;

export const Section = styled.section`
	padding-block: 4.5rem;

	@media screen and (min-width: 768px) {
		padding-block: 20vh;
	}
`;
