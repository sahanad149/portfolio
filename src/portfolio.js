/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Suryanarayan Nagendra",
  title: "Hey, I'm Surya",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having experience in building applications with Python / Javascript / AWS and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/12pIkcbXphMAYe4j083043eakK6-X080KEZ9kgGvd3m0/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Surya-Narayan",
  linkedin: "https://www.linkedin.com/in/suryanarayan01/",
  gmail: "surya.narayan@asu.edu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A Full Stack Developer at EdPlus working on Terraform, Docker and AWS services Integration",
  skills: [
    emoji(
      "⚡ Develop Python wrappers and DAGs in airflow application to schedule pipelines"
    ),
    emoji("⚡ Monitor Pipelines/Data/Applications using Prometheus and Splunk"),
    emoji(
      "⚡ Building custom Docker images and dockerfiles"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/asulogo.webp"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - May 2024",
      desc: "",
      descBullets: [
        "CSE 545: Software Security, CSE 573: Semantic Web Mining, CSE 546: Cloud Computing",
        "CSE 572: Data Mining, CSE 579: Knowledge Representation and Reasoning, CSE 575: Statistical Machine Learning"
      ]
    },
    {
      schoolName: "PES University",
      logo: require("./assets/images/pesulogo.jpeg"),
      subHeader: "Bachelor of Technology in Computer Science & Engineering",
      duration: "August 2017 - May 2021",
      desc: "",
      descBullets: [
        " Object Oritented Modelling and Design, Cloud Computing, Unix Shell Programming, Topics in Deep Learning",
        " Data Structures, Operating Systems, Big Data, Social Network Analysis, Software Engineering"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend/Cloud/Python/Docker", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SQLs/Databases/Flink",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend/Networks/R",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Web Assistant",
      company: "EdPlus at ASU",
      companylogo: require("./assets/images/asu-logo-purple.png"),
      date: "Feb 2023 – Present",
      desc: "",
      descBullets: [
        "Maintaining ASU online website supporting 82,000+ students and 300+ degree programs with Vue.js, AWS and Javascript.",
        "Building custom Docker images and dockerfiles while handling its orchestration and containerization in AWS services using Terraform"
      ]
    },
    {
      role: "Software Developer Engineer",
      company: "Akamai Technolgies",
      companylogo: require("./assets/images/akamai-logo2.png"),
      date: "July 2021 – July 2022",
      desc: "",
      descBullets: [
        "Developed a monitoring system for alerting data entry lags on SingleStore distributed database systems. Used Prometheus and Splunk features to include 2 billion rows of data added every day in alerting.",
        "Programmed exhaustive python wrappers and frameworks on Flink for future scalability and deployment, increasing efficiency by 30x. Helped transfer millions of data rows to SingleStore DBs before sunsetting out Oracle DBs.",
      ]
    },
    {
      role: "Software Developer Intern",
      company: "Akamai Technologies",
      companylogo: require("./assets/images/akamai-logo2.png"),
      date: "Jan 2021 – June 2021",
      desc: "",
      descBullets: [
        "Modified the core open-source Airflow files to include a remedy force element for alerts of all applications scheduled.",
        "Collaborated with a team of 7 to design and build multiple workflows of Flink data pipelines through airflow scheduler.",
        "Overhauled a library of core legacy codes, making them future-proof and reusable for a new product launch."
      ]
    },
    {
      role: "Summer Research Intern",
      company: "IIT-Bombay",
      companylogo: require("./assets/images/iitb-logo.png"),
      date: "May 2019 – July 2019",
      desc: "",
      descBullets: [
        "Reconstructed plants into a 3D model using an Xbox Kinect to track growth non-intrusively and separate the leaves virtually using meshlab.",
        "Automated the entire setup to reduce any human error and save 3+ hours of daily observation and analysis of the plants."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Major ",
  projects: [
    {
      image: require("./assets/images/deepfake-logo.webp"),
      projectName: "Deepfake Detection",
      projectDesc: "Deepfake detection of any kind of media using Deep Learning models. Built a website for anyone to test for deepfakes. ",
      footerLink: [
        {
          name: "Visit Website",
          url: " https://detect-deepfake.web.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/rideshare-logo.png"),
      projectName: "Rideshare on AWS",
      projectDesc: "Built a fault-tolerant, highly available DB as a master-slave architecture on Amazon EC2 instances.",
      footerLink: [
        {
          name: "Visit repo",
          url: "https://github.com/Surya-Narayan/Cloud-Computing/tree/master/CC_0094_0155_0260_1509_Final_Project"
        }
      ]
    },
    {
      image: require("./assets/images/pacman-logo2.png"),
      projectName: "SFLA in Pacman",
      projectDesc: "Shuffled Frog Leaping Algorithm algorithm implemented in Pacman game to catch the player more intelligently",
      footerLink: [
        {
          name: "Visit repo",
          url: "https://github.com/Surya-Narayan/Pacman"
        }
      ]
    },
    {
      image: require("./assets/images/hive-logo.png"),
      projectName: "Mini Hive Engine",
      projectDesc: "Map-Reduce-based mini SQL Engine on Hadoop supporting SQL queries like select, load, delete, and aggregate functions",
      footerLink: [
        {
          name: "Visit repo",
          url: "https://github.com/Surya-Narayan/MiniHiveEngine"
        }
      ]
    },
    {
      image: require("./assets/images/spotify-logo.png"),
      projectName: "Spotify Clone Website",
      projectDesc: "Built a music website to search and play songs, with music recommendation data analysis from spotify dataset",
      footerLink: [
        {
          name: "Visit repo",
          url: "https://github.com/ACV11/Spotify-Clone"
        }
      ]
    },
    {
      image: require("./assets/images/pokemon-logo.png"),
      projectName: "Pokemon generation with color DCGAN",
      projectDesc: "Used Pokemon dataset to generate new pokemons with the help of color dcgan",
      footerLink: [
        {
          name: "Visit repo",
          url: "https://github.com/ACV11/Spotify-Clone"
        }
      ]
    },
    {
      image: require("./assets/images/xbox-logo3.png"),
      projectName: "3d Reconstruction of Plant leaves",
      projectDesc: "Used Xbox Kinect 360, Meshlab and OpenCV to 3d reconstruct a plant and split leaves to track their measurements",
      footerLink: [
        {
          name: "Visit Demo",
          url: "https://www.youtube.com/watch?v=uF8UXjIiV0A"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Participations and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "E-yantra Winners 2019",
      subtitle:
        "E-Yantra Robotics Competition (e-YRC) 2019: 1st Place; part of a team of 4 to build a robot to find 'food' boxes efficiently.",
      image: require("./assets/images/eyantra-logo.png"),
      imageAlt: "E-yantra Robotics IIT Bombay",
      footerLink: [
      ]
    },
    {
      title: "Game Oasis Hackathon Winners",
      subtitle:
        "Led a team of 3 in building co-op game on Unity using layer 2 Matic blockchain network.",
      image: require("./assets/images/matic-logo4.png"),
      imageAlt: "Game Oasis Hackathon",
      footerLink: [
      ]
    },
    {
      title: "Intel ADAS Competition Finalists",
      subtitle:
        "Built a drowsiness detection on drivers trained on ML models",
      image: require("./assets/images/intel-logo.png"),
      imageAlt: "Intel OpenVino Drowsiness Detection",
      footerLink: [
      ]
    },
    {
      title: "ASA DataFest Hackathon Mentor",
      subtitle:
        "Mentored undergraduate participants in ASA Datafest Hackathon held across multiple colleges in Arizona State ",
      image: require("./assets/images/datafest-logo.png"),
      imageAlt: "Intel OpenVino Drowsiness Detection",
      footerLink: [
      ]
    },
    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// mimick achievemnt section again 
// extra-curricular section
const extracurricular = {
  title: emoji("Extra Curricular "),
  subtitle:
    "Outside Work and Projects",
  achievementsCards: [
    {
      title: "ASA DataFest Hackathon Mentor",
      subtitle:
        "Mentored undergraduate participants in ASA Datafest Hackathon held across multiple colleges in Arizona State ",
      image: require("./assets/images/datafest-logo.png"),
      imageAlt: "Intel OpenVino Drowsiness Detection",
      footerLink: [
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Papers",
  subtitle:
    "Research papers published at IEEE",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://ieeexplore.ieee.org/document/9913572",
      title: "Enhancing action maze video games using Shuffled Frog Leaping Algorithm",
      description:
        "IEEE 5th International Conference on Computational Intelligence and Communication Technologies (CCICT) -  Jul 9, 2022"
    },
    {
      url: "https://ieeexplore.ieee.org/document/9825423",
      title: "Detection of Morphed Face, Body, Audio signals using Deep Neural Networks",
      description:
        "IEEE 7th International Conference for Convergence in Technology (I2CT) - Apr 7, 2022"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (602) 815-2050",
  email_address: "surya.narayan@asu.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  extracurricular,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
