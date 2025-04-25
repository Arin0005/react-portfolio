import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
// import project6 from "../assets/projects/project-6.png";

const HERO_CONTENT = `As an ambitious third-year AI/ML engineering student, I fuse a passion for innovative problem-solving with a robust technical foundation in frontend (React, HTML, CSS, JavaScript) and backend (Python, Flask, Django) development. I don't just code; I craft dynamic, user-centric applications, leveraging databases like MySQL, PostgreSQL, and MongoDB. My drive to explore advanced machine learning algorithms has led to impactful projects, including virtual assistants and data-driven solutions. I thrive in collaborative environments, adapt quickly to new challenges, and am dedicated to creating seamless and engaging digital experiences. Eager to contribute cutting-edge solutions at the intersection of AI, ML, and intuitive design.`;

export const ABOUT_TEXT = `Fuelled by a deep passion for AI and ML, I engineer intelligent systems that push the boundaries of what's possible in machine learning and data analytics. My focus is on developing scalable models and crafting innovative solutions, including virtual assistants and intelligent applications, that enhance user engagement through advanced algorithms. I specialize in the end-to-end process, from conceptualization to rigorous model training and evaluation. My toolkit includes Python, alongside frameworks like Django, allowing me to build robust and impactful AI/ML-driven applications. I'm driven by the desire to blend technical expertise with creative problem-solving to deliver transformative AI solutions.`;

export const PROJECTS = [
  {
    title: "Newsletter Summarizer",
    image: project1,
    description:
      "The Newsletter Summarizer is a Python-based tool designed to simplify the process of reading lengthy news articles. The tool retrieves content from URLs through web scraping using the bs4 and requests libraries. Once the content is extracted, it utilizes the TextRank algorithm for summarizing, which is a form of extractive text summarization. This approach helps in providing concise summaries of the articles. Additionally, the tool handles images by displaying a default image when an article is missing one. This project is aimed at providing a quick and efficient way to consume news by shortening long articles into digestible summaries.",
    technologies: ["HTML", "CSS", "Javascript", "Python", "Django", "NLP"],
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
  {
    title: "Waste Classifier ML Model",
    image: project5,
    description:
      "The Waste Classifier ML Model is a Python-based image classification system designed to automate waste sorting by categorizing waste into recyclable, organic, and non-recyclable types. Built using a Convolutional Neural Network (CNN) with TensorFlow/Keras, the model processes 224x224 pixel images to deliver accurate classifications. The project involved curating a diverse dataset, overcoming challenges like class imbalance through data augmentation, and developing a full ML pipeline for training, evaluation, and prediction. This solution promotes sustainable waste management by streamlining sorting processes, reflecting over 100 hours of dedicated research, coding, and optimization.",
    technologies: ["Python", "TensorFlow", "Keras", "NumPy", "OpenCV", "Git"],
  },
  // {
  //   title: "Rail Madad Complaint Analysis Model",
  //   image: project6,
  //   description:
  //     "The Rail Madad Complaint Analysis Model is a Python-based machine learning system designed to enhance the Indian Railways' RailMadad platform by automating the analysis of passenger complaints. Leveraging natural language processing (NLP) techniques, the model categorizes complaints, performs sentiment analysis, and prioritizes issues for faster resolution. Built with TensorFlow and spaCy, it processes textual data from the RailMadad app and portal to provide actionable insights. The project involved collecting and cleaning a dataset of passenger feedback, addressing challenges like noisy text data, and developing a robust pipeline for model training and evaluation. Over 80 hours of dedicated effort resulted in a scalable solution to improve railway service quality and passenger experience.",
  //   technologies: [
  //     "Python",
  //     "TensorFlow",
  //     "spaCy",
  //     "NLTK",
  //     "scikit-learn",
  //     "Git",
  //   ],
  // },
];

export default HERO_CONTENT;
