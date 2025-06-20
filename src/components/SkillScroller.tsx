import React from "react";
import { motion, useAnimationFrame } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Framer Motion",
  "GraphQL",
  "Redux",
  "Jest",
  "Docker",
  "Figma",
];

const SCROLL_SPEED = 60; // px per second

export default function SkillScroller() {
  const [x, setX] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  useAnimationFrame((t, delta) => {
    if (!contentRef.current || !containerRef.current) return;
    const contentWidth = contentRef.current.offsetWidth;
    const containerWidth = containerRef.current.offsetWidth;
    setX((prev) => {
      let next = prev + (SCROLL_SPEED * delta) / 1000;
      if (next >= contentWidth) next -= contentWidth;
      return next;
    });
  });

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden bg-black py-12"
      style={{ whiteSpace: "nowrap" }}
    >
      <motion.div
        ref={contentRef}
        className="inline-flex"
        style={{ x: x * -1 }}
      >
        {[...skills, ...skills].map((skill, i) => (
          <span
            key={i}
            className="mx-14 text-[#6D6D6D] text-5xl font-semibold select-none transition-colors duration-200 hover:text-[#DEDADE]"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
