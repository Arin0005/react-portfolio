import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

const HERO_CONTENT = `I am an ambitious and innovative programmer with a strong focus on artificial intelligence, machine learning, and frontend development. My journey began with a fascination for problem-solving through code, leading me to develop a wide range of technical skills and practical experience in building dynamic and user-centric applications. As a third-year engineering student specializing in Artificial Intelligence and Machine Learning, I have already amassed significant expertise, complemented by hands-on projects that blend creativity and technical precision.

My skill set spans multiple domains, including developing responsive user interfaces with technologies like HTML, CSS, JavaScript, and frameworks like React and Next.js. In the backend, I am proficient in Python, Flask, and Django, enabling me to create scalable and robust web applications. I have also worked extensively with tools like MySQL, PostgreSQL, and MongoDB to manage and query large datasets efficiently. My innovative mindset has driven me to explore and apply advanced machine learning algorithms in projects that include virtual assistants and data-driven applications.

Collaboration and adaptability are core to my approach, allowing me to work effectively in teams and adapt to evolving challenges. Beyond programming, I am passionate about crafting engaging digital experiences that seamlessly merge design and functionality. With a commitment to staying at the forefront of technology, I am eager to continue contributing innovative solutions and impactful projects in my domain.`;

export const ABOUT_TEXT = `I am a passionate AI&ML engineer with a deep interest in creating intelligent systems and advancing the boundaries of machine learning and data analytics. I have a keen interest in making responsive UI using React, Tailwind CSS and Framer Motion .I specialize in developing scalable models, building interactive applications, and crafting solutions that leverage advanced algorithms to enhance user engagement. My focus areas include building virtual assistants, responsive admin dashboards, and innovative music applications using modern tools and frameworks like Python, Dart, and Django. I aim to blend creativity and technical expertise to deliver transformative solutions that make technology accessible and impactful.`;



export const PROJECTS = [
  {
    title: "Newsletter Summarizer",
    image: project1,
    description:
      "The Newsletter Summarizer is a Python-based tool designed to simplify the process of reading lengthy news articles. The tool retrieves content from URLs through web scraping using the bs4 and requests libraries. Once the content is extracted, it utilizes the TextRank algorithm for summarizing, which is a form of extractive text summarization. This approach helps in providing concise summaries of the articles. Additionally, the tool handles images by displaying a default image when an article is missing one. This project is aimed at providing a quick and efficient way to consume news by shortening long articles into digestible summaries.",
    technologies: ["HTML", "CSS", "Javascript", "Python", "Django"],
  },
  {
    title: "Cohortly - Chat Application",
    image: project2,
    description:
      "The is a messaging app built with Dart, Flutter and Firebase which is designed for group communication. It features real-time messaging, chat groups, and multimedia support. The app uses WebSockets for seamless communication and is structured for scalability. It provides an easy-to-follow setup guide for developers, making it ideal for customization and expansion with features like authentication and notifications.",
    technologies: ["Dart", "Flutter", "Firebase"],
  },
  {
    title: "Virutal Assistant",
    image: project3,
    description:
      "It is a Python-based virtual assistant is an advanced AI system that integrates speech recognition and natural language processing. It can understand and process voice commands, execute tasks like web searches and application launches, and provide contextual responses. The assistant also includes a text-to-speech module with multiple voice options, such as David, Zira, and Mark. This combination of AI models and speech synthesis enables human-like interaction, enhancing user productivity and experience.",
    technologies: ["Python"],
  },
  {
    title: "Tune Blend",
    image: project4,
    description:
      "The Tune-Blend project is a Dart-based application designed to revolutionize music listening experiences. It employs advanced algorithms for song shuffle and personalized playlist generation, enhancing user engagement through dynamic playback methods. The app emphasizes a seamless user interface, ensuring intuitive navigation and interaction. Its modular architecture allows for scalable additions and improved efficiency, making it a comprehensive platform for exploring and enjoying music.",
    technologies: ["OAuth", "Flutter", "React native", "Dart", "mySQL"],
  },
];


export default HERO_CONTENT;