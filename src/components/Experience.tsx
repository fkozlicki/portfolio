import React from 'react';
import { Container, Section } from '../styled/Utils';
import SectionHeader from './SectionHeader';
import Job from './Job';
import { IJobFields } from '../@types/generated/contentful';
import { Entry } from 'contentful';

interface ExperienceProps {
	jobs: Entry<IJobFields>[];
}

const Experience = ({ jobs }: ExperienceProps) => {
	return (
		<Section data-scroll-section>
			<Container>
				<SectionHeader>Experience</SectionHeader>
				<div>
					{jobs.map(({ fields }, index) => (
						<Job key={index} {...fields} />
					))}
				</div>
			</Container>
		</Section>
	);
};

export default Experience;
