import Job from './job';

export default function Experience() {
	return (
		<div className="py-16 md:py-36 px-4 md:px-8 experience lg:h-screen">
			<div className="max-w-7xl mx-auto w-full">
				<p className="text-[32px] leading-[32px] md:text-[52px] md:leading-[52px] font-integral font-extrabold tracking-wide">
					Experience
				</p>
				<div className="flex flex-col mt-8 md:mt-14">
					{jobs.map((job) => (
						<Job key={job.id} {...job} />
					))}
				</div>
			</div>
		</div>
	);
}

const jobs = [
	{
		id: 1,
		position: {
			name: 'Web developer',
			description:
				'Worked on SCRUM management application built with Ruby on Rails and React',
		},
		company: { name: 'GDSoft', site: 'https://www.gdsoft.info' },
		stack: ['React', 'Ruby on Rails', 'Sass', 'Redux'],
		year: '2023',
	},
	{
		id: 2,
		position: {
			name: 'Frontend Developer',
			description: "Developed company's website",
		},
		company: {
			name: 'DreamStormStudios',
			site: 'https://dreamstormstudios.com/',
		},
		stack: ['Gatsby', 'React', 'Typescript', 'Styled Components'],
		year: '2022',
	},
];
