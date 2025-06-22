import React from "react";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaHtml5, FaJs, FaNodeJs, FaGitAlt, FaSass, FaPython, FaDatabase } from "react-icons/fa";

const skills = [
	{ name: "CSS", icon: <FaCss3Alt className="text-4xl" />, rating: 8 },
	{ name: "Tailwind", icon: <FaReact className="text-4xl" />, rating: 9 },
	{ name: "ASP.NET", icon: <AiOutlineDotNet className="text-4xl" />, rating: 6 },
	{ name: "HTML", icon: <FaHtml5 className="text-4xl" />, rating: 10 },
	{ name: "JavaScript", icon: <FaJs className="text-4xl" />, rating: 9 },
	{ name: "Node.js", icon: <FaNodeJs className="text-4xl" />, rating: 7 },
	{ name: "Git", icon: <FaGitAlt className="text-4xl" />, rating: 8 },
	{ name: "Sass", icon: <FaSass className="text-4xl" />, rating: 7 },
	{ name: "Python", icon: <FaPython className="text-4xl" />, rating: 6 },
	{ name: "SQL", icon: <FaDatabase className="text-4xl" />, rating: 7 },
];

export default function MySkillsSection() {
	return (
		<section className="w-full h-screen bg-black flex flex-col">
			<div className="flex flex-row items-end justify-center w-full pt-16 pb-12 gap-8">
				<h1 className="text-[5vw] font-extrabold text-white leading-none text-center">My Skills</h1>
				{/* <GoArrowDownRight className="text-[7vw] text-gray-700 transition-transform duration-300" /> */}
			</div>
			<div className="flex-1 flex flex-col gap-0 w-full">
				{Array.from({ length: 5 }).map((_, rowIdx) => {
					const left = skills[rowIdx * 2];
					const right = skills[rowIdx * 2 + 1];
					return (
						<React.Fragment key={rowIdx}>
							<div className="w-full flex justify-center">
								<div className="w-[70%] flex items-center justify-between py-8">
									{/* Left Skill */}
									<div className="flex items-center min-w-[320px] gap-6">
										{left.icon}
										<span className="text-1xl text-white font-bold min-w-[110px]">{left.name}</span>
										<div className="flex gap-4 ml-6 min-w-[180px]">
											{Array.from({ length: 10 }).map((_, i) => (
												<span
													key={i}
													className={`w-3 h-3 rounded-full ${i < left.rating ? "bg-[#D018B7]" : "bg-[#460F3F]"} block`}
												/>
											))}
										</div>
									</div>
									{/* Right Skill */}
									<div className="flex items-center min-w-[320px] gap-6">
										{right.icon}
										<span className="text-1xl text-white font-bold min-w-[110px]">{right.name}</span>
										<div className="flex gap-4 ml-6 min-w-[180px]">
											{Array.from({ length: 10 }).map((_, i) => (
												<span
													key={i}
													className={`w-3 h-3 rounded-full ${i < right.rating ? "bg-[#D018B7]" : "bg-[#460F3F]"} block`}
												/>
											))}
										</div>
									</div>
								</div>
							</div>
							{rowIdx < 5 && (
								<div className="w-full flex justify-center">
									<div className="w-[100%] border-b border-gray-700" />
								</div>
							)}
						</React.Fragment>
					);
				})}
			</div>
		</section>
	);
}
