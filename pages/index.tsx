import { Poppins } from '@next/font/google';
import styled from 'styled-components';
import About from '@/src/components/About';
import Intro from '@/src/components/Intro';
import Projects from '@/src/components/Projects';
import Experience from '@/src/components/Experience';
import Contact from '@/src/components/Contact';
import SEO from '@/src/components/SEO';
import client from '@/src/lib/contentful';
import { GetStaticProps } from 'next';
import {
	IInfoFields,
	IJobFields,
	ILinkFields,
	IProjectFields,
} from '@/src/@types/generated/contentful';
import { Entry } from 'contentful';

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	display: 'swap',
});

interface HomeProps {
	jobs: Entry<IJobFields>[];
	projects: Entry<IProjectFields>[];
	links: Entry<ILinkFields>[];
	info: Entry<IInfoFields>;
}

export default function Home({ jobs, projects, links, info }: HomeProps) {
	const { firstName, lastName, title, about } = info.fields;

	return (
		<>
			<SEO />
			<Wrapper className={poppins.className}>
				<Intro firstName={firstName} lastName={lastName} title={title} />
				<About content={about} />
				<Experience jobs={jobs} />
				<Projects projects={projects} />
				<Contact links={links} />
			</Wrapper>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const jobs = (
		await client.getEntries<IJobFields>({
			content_type: 'job',
		})
	).items;
	const projects = (
		await client.getEntries<IProjectFields>({
			content_type: 'project',
			order: 'fields.name',
		})
	).items;
	const links = (
		await client.getEntries<ILinkFields>({
			content_type: 'link',
			order: 'fields.to',
		})
	).items;
	const info = await client.getEntry<IInfoFields>('6IDIwaadms2fZ8QNjX6bX');

	return {
		props: {
			jobs,
			projects,
			links,
			info,
		},
	};
};

const Wrapper = styled.div`
	background: black;
	color: white;
	overflow: hidden;
`;
