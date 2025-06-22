import React, { useState } from "react";
import GradientBgButton from "@/components/reusables/gradient-bg-button";

const TABS = [
  "IOS Development",
  "Website Development",
  "Android Development",
  "Backend Development",
  "Webflow Development",
];

const PROJECTS = {
  "IOS Development": [
    {
      name: "iOS App One",
      date: "2024-01-10",
      image: "https://img.freepik.com/premium-photo/computer-screen-with-word-all-it_1084438-15347.jpg",
      url: "https://apple.com",
    },
    {
      name: "iOS App Two",
      date: "2024-03-15",
      image: "https://img.freepik.com/premium-photo/computer-screen-with-word-all-it_1084438-15347.jpg",
      url: "https://apple.com",
    },
  ],
  "Website Development": [
    {
      name: "Portfolio Site",
      date: "2023-11-20",
      image: "https://img.freepik.com/premium-photo/computer-screen-with-word-all-it_1084438-15347.jpg",
      url: "https://vercel.com",
    },
    {
      name: "E-Commerce",
      date: "2024-02-05",
      image: "https://img.freepik.com/premium-photo/computer-screen-with-word-all-it_1084438-15347.jpg",
      url: "https://vercel.com",
    },
  ],
  "Android Development": [
    {
      name: "Android App",
      date: "2024-04-01",
      image: "https://img.freepik.com/premium-photo/computer-screen-with-word-all-it_1084438-15347.jpg",
      url: "https://android.com",
    },
  ],
  "Backend Development": [
    {
      name: "API Server",
      date: "2024-05-10",
      image: "https://img.freepik.com/premium-photo/computer-screen-with-word-all-it_1084438-15347.jpg",
      url: "https://nodejs.org",
    },
  ],
  "Webflow Development": [
    {
      name: "Webflow Landing",
      date: "2024-06-01",
      image: "https://img.freepik.com/premium-photo/computer-screen-with-word-all-it_1084438-15347.jpg",
      url: "https://webflow.com",
    },
  ],
};

export default function MyProjectsSection() {
  const [selectedTab, setSelectedTab] = useState<keyof typeof PROJECTS>(
    TABS[0] as keyof typeof PROJECTS
  );
  const projects = PROJECTS[selectedTab] || [];

  return (
    <section className="w-full py-16 bg-black">
      <h2 className="text-7xl font-extrabold text-white text-center mb-12">
        My Projects
      </h2>
      {/* Tabs */}
      <div className="w-full max-w-5xl mx-auto">
        <div className="border-t border-b border-gray-700 flex flex-wrap">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`flex-1 min-w-[180px] px-4 py-4 text-lg font-semibold text-center border-x-0 border-t border-b border-gray-700 transition-colors duration-200
                ${
                  selectedTab === tab
                    ? "text-[#D018B7] bg-black"
                    : "text-gray-300 bg-black hover:text-white"
                }
              `}
              style={{
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderStyle: "solid",
              }}
              onClick={() => setSelectedTab(tab as keyof typeof PROJECTS)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {/* Projects Grid */}
      <div className="w-full max-w-5xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <div key={idx} className="relative flex flex-col items-center group">
            <span className="absolute top-2 left-2 text-xs text-gray-400 bg-black bg-opacity-60 px-2 py-1 rounded-full z-10">
              {project.date}
            </span>
            <div
              className="relative w-full flex flex-col items-center"
              style={{ aspectRatio: "1/1" }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center"
              >
                <div className="relative w-[80%] aspect-square rounded-full overflow-hidden shadow-lg">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover rounded-full transition-all duration-300 group-hover:brightness-100 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-0">
                    <span className="text-white text-xl font-bold text-center px-2">
                      {project.name}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* See All Projects Button */}
      <div className="mt-16 flex justify-center">
        <GradientBgButton text="SEE ALL PROJECTS" onClick={() => {}} />
      </div>
    </section>
  );
}
