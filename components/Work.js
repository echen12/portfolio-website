import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLocation, faLocationDot, faLocationPin, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import workImage from '../config/univerus.png';


export const Skills = ({ title, cards }) => {
	return (
		<div id="skills" className="bg-secondary py-5 px-5">
			<h1 className="text-primary fw-bold">{title}</h1>
			<div className="container d-flex justify-content-center">
				<div className="">
					<div className="">
						{cards.map((value, index) => (
							<Card
								key={index}
								title={value.title}
								description={value.description}
								link={value.link}
								icons={value.icons} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export const Projects = ({ title, cards }) => {
	return (
		<div id="projects" className="bg-primary py-5 px-5">
			<div className="container">
				<h1 className="text-light fw-bold">Projects</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							icons={value.icons} />
					))}
				</div>
				{/* <div className="text-center">
					<button type="button" className="btn btn-outline-light">See More</button>
				</div> */}
			</div>
		</div>
	);
}

export const Card = ({ title, description, icons }) => {
	return (
		<div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "20rem" }}>
			<h4 className="text-primary">{title}</h4>
			<p className="text-dark">{description}</p>
			<div className="text-end">
				{icons && icons.map((value, index) => (
					<Link key={index} href={value.link}>
						<a target="_blank" rel="noreferrer">
							<FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="2x" />
						</a>
					</Link>
				))}
			</div>
		</div>
	);
}


export const Work = ({ title, cards }) => {
	return (
		<div id="work" className="bg-secondary py-5 px-5">
			<div className='container'>
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="container d-flex justify-content-center">
					<div className="">
						<div className="">
							{cards.map((value, index) => (
								<WorkCard
									key={index}
									workName={value.workName}
									position={value.position}
									duration={value.duration}
									location={value.location}
									description={value.description}
									workLink={value.workLink}
									companyLogo={value.companyLogo}
									icons={value.icons}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export const WorkCard = ({ workName, position, duration, location, description, workLink, companyLogo }) => {
	return (
		<div className="d-flex justify-content-center mt-5">
			<div className='w-auto text-center'>
				<div className='w-auto text-center mb-2'>
					<Image
						src={companyLogo}
						height={200}
						width={300}
					/>
				</div>
				<div className='w-auto'>
					<a href={workLink}>
						<h4 className="text-primary">{workName}</h4>
					</a>
					<div className='d-flex gap-2 justify-content-center'>
						<p className="text-dark">{position}</p>
						<p>||</p>
						<p className="text-dark">{duration}</p>
						<p>||</p>
						<div className='d-flex'>
							<FontAwesomeIcon className="icon-style mt-1 mx-1" icon={faLocationDot} />
							<p>{location}</p>
						</div>
					</div>
					<div>
						<p>{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}