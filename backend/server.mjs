import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running on port 5000 🚀");
});

app.post("/chat", (req, res) => {
  const { message } = req.body;
  const text = message.toLowerCase();

  let reply = "";

  if (text.includes("string")) {
    reply =
      "A String in Java is a sequence of characters used to store text. Example: String name = \"Rohan\";";
  } else if (text.includes("java")) {
    reply =
      "Java is a high-level, object-oriented programming language. It is used for backend, Android, web applications, and enterprise software.";
  } else if (text.includes("dbms")) {
    reply =
      "DBMS (Database Management System) is software used to store, organize, manage, and retrieve data efficiently.";
  } else if (text.includes("oops") || text.includes("oop")) {
    reply =
      "OOPS stands for Object-Oriented Programming System. Its four main pillars are Encapsulation, Inheritance, Polymorphism, and Abstraction.";
  } else if (text.includes("array")) {
    reply =
      "An Array is a collection of elements of the same data type stored in contiguous memory locations. Example: int[] arr = {1,2,3};";
  } else if (text.includes("placement")) {
    reply =
      "For placement preparation, focus on Aptitude, Java, DSA, OOPs, DBMS, Operating System, Computer Networks, Projects, Resume, and Communication Skills.";
  } else if (text.includes("html")) {
    reply =
      "HTML stands for HyperText Markup Language. It is used to create the structure of web pages.";
  } else if (text.includes("css")) {
    reply =
      "CSS stands for Cascading Style Sheets. It is used to design and style web pages.";
  } else if (text.includes("javascript")) {
    reply =
      "JavaScript is a scripting language used to make web pages interactive.";
  } else if (text.includes("react")) {
    reply =
      "React is a JavaScript library used for building fast and interactive user interfaces.";
  } else if (text.includes("python")) {
    reply =
      "Python is a high-level programming language widely used in AI, Machine Learning, Data Science, and Web Development.";
  } else if (text.includes("c language")) {
    reply =
      "C is a procedural programming language used for system programming and problem solving.";
  } else if (text.includes("algorithm")) {
    reply =
      "An algorithm is a step-by-step procedure used to solve a specific problem.";
  } else if (text.includes("data structure")) {
    reply =
      "A Data Structure is a way of organizing and storing data efficiently. Examples: Array, Linked List, Stack, Queue, Tree, Graph.";
  } else if (text.includes("resume")) {
    reply =
      "A good placement resume should include Education, Skills, Projects, Internships, Achievements, Certifications, and Contact Details.";
  } else if (text.includes("interview")) {
    reply =
      "Interview preparation should include Technical Questions, HR Questions, Communication Skills, Projects, and Mock Interviews.";
  } else {
    reply =
      "👋 Hello! I am PrepHub AI. Ask me about Java, Python, HTML, CSS, JavaScript, React, DBMS, OOPS, DSA, Placement, Resume, Interview, or Engineering subjects.";
  }

  res.json({ reply });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} 🚀`);
});