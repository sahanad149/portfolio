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
  username: "Prajwal Mahaveera",
  title: "Hey, I'm Prajwal",
  subTitle: emoji(
    "A Computer Science Graduate Student at Arizona State University passionate about Software Development with experience in building applications with Javascript / AWS and proficiency in Java/C."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1z7oDqWKtvx5biHFJxsLAU8Kuyw5I3YF8/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  gmail: "pmahavee@asu.edu",
  github: "https://github.com/Prajwal-1999-max",
  linkedin: "https://www.linkedin.com/in/prajwal-mahaveera",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "More about me", 
  subTitle: "A Full Stack Developer with goal-driven creative mindset and passion to learn and innovate.",
  skills: [
    emoji(
      "⚡ Currently pursuing Master's in Computer Science at Arizona State University with an experience of 1 year as an Application Development Associate at Accenture and Software Development Intern at Surya Software Pvt Ltd."
    ),
    emoji("⚡ Currently looking for SDE Roles")
    // emoji(
    //   "⚡ Building custom Docker images and dockerfiles"
    // )
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
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
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
        "CSE 460: Software Analysis and Development, CSE 463: Intro to Human-Computer Interaction, CSE 512: Distributed Database Systems",
        "CSE 545: Software Security, CSE 535: Mobile Computing, CSE 539: Applied Cryptography",
        "CSE 551: Foundations of Algorithms, CSE 573: Semantic Web Mining, CSE 575: Statistical Machine Learning"
      ]
    },
    {
      schoolName: "RNS Institute of Technology",
      logo: require("./assets/images/RNSITimage.png"),
      subHeader: "Bachelor of Technology in Electronics & Communication Engineering",
      duration: "August 2017 - August 2021",
      desc: "",
      descBullets: [
        " Object-Oriented Programming, Data Structures and Algorithms, Operating System",
        " Database Systems, Machine Learning, Software Engineering"
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
    // {
    //   role: "Software Engineer Intern",
    //   company: "Rocket Central LLC",
    //   companylogo: require("./assets/images/rocket-logo-red.png"),
    //   date: "May 2023 – Present",
    //   desc: "",
    //   descBullets: [
    //     "Maintaining ASU online website supporting 82,000+ students and 300+ degree programs with Vue.js, AWS and Javascript.",
    //     "Building custom Docker images and dockerfiles while handling its orchestration and containerization in AWS services using Terraform"
    //   ]
    // },
    {
      role: "Application Development Associate",
      company: "Accenture",
      companylogo: require("./assets/images/accenture.png"),
      date: "Aug 2021 – May 2022",
      desc: "",
      descBullets: ["Collaborated with Agilent and internal teams to troubleshoot software issues, significantly improving file upload speeds by up to 30%.",
        "Served as primary client liaison for the Openlab application, taking ownership of the application and proactively identifying and debugging core issues to ensure optimal performance and customer satisfaction.",
        "Supported life science applications like Openlab and Empower, clearing approximately 90 software issues and incidents weekly. Leveraged project management software JIRA to track the project's progress and Git for version control to complete it two weeks before the expected duration."
      ]
    },
    {
      role: "Software Development Intern",
      company: "Surya Software Pvt Ltd",
      companylogo: require("./assets/images/SuryaSoft2.png"),
      date: "July 2021 – July 2022",
      desc: "",
      descBullets: [
        "Designed and developed responsive web pages utilizing React.Js library, ChartJs, and FluentUI framework, achieving highly visual and interactive user interfaces that effectively convey complex data and information.",
        "Programmed a dashboard that handles POST requests, handling user concurrency up to 10. Collaborated with a team of five to enhance existing code, integrating new features such as the date and currency selection to boost user engagement and interactivity. Worked closely with team members to identify and resolve bugs and ensure smooth project delivery.",
      ]
    },
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
  subtitle: "Some of my most favorite projects in no particular order",
  projects: [
    {
      image: require("./assets/images/androidsecurity2.png"),
      projectName: "Android Security",
      projectDesc: "Android Studio application incorporating dynamic features and advanced malware detection capabilities to enhance mobile device security.",
      footerLink: [
        // {
        //   name: "Visit repo",
        //   url: "https://github.com/Surya-Narayan/546-lambda"
        // }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/employeeinformation.png"),
      projectName: "Employee Information",
      projectDesc: "An AWS project integration AngularJS with secure user authentication which lets the user store, add and search employee information. ",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: " https://detect-deepfake.web.app/"
        // }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/journalapplication.png"),
      projectName: "Journal Application",
      projectDesc: "an Android application on Android Studio using the MVC (Model-View-Controller) structure to add/modify, store, and share journals.",
      footerLink: [
        // {
        //   name: "Visit repo",
        //   url: "https://github.com/Surya-Narayan/Cloud-Computing/tree/master/CC_0094_0155_0260_1509_Final_Project"
        // }
      ]
    },
    {
      image: require("./assets/images/journalapplication.png"),
      projectName: "Revitalizing PennyJuice: Redesigning a Classic Webpage for Modern Appeal",
      projectDesc: "Led a successful redesign of the PennyJuice website, addressing significant flaws in the original design and incorporating key HCI laws. Resulted in an aesthetically pleasing interface with a cohesive color scheme, improving user experience for ordering cases of juice concentrate.Analyzed user data from 12 participants, achieving a remarkable increase in task satisfaction, as indicated by the average SUS score rising from 34.17 to 84.5 for the redesigned website.",
      footerLink: [
        // {
        //   name: "Visit repo",
        //   url: "https://github.com/Surya-Narayan/Cloud-Computing/tree/master/CC_0094_0155_0260_1509_Final_Project"
        // }
      ]
    },
    {
      image: require("./assets/images/VANET2.png"),
      projectName: "Simulating VANET Routing Protocols",
      projectDesc: "Simulated and analysed Topological and Geographical Vehicular ad hoc Network(VANET) routing protocols over real-world scenarios and Bengaluru locality map",
      footerLink: [
        // {
        //   name: "Visit repo",
        //   url: "https://github.com/Surya-Narayan/Pacman"
        // }
      ]
    },
    // {
    //   image: require("./assets/images/hive-logo.png"),
    //   projectName: "Mini Hive Engine",
    //   projectDesc: "Map-Reduce-based mini SQL Engine on Hadoop supporting SQL queries like select, load, delete, and aggregate functions",
    //   footerLink: [
    //     {
    //       name: "Visit repo",
    //       url: "https://github.com/Surya-Narayan/MiniHiveEngine"
    //     }
    //   ]
    // },
    // {
    //   image: require("./assets/images/spotify-logo.png"),
    //   projectName: "Spotify Clone Website",
    //   projectDesc: "Built a music website to search and play songs, with music recommendation data analysis from spotify dataset",
    //   footerLink: [
    //     {
    //       name: "Visit repo",
    //       url: "https://github.com/ACV11/Spotify-Clone"
    //     }
    //   ]
    // },
    // {
    //   image: require("./assets/images/pokemon-logo.png"),
    //   projectName: "Pokemon generation with color DCGAN",
    //   projectDesc: "Used Pokemon dataset to generate new pokemons with the help of color dcgan",
    //   footerLink: [
    //     {
    //       name: "Visit repo",
    //       url: "https://github.com/ACV11/Spotify-Clone"
    //     }
    //   ]
    // },
    // {
    //   image: require("./assets/images/xbox-logo3.png"),
    //   projectName: "3d Reconstruction of Plant leaves",
    //   projectDesc: "Used Xbox Kinect 360, Meshlab and OpenCV to 3d reconstruct a plant and split leaves to track their measurements",
    //   footerLink: [
    //     {
    //       name: "Visit Demo",
    //       url: "https://www.youtube.com/watch?v=uF8UXjIiV0A"
    //     }
    //   ]
    // },
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
      title: "Arranged and managed Open House Expo",
      subtitle:
        "Successfully organized and oversaw an Open House Project Expo, demonstrating my strong event management skills and ability to coordinate a large-scale event.",
      image: require("./assets/images/eyantra-logo.png"),
      imageAlt: "E-yantra Robotics IIT Bombay",
      footerLink: [
      ]
    },
    // {
    //   title: "Game Oasis Hackathon Winners",
    //   subtitle:
    //     "Led a team of 3 in building co-op game on Unity using layer 2 Matic blockchain network.",
    //   image: require("./assets/images/matic-logo4.png"),
    //   imageAlt: "Game Oasis Hackathon",
    //   footerLink: [
    //   ]
    // },
    // {
    //   title: "Intel ADAS Competition Finalists",
    //   subtitle:
    //     "Built a drowsiness detection on drivers trained on ML models",
    //   image: require("./assets/images/intel-logo.png"),
    //   imageAlt: "Intel OpenVino Drowsiness Detection",
    //   footerLink: [
    //   ]
    // },
    // {
    //   title: "ASA DataFest Hackathon Mentor",
    //   subtitle:
    //     "Mentored undergraduate participants in ASA Datafest Hackathon held across multiple colleges in Arizona State ",
    //   image: require("./assets/images/datafest-logo.png"),
    //   imageAlt: "ASA DataFest Hackathon Mentor",
    //   footerLink: [ 
    //   ]
    // },
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
  display: false // Set false to hide this section, defaults to true
};

// mimick achievemnt section again 
// extra-curricular section
const extracurricular = {
  title: emoji("Extra Curricular "),
  subtitle:
    "Clubs, Volunteering and things outside tech",
  achievementsCards: [
    {
      title: "Volunteer for Aikya",
      subtitle:
        "Served food and taught government primary school kids under Akshaya Patra Foundation",
      image: require("./assets/images/aikya-logo-1.png"),
      imageAlt: "Akshaya Patra Foundation logo",
      footerLink: [ {
        name: "NGO Website",
        url: "https://www.linkedin.com/company/the-akshaya-patra-foundation/"
      }
      ]
    },

    {
      title: "PES DebSoc Member",
      subtitle:
        "Member of PES University Debate Society",
      image: require("./assets/images/pes-debsoc-logo.jpeg"),
      imageAlt: "PES Debsoc Logo",
      footerLink: [ {
        name: "About DebSoc",
        url: "https://clubs.pes.edu/debate-society"
      }
      ]
    },

    {
      title: "Aatmatrisha-19 Fest Organizer",
      subtitle:
        "Organizer for Aatmatrisha fest, the annual techno-cultural fest of PES University.",
      image: require("./assets/images/pes-debsoc-logo.jpeg"),
      imageAlt: "PES Debsoc Logo",
      footerLink: [ {
        name: "About fest",
        url: "https://clubs.pes.edu/aatmatrisha"
      }
      ]
    },

  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Papers",
  subtitle:
    "Here are some reseach papers I presented",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      //url: "https://ieeexplore.ieee.org/document/9913572",
      title: "Performance Analysis of GPSR Protocols",
      description:
        "National conference on “Emerging Trends in Engineering, Science and Technology (NCETEST-4)-  Jul 2, 2021"
    },
    {
      url: "https://www.ijitee.org/wp-content/uploads/papers/v9i2S/B12251292S19.pdf",
      title: "PATIENT MONITORING SYSTEM",
      description:
        "The International Journal of Innovative Technology and Exploring Engineering (IJITEE) - Dec 10, 2019"
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
  number: "+1 (602) 815-0973",
  email_address: "pmahavee@asu.edu"
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
