import design1ThumbOne from "../assets/images/design-1/Thumb One.png";
import design1ThumbTwo from "../assets/images/design-1/Thumb Two.png";
import code1Image1 from "../assets/images/code-1/code1-1.png";
import code1Image2 from "../assets/images/code-1/code1-2.png";
import code1Image3 from "../assets/images/code-1/code1-3.png";
import code2Image from "../assets/images/code-2/image.png";
import school1_1 from "../assets/images/school-1/_1.png";
import school1_2 from "../assets/images/school-1/1.png";
import school1_3 from "../assets/images/school-1/2.png";
import school1_4 from "../assets/images/school-1/3.png";
import school1_5 from "../assets/images/school-1/4.png";
import school1_6 from "../assets/images/school-1/5.png";
import school1_7 from "../assets/images/school-1/6.png";
import school1_8 from "../assets/images/school-1/7.png";
import school1_9 from "../assets/images/school-1/8.png";
import school1_10 from "../assets/images/school-1/9.png";
import school1_11 from "../assets/images/school-1/10.png";

export const designProjects = [
  {
    id: "design-1",
    title: "Thumbnails for YouTube Channel",
    description:
      "Collaborated with content creator @joelatwar to get source material to then use in Photoshop and firefly to create thumbnails for his YouTube channel.",
    images: [design1ThumbOne, design1ThumbTwo],
    link: "",
    tags: ["Branding", "Logo", "Affinity Photo"],
    date: "2025-09",
  },
];

export const codeProjects = [
  {
    id: "code-1",
    title: "Portfolio Website",
    description:
      "This website! Built with React and Vite, deployed on Cloudflare Pages. A minimalist dark-themed single-page portfolio.",
    images: [code1Image1, code1Image2, code1Image3],
    link: "https://github.com/Diego-Guerra/diegoguerra.net",
    tags: ["React", "Vite", "CSS"],
    date: "2026-02",
  },
  {
    id: "code-2",
    title: "Video Game",
    description:
      "Using GameMaker Studio 2, I created a rudamentary isometric dungeon crawler with a simplke ai for the enemies to target and track the player at a certain range, a movement system for the player, and a basic health and damage system for both the player and enemies.",
    images: [code2Image],
    link: "",
    tags: ["GameMakerStudio", "C#", "Procreate"],
    date: "2026-02",
  },
];

export const schoolProjects = [
  {
    id: "school-1",
    title: "Yearbook 2024",
    description:
      "Using Affinity Photo and Canva I designed the cover and many of the assets as well as ~70% of the pages for the 2024 yearbook, which was distributed to all students and staff at my Summit Olympus High School.", 
    images: [school1_1, school1_2, school1_3, school1_4, school1_5, school1_6, school1_7, school1_8, school1_9, school1_10, school1_11],
    link: "",
    tags: ["Digital Design", "Afinity Photo"],
    date: "2025-04",
  },
];

export const workProjects = [
  {
    id: "work-1",
    title: "Aviron Invoice Tracker",
    description:
      "As a Software Consultant Intern at Aviron Labs during the summer of 2025 Contributed to full-stack web application development using .NET, C#, and React to deliver scalable solutions for client projects, tracked clients, time, date and projects, using Microsoft Visual Studio and github copilot.",
    images: [],
    link: "",
    tags: [".NET", "Internship"],
    date: "2025-06 – 2025-08"
  },
];
