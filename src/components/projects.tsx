import HorizontalSlides from './horizontal-slides';
import Project from './project';

export default function Projects() {
	return (
		<div className="w-full">
			<div className="max-w-7xl mx-auto px-4 md:px-8">
				<p className="text-[32px] leading-[32px] md:text-[52px] md:leading-[52px] font-integral font-extrabold tracking-wide mb-8 md:mb-14">
					Projects
				</p>
			</div>

			<div className="px-4 md:px-8 lg:p-0">
				<HorizontalSlides>
					{projects.map((project) => (
						<Project key={project.id} {...project} />
					))}
				</HorizontalSlides>
			</div>
		</div>
	);
}

const projects = [
	{
		id: 1,
		name: 'Taskflow',
		description:
			'Kanban application with cool drag & drop. Built with Spring Boot and React.',
		stack: [
			'Java',
			'Spring Boot',
			'React',
			'Typescript',
			'React Query',
			'Shadcn UI',
			'Zod',
			'Tailwind',
			'React Router',
			'Cypress',
			'RTL',
			'Vitest',
		],
		demo: 'https://taskflow-pied.vercel.app/',
		code: 'https://github.com/fkozlicki/taskflow',
	},
	{
		id: 2,
		name: 'CodeCareers',
		description:
			'Job search platform focusing on IT and tech jobs built with Express (REST API) + React.',
		stack: [
			'React',
			'Typescript',
			'Express',
			'Drizzle',
			'Vite',
			'Tailwind',
			'RTK Query',
			'Zod',
			'Socket.io',
			'Shadcn UI',
			'React Router',
			'Jest',
			'Supertest',
			'RTL',
		],
		demo: 'https://codecarrers.vercel.app/',
		code: 'https://github.com/fkozlicki/codecareers',
	},
	{
		id: 3,
		name: 'Quizlet Clone',
		description:
			'Clone of Quizlet application with cool flip animations. Built with T3Stack.',
		stack: [
			'Next.js',
			'TalwindCSS',
			'Typescript',
			'Next-Auth',
			'tRPC',
			'Drizzle',
			'Shadcn UI',
			'Zod',
			'Framer Motion',
			'Turbopack',
		],
		demo: 'https://quizletclone.vercel.app/',
		code: 'https://github.com/fkozlicki/quizlet-clone',
	},
	{
		id: 4,
		name: 'Reddit Clone',
		description:
			'Clone of Reddit platform with built with Next 13. Sign in and create your own communities, post and comments.',
		stack: [
			'Next.js',
			'Typescript',
			'GraphQL',
			'Pothos GraphQL',
			'Apollo Client',
			'Prisma',
			'PostgreSQL',
			'Tailwind',
			'Next-Auth',
			'Storybook',
		],
		demo: 'https://redditv3.vercel.app/',
		code: 'https://github.com/fkozlicki/reddit-clone',
	},
];
