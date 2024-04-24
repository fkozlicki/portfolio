import gsap from 'gsap';
import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface ProjectProps {
	name: string;
	description: string;
	tags: string[];
	index: number;
	demo: string;
	code: string;
}

const Project = ({
	name,
	description,
	tags,
	index,
	demo,
	code,
}: ProjectProps) => {
	const [{ x, y }, setMouse] = useState({
		x: 0,
		y: 0,
	});
	const [visible, setVisible] = useState(false);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const tagsString = tags.reduce((acc, tag, index) => {
		acc += tag;
		if (index + 1 < tags.length) acc += ' • ';
		return acc;
	}, '');
	const numberPosition = index % 2 === 0 ? 'left' : 'right';

	useEffect(() => {
		gsap.from(wrapperRef.current, {
			scrollTrigger: {
				trigger: wrapperRef.current,
			},
			xPercent: index % 2 === 0 ? 100 : -100,
			opacity: 0,
			duration: 0.75,
			lazy: false,
		});
	}, [index]);

	const hoverProject = (event: MouseEvent) => {
		const { clientX, clientY } = event;
		const { left, top } = (
			event.currentTarget as HTMLDivElement
		).getBoundingClientRect();
		const x = clientX - left - 150;
		const y = clientY - top - 150;
		setMouse({ x, y });
	};

	return (
		<ProjectWrapper ref={wrapperRef}>
			<Number position={numberPosition}>0{index + 1}</Number>
			<ContentWrapper>
				<MouseArea
					onMouseMove={hoverProject}
					onMouseEnter={() => setVisible(true)}
					onMouseLeave={() => setVisible(false)}
				>
					<NameWrapper>
						<ProjectName>{name}</ProjectName>
						<LinksWrapper>
							<ProjectLink href={code} target="_blank">
								Code
							</ProjectLink>
							<ProjectLink href={demo} target="_blank">
								Demo
							</ProjectLink>
						</LinksWrapper>
					</NameWrapper>
					<ProjectDescription>{description}</ProjectDescription>
					<ProjectTags>{tagsString}</ProjectTags>
					<Shine
						style={{
							transform: `translate(${x}px, ${y}px)`,
							opacity: visible ? 1 : 0,
						}}
					/>
				</MouseArea>
			</ContentWrapper>
		</ProjectWrapper>
	);
};

export default Project;

const ContentWrapper = styled.div`
	overflow: hidden;
`;

const ProjectWrapper = styled.div`
	position: relative;

	grid-column: 1 / -1;

	@media screen and (min-width: 768px) {
		&:nth-child(2n + 1) {
			grid-column: 4 / span 9;
		}
		&:nth-child(2n) {
			grid-column: 1 / span 9;
		}
	}
`;

const Number = styled.div<{ position: 'left' | 'right' }>`
	position: absolute;
	font-weight: 600;
	top: 0;
	${({ position }) => (position === 'left' ? 'left: 0' : 'right: 0')};
	font-size: 6vw;
	z-index: 1;
	transform: translate(
		${({ position }) => (position === 'left' ? '-70%' : '70%')},
		-50%
	);
`;

const MouseArea = styled.div`
	background: #030708a2;
	position: relative;
	z-index: 10;
	border: 1px solid #ffffff14;
	backdrop-filter: blur(5px);

	padding: 16px;

	@media screen and (min-width: 768px) {
		padding: 32px;
	}

	@media screen and (min-width: 1024px) {
		padding: 64px;
	}
`;

const ProjectLink = styled.a`
	color: #b1b1b1;
	text-decoration: none;
	font-weight: 300;

	font-size: 14px;
	@media screen and (min-width: 768px) {
		font-size: 16px;
	}
	@media screen and (min-width: 1024px) {
		font-size: 18px;
	}

	&:hover {
		color: white;
	}
`;

const LinksWrapper = styled.div`
	display: flex;
	gap: 16px;
`;

const NameWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 10px;
`;

const Shine = styled.div`
	width: 300px;
	height: 300px;
	background: #17a123;
	filter: blur(100px);
	border-radius: 300px;
	transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1);
	mix-blend-mode: soft-light;
	will-change: transform;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	pointer-events: none;
`;

const ProjectName = styled.h4`
	font-weight: 500;
	font-size: 20px;

	@media screen and (min-width: 768px) {
		font-size: 28px;
	}
	@media screen and (min-width: 1024px) {
		font-size: 32px;
	}
`;

const ProjectDescription = styled.p`
	color: #ffffffb0;
	margin-block: 16px;

	@media screen and (min-width: 768px) {
		font-size: 20px;
	}
	@media screen and (min-width: 1024px) {
		font-size: 24px;
	}
`;

const ProjectTags = styled.div`
	color: #ffffff88;
	font-size: 14px;

	@media screen and (min-width: 768px) {
		font-size: 16px;
	}
	@media screen and (min-width: 1024px) {
		font-size: 18px;
	}
`;
