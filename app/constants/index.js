

const technologies = [
  {
    name: "HTML 5",
    icon: './tech/html.png',
  },
  {
    name: "CSS 3",
    icon: './tech/css.png',
  },
  {
    name: "Tailwind CSS",
    icon: './tech/tailwind.png',
  },
  {
    name: "JavaScript",
    icon: './tech/javascript.png',
  },
  {
    name: "TypeScript",
    icon: './tech/typescript.png',
  },
  {
    name: "Next JS",
    icon: './tech/next-js.png',
  },
  {
    name: "React JS",
    icon: './tech/reactjs.png',
  },
  {
    name: "Python",
    icon: './tech/python.png',
  },


  {
    name: "Node JS",
    icon: './tech/nodejs.png',
  },
  {
    name: "Loopback 4",
    icon: './tech/loopback.png',
  },
  {
    name: "MongoDB",
    icon: './tech/mongodb.png',
  },
  {
    name: "MySql",
    icon: './tech/mysql.png',
  },
  {
    name: "Prisma",
    icon: './tech/prisma.png',
  },

  {
    name: "git",
    icon: './tech/git.png',
  },

  {
    name: "docker",
    icon: './tech/docker.png',
  },
];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Construction based e-commerce Website with Mobile App",
    description:
      "I completed my second client project for a startup construction e-commerce website specializing in wholesale home materials. This website primarily deals with raw materials for homes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: './projects/const.png',
    source_code_link: "https://play.google.com/store/apps/details?id=com.ketoo.ketooconstructions&hl=en-IN",
  },
  {
    name: "Vegetables Fruits Online e-commerce Website with Mobile App",
    description:
      "I completed my first client project for a startup e-commerce website specializing in wholesale vegetables and fruits. This website primarily serves vegetables and fruit stores.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: './projects/whole.png',
    source_code_link: "https://play.google.com/store/apps/details?id=com.nature.naturezon&hl=en-IN",
  },
  {
    name: "Expense Voice Powered Website",
    description:
      "This website offers two options for adding expenses: voice recording or typing. While it is a real-time project, I am developing it solely for educational purposes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: './projects/expanse.png',
    source_code_link: "https://expanse-managing.netlify.app/",
  },
  {
    name: "Covid-19 Live Tracker Website",
    description:
      "This website now days very usefull for covid-19 situation it will help you live update for all country situations and you can easly track for your country situations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: './projects/covid.png',
    source_code_link: "https://corona-virus-live-tracker.netlify.app/",
  },

];

export { technologies, projects };
