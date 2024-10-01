import cpc2 from "./assets/cpc2.jpg";
import cpc3 from "./assets/cpc3.jpg";
import cpc6 from "./assets/cpc6.jpg";

import ctf1 from "./assets/ctf1.jpg";
import ctf4 from "./assets/ctf4.jpg";
import ctf5 from "./assets/ctf5.jpg";
import ctf6 from "./assets/ctf6.jpeg";
import ctf7 from "./assets/ctf7.png";

import robotics2 from "./assets/robotics2.jpg";
import robotics3 from "./assets/robotics3.jpg";
import robotics4 from "./assets/robotics4.jpg";
import robotics5 from "./assets/robotics5.jpg";
import robotics6 from "./assets/robotics6.jpg";

import cluedo from './assets/clue.jpg'
import rise from './assets/rise.png'
import cheese from './assets/cheese.png'
import stonks from './assets/stonks.png'
import { logo } from './Images'
import { ensi } from './Images'
import { robot } from './Images'
import { sniffer } from './Images'
import { station } from './Images'

const cpc = [
    {
        image: cpc3,
        description: "Our first experience in a competitive programming competition, the ENSI Programming Challenge 2.0, where we placed 5th out of 32 teams."
    },
    {
        image: cpc2,
        description: "My team and I at the ENSI Programming Challenge 3.0, where we ranked in the top 10 out of 60 teams."
    },
    {
        image: cpc6,
        description: "Participating in a small competitive programming competition as part of a hackathon."
    },
];

const robotics = [
    {
        image: robotics4,
        description: "My first-ever line-following robot."
    },
    {
        image: robotics2,
        description: "The second iteration of my line-following robot."
    },
    {
        image: robotics3,
        description: "A robot smiling :)"
    },
    {
        image: robotics5,
        description: "The third edition of my line-following robot."
    },
    {
        image: robotics6,
        description: "A CAD design for a drone."
    },
];

const ctf = [
    {
        image: ctf1,
        description: "My team and I at the ENIT Get The Flag CTF—my first CTF competition."
    },
    {
        image: ctf4,
        description: "Our participation in the SupCom Hackfest Finals in 2023."
    },
    {
        image: ctf5,
        description: "Competing in the SupCom Hackfest Finals in 2024 with my team."
    },
    {
        image: ctf6,
        description: "Presenting my RAT (Remote Access Tool) project."
    },
    {
        image: ctf7,
        description: "Working on an embedded systems task during a CTF. :P"
    },
];


const projects = [
    {
        image: logo,
        name: "Brika",
        url: "https://github.com/riahifiras/recipe-website",
        description: "A social network enabling users to share their favorite recipes, fostering a community of food enthusiasts."
    },
    {
        image: rise,
        name: "Rise Stock Manager",
        url: "https://github.com/riahifiras/stock-managment-app",
        description: "An intricately designed desktop application for stock management, tailored for a company specializing in the field of hydraulics and environmental solutions."
    },
    {
        image: cluedo,
        name: "Cluedo",
        url: "https://github.com/riahifiras/cluedo",
        description: "A digital adaptation of the beloved board game, Cluedo, bringing its classic mystery-solving experience to the digital realm."
    },
    {
        image: stonks,
        name: "Stonks",
        url: "https://github.com/MedAziz218/Stock-Manager",
        description: "A command-line interface application with powerful features for efficient stock management within stores, boasting an intuitive design."
    },
    {
        image: robot,
        name: "Line follower robot",
        url: "https://github.com/MedAziz218/Line-Follower-Arduino-code",
        description: "A precision-engineered robot capable of flawlessly tracking black lines on white surfaces, offering remarkable speed and accuracy."
    },
    {
        image: cheese,
        name: "Jben Overdose",
        url: "https://github.com/riahifiras/Jben-overdose",
        description: "An online platform catering to cheesecake enthusiasts, featuring an extensive assortment of meticulously curated cheesecakes for purchase and review."
    },
    {
        image: ensi,
        name: "Madara in Manouba",
        url: "https://github.com/riahifiras/Madara-in-Manouba",
        description: "Embark on an epic adventure as Uchiha Madara in the mystical land of Manouba! This Unity game offers an immersive journey through the enigmatic landscapes of Tunisia's Manouba state, inspired by the Naruto universe."
    },
    {
        image: station,
        name: "Game Station",
        url: "https://github.com/riahifiras/Game-station",
        description: "Indulge in nostalgia with this collection of four classic games written in C using the SFML library. Rediscover the joy of Snake, Minesweeper, 2048, and Sudoku, all bundled into one convenient package."
    },
    {
        image: sniffer,
        name: "Packet Sniffer",
        url: "https://github.com/riahifiras/Packet-sniffer",
        description: "A Python application empowering users to intercept and analyze network packets traversing through their network infrastructure."
    },
    {
        image: sniffer,
        name: "Packet Sniffer",
        url: "https://github.com/riahifiras/Packet-sniffer",
        description: "A Python application empowering users to intercept and analyze network packets traversing through their network infrastructure."
    },
];

const blogs = [
    {
      id: 1,
      title: "The Future of AI in Software Development",
      excerpt: "Exploring how artificial intelligence is reshaping the landscape of coding and software engineering.",
      date: "2023-09-30",
      readTime: "5 min read",
      category: "Technology"
    },
    {
      id: 2,
      title: "Building Scalable Web Applications with Next.js",
      excerpt: "A deep dive into the benefits of using Next.js for creating performant and scalable web applications.",
      date: "2023-09-25",
      readTime: "7 min read",
      category: "Web Development"
    },
    {
      id: 3,
      title: "The Importance of Cybersecurity in Modern Software",
      excerpt: "Discussing the critical role of cybersecurity in today's software development practices.",
      date: "2023-09-20",
      readTime: "6 min read",
      category: "Security"
    },
    {
      id: 4,
      title: "The Future of AI in Software Development",
      excerpt: "Exploring how artificial intelligence is reshaping the landscape of coding and software engineering.",
      date: "2023-09-30",
      readTime: "5 min read",
      category: "Technology"
    },
    {
      id: 5,
      title: "Building Scalable Web Applications with Next.js",
      excerpt: "A deep dive into the benefits of using Next.js for creating performant and scalable web applications.",
      date: "2023-09-25",
      readTime: "7 min read",
      category: "Web Development"
    },
    {
      id: 6,
      title: "The Importance of Cybersecurity in Modern Software",
      excerpt: "Discussing the critical role of cybersecurity in today's software development practices.",
      date: "2023-09-20",
      readTime: "6 min read",
      category: "Security"
    }
  ]
  


export { ctf, cpc, robotics, projects, blogs };