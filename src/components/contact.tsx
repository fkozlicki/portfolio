import { icons } from '@/components/icons';

export default function Contact() {
	return (
		<div className="py-16 md:py-36 px-4 md:px-8 lg:h-[90vh] flex items-end">
			<div className="max-w-7xl mx-auto w-full">
				<p className="text-[32px] leading-[32px] md:text-[52px] md:leading-[52px] font-integral font-extrabold tracking-wide">
					Contact
				</p>
				<div className="flex flex-col mt-8 gap-4 w-fit">
					{links.map((link) => (
						<a
							key={link.label}
							href={link.href}
							className="inline-flex items-center gap-2 md:gap-4 hover:underline md:text-xl"
							target="__blank"
						>
							<link.Icon className="size-4 md:size-5" />
							{link.label}
						</a>
					))}
				</div>
			</div>
		</div>
	);
}

const links = [
	{
		Icon: icons.Mail,
		href: 'mailto:filip.kozlickii@gmail.com',
		label: 'filip.kozlickii@gmail.com',
	},
	{
		Icon: icons.Github,
		href: 'https://github.com/fkozlicki',
		label: '@fkozlicki',
	},
	{
		Icon: icons.LinkedIn,
		href: 'https://www.linkedin.com/in/fkozlicki',
		label: '@fkozlicki',
	},
];
