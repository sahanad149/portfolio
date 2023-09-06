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
  username: "Sahana Deepak",
  title: "Hey, this is Sahana",
  subTitle: emoji(
    "A Computer Science Graduate Student at California State University, Dominguez Hills - passionate about Software Development with experience in building applications with Javascript and proficiency in Java/C."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1b510YpnK7cXWg_VzSYpNczguPatKRBejJWheMsIV62o/edit", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  gmail: "sdeepak1@toromail.csudh.edu",
  github: "https://github.com/sahanad149",
  linkedin: "https://www.linkedin.com/in/sahana-deepak",
  
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
      "⚡ Currently pursuing Master's in Computer Science at California State University, Dominguez Hills with an experience as Systems Engineer at Infosys. Ltd."
    ),
    emoji("⚡ Currently looking for SDE and Web Developer Roles")
    // emoji(
    //   "⚡ Building custom Docker images and dockerfiles"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    // {
    //   skillName: "android",
    //   fontAwesomeClassname: "fab fa-android"
    // },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-github"
    },
    // {
    //   skillName: "angular",
    //   fontAwesomeClassname: "fab fa-angular"
    // },
    {
      skillName: "typescript",
      fontAwesomeClassname: "fab fa-typescript"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fab fa-nextjs"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "California State University, Dominguez Hills",
      logo: require("./assets/images/DH-logo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - May 2024",
      desc: "",
      descBullets: [
        "CSC 500: Research Methods, CSC 501: Design Analysis and Algorithms, CSC 521: Advanced Programming Languages, CSC 585: Software Quality Assurance",
        "CSC 582: Object oriented Design and Analysis, CSC 583: Software Engineering processes, CSC 595: Data Science",
        "CSC 584: Software Project planning, CSC 581: Advanced Software Engineering, CSC 531: Advanced Software Architecture",
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
      Stack: "SQLs/Databases/Flink",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend/Networks/R",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend/Cloud/Python/Docker", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    // {
    //   role: "Software Consultant Intern",
    //   company: "Local Grown Salads",
    //   companylogo: require("./assets/images/LGS5.png"),
    //   date: "May 2023 – Present",
    //   desc: "",
    //   descBullets: [
    //     "Wrote SQL queries to manage table deletions and modifications within AWS RDS. Collaborated on testing AWS Lambda functions using Postman, leading to a noteworthy enhancement of results by 20%.",
    //     "Collaborated with cross-functional teams to build Dataflow diagrams, designed and executed a team roadmap, leading a group of four to achieve successful results."
    //   ]
    // },
    {
      role: "Systems Engineer",
      company: "Infosys Ltd.",
      companylogo: require("./assets/images/infosys-logo-png.webp"),
      date: "October 2021 – August 2022",
      desc: "",
      descBullets: ["Responsible for the development, testing, implementation, warranty, and support of programs.",
        "Implementing SDLC activities and work with project managers, engineering, and management teams to deliver high-quality software.",
        "Tested various products, including multiple web pages and servers with manual and automated testing and recorded bugs, glitches, and other flaws.",
        "Automated approximately 50 test cases weekly alongside the weekly product testing before every new release."
    ]
    },
    {
      role: "Supplemental Insrtructor",
      company: "Toro Learning and Testing center",
      companylogo: require("./assets/images/tltc-logo.png"),
      date: "September 2022 - December 2022",
      desc: "",
      descBullets: [
        "Assisted Professor(s) in grading and sharing feedback to help improve the class decorum",
        "Assisted students in need by providing help and experience on how to navigate and solve challenges effectively in Calculus, Statistics, Maths and Physics.",
        "Conducted personal 1:1 tutoring sessions to help students who are struggling to cope up.",
        "Conducted group-study sessions with pre-identified students to introduce technical skills and abilities which can lead to increasing technical competence."
      ]
    },
    {
      role: "Workshop Intern",
      company: "Westcal Academy",
      companylogo: require("./assets/images/westcal-logo.png"),
      date: "September 2022 - November 2022",
      desc: "",
      descBullets: [
        "Conducted Personal branding workshop(s) for university graduates in resume building, career orientations and solving academic challenges.",
        "Guided university graduates by addressing the steps needed to be taken to reach their career aspirations.",
        "Conducted seminars on topics such as Workplace ethics and How to face interviews"
      ]
    },
    {
      role: "Writing Associate",
      company: "CSUDH - Writing center",
      companylogo: require("./assets/images/wc-logo.png"),
      date: "August 2023",
      desc: "",
      descBullets: [
        "Conducted individual tutoring sessions both in person and online, providing support for students' writing needs.",
        "Reviewed and offered feedback on papers through asynchronous eTutoring sessions and maintained detailed session notes."
      ]
    }
    // {
    //   role: "Software Development Intern",
    //   company: "Surya Software Pvt Ltd",
    //   companylogo: require("./assets/images/SuryaSoft2.png"),
    //   date: "July 2021 – July 2022",
    //   desc: "",
    //   descBullets: [
    //     "Designed and developed responsive web pages utilizing React.Js library, ChartJs, and FluentUI framework, achieving highly visual and interactive user interfaces that effectively convey complex data and information.",
    //     "Programmed a dashboard that handles POST requests, handling user concurrency up to 10. Collaborated with a team of five to enhance existing code, integrating new features such as the date and currency selection to boost user engagement and interactivity. Worked closely with team members to identify and resolve bugs and ensure smooth project delivery.",
    //   ]
    // },
    // {
    //   role: "GCSE 477: Introduction to Computer-Aided Geometric Design",
    //   company: "Grader",
    //   companylogo: require("./assets/images/ASU.png"),
    //   date: "August 2023 – Present",
    //   desc: "",
    //   descBullets: [
    //     "Assessed assignments, exams, or projects  for CSE477 using Wolfram Mathematica based on established criteria.",
    //     "Provided clear and constructive feedback to students to help them understand their strengths and areas for improvement. Assisted in generating grade reports or summaries for instructors or academic departments."
    //   ]
    // },
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
    // {
    //   image: require("./assets/images/Android.png"),
    //   projectName: "Enhanced Android Security with ML Malware Detection",
    //   projectDesc: "Android Studio application incorporating dynamic features and advanced malware detection capabilities to enhance mobile device security.",
    //   footerLink: [
    //     // {
    //     //   name: "Visit repo",
    //     //   url: "https://github.com/Surya-Narayan/546-lambda"
    //     // }
    //     //  you can add extra buttons here.
    //   ]
    // },
    {
      image: require("./assets/images/employeeinformation.png"),
      projectName: "Employee Details",
      projectDesc: " An interactive page that allows entry of employee details, allows to view each employee's information, and searches an employee allowing CRUD operations.",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: " https://detect-deepfake.web.app/"
        // }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/E-Commerce-Logo.png"),
      projectName: "ECommerce React Application with Stripe",
      projectDesc: "A dynamic, responsive e-commerce app with sleek design, animations, CMS for product management, advanced cart features, and secure Stripe integration for real payments."
    },
    /*{
      image: require("./assets/images/journalapplication.png"),
      projectName: "Android Journaling Application",
      projectDesc: "An Android application on Android Studio using the MVC (Model-View-Controller) structure to add/modify, store, and share journals. Added the user authentication method using Google account.",
      footerLink: [
        // {
        //   name: "Visit repo",
        //   url: "https://github.com/Surya-Narayan/Cloud-Computing/tree/master/CC_0094_0155_0260_1509_Final_Project"
        // }
      ]
    },
    {
      image: require("./assets/images/HCI.png"),
      projectName: "Revitalizing PennyJuice for Modern Appeal",
      projectDesc: "Redesigned the PennyJuice website, addressing flaws by incorporating key HCI laws. Analyzed user data, achieving an increase in task satisfaction of average SUS score from 34.17 to 84.5.",
      footerLink: [
        {
          name: "View redesign",
          url: "https://un26ff.axshare.com/#id=p5vr8a&p=homepage"
        }
      ]
    },
    {
      image: require("./assets/images/FakeReviews.png"),
      projectName: "Fake Reviews Detection",
      projectDesc: "Analyzed fake and authentic reviews using machine learning models, identifying key features like date variance, activity time for differentiation.Compared model performance, with Random Forest outperforming SVM and deep learning. Proposed utilizing review content, sentiment analysis, emphasizing the importance of larger review corpus.",
      footerLink: [
        // {
        //   name: "View redesign",
        //   url: "https://un26ff.axshare.com/#id=p5vr8a&p=homepage"
        // }
      ]
    },*/
    {
      image: require("./assets/images/VANET2.png"),
      projectName: "Topological and Geographical VANET Routing Protocol Analysis",
      projectDesc: "Simulated and analysed Topological and Geographical Vehicular ad hoc Network(VANET) routing protocols over real-world scenarios and Bengaluru locality map and analysed/compared the results to determine the best suited protocols for scenarios.",
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
      url: "https://www.ijitee.org/wp-content/uploads/papers/v9i2S/B10771292S19.pdf",
      title: "E-wyre: Re-engineering higher education",
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
  number: "+1 (424) 386-5870",
  email_address: "sdeepak1@toromail.csudh.edu"
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
