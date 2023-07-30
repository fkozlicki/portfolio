import React from 'react';
import styled from 'styled-components';
import { Container, Section } from '../styled/Utils';
import SectionHeader from './SectionHeader';
import Project from './Project';
import { IProjectFields } from '../@types/generated/contentful';
import { Entry } from 'contentful';

interface ProjectsProps {
	projects: Entry<IProjectFields>[];
}

const Projects = ({ projects }: ProjectsProps) => {
	return (
		<Section data-scroll-section>
			<Container>
				<SectionHeader>Projects</SectionHeader>
				<ProjectsWrapper>
					{projects.map(({ fields }, index) => (
						<Project key={index} index={index} {...fields} />
					))}
				</ProjectsWrapper>
			</Container>
		</Section>
	);
};

export default Projects;

const ProjectsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	row-gap: 15vw;
`;
