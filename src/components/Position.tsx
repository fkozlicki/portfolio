import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface PositionProps {
	startYear: number;
	endYear?: number;
	position: string;
	company: string;
	description: string;
	tags: string[];
}

const Position = ({
	startYear,
	endYear,
	position,
	company,
	description,
	tags,
}: PositionProps) => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const circleRef = useRef<HTMLDivElement>(null);
	const lineRef = useRef<HTMLDivElement>(null);
	const positionRef = useRef<HTMLDivElement>(null);
	const descriptionRef = useRef<HTMLDivElement>(null);
	const tagsRef = useRef<HTMLDivElement>(null);
	const yearsRef = useRef<HTMLDivElement>(null);
	const tagsString = tags.reduce((acc, tag, index) => {
		acc += tag;
		if (index + 1 < tags.length) acc += ' • ';
		return acc;
	}, '');

	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: wrapperRef.current,
				start: 'top center',
			},
		});

		tl.from(circleRef.current, {
			duration: 0.3,
			scale: 0,
		})
			.from(lineRef.current, {
				scaleY: 0,
				transformOrigin: 'top',
				duration: 0.9,
			})
			.from(
				[positionRef.current, yearsRef.current],
				{
					opacity: 0,
					duration: 0.3,
				},
				'-=0.9'
			)
			.from(
				descriptionRef.current,
				{
					opacity: 0,
					duration: 0.3,
				},
				'-=0.6'
			)
			.from(
				tagsRef.current,
				{
					opacity: 0,
					duration: 0.3,
				},
				'-=0.3'
			);
	}, []);

	return (
		<PositionWrapper ref={wrapperRef}>
			<Years ref={yearsRef}>
				{startYear}
				{endYear && `- ${endYear}`}
			</Years>
			<LineWrapper>
				<Circle ref={circleRef} />
				<Line ref={lineRef}></Line>
			</LineWrapper>
			<ContentWrapper>
				<PositionName ref={positionRef}>
					{position} - {company}
				</PositionName>
				<Description ref={descriptionRef}>{description}</Description>
				<Tags ref={tagsRef}>{tagsString}</Tags>
			</ContentWrapper>
		</PositionWrapper>
	);
};

export default Position;

const PositionWrapper = styled.div`
	display: flex;
	gap: 24px;
`;

const Years = styled.div`
	font-size: 24px;

	@media screen and (min-width: 768px) {
		font-size: 28px;
	}
	@media screen and (min-width: 1024px) {
		font-size: 32px;
	}
`;

const LineWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Circle = styled.div`
	width: 20px;
	height: 20px;
	background: white;
	border-radius: 100%;
`;

const Line = styled.div`
	width: 4px;
	height: 100%;
	background: white;
`;

const ContentWrapper = styled.div`
	padding-bottom: 96px;
`;

const PositionName = styled.h3`
	font-weight: 500;
	font-size: 24px;

	@media screen and (min-width: 768px) {
		font-size: 28px;
	}
	@media screen and (min-width: 1024px) {
		font-size: 32px;
	}
`;

const Description = styled.p`
	color: #ffffffb0;
	margin-block: 16px;

	@media screen and (min-width: 768px) {
		font-size: 20px;
	}
	@media screen and (min-width: 1024px) {
		font-size: 24px;
	}
`;

const Tags = styled.div`
	color: #ffffff88;

	font-size: 14px;
	@media screen and (min-width: 768px) {
		font-size: 16px;
	}
	@media screen and (min-width: 1024px) {
		font-size: 18px;
	}
`;
