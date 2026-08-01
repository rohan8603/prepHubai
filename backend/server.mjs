import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running on port 5000 🚀");
});

app.post("/chat", (req, res) => {
  try {
    const { message } = req.body;

    console.log("Message Received:", message);

    if (!message) {
      return res.status(400).json({
        reply: "Please enter a question.",
      });
    }

    const text = message.toLowerCase();

    let reply = "";

    if (text.includes("string")) {
      reply =
        'A String in Java is a sequence of characters used to store text.\n\nExample:\nString name = "Rohan";';
    } else if (text.includes("java")) {
      reply =
        "Java is a high-level, object-oriented programming language. It is used for Backend Development, Android Apps, Desktop Software and Enterprise Applications.";
    } else if (text.includes("dbms")) {
      reply =
        "DBMS (Database Management System) is software used to store, organize, retrieve and manage data efficiently.";
    } else if (text.includes("oops") || text.includes("oop")) {
      reply =
        "OOPS has four main pillars:\n\n1. Encapsulation\n2. Inheritance\n3. Polymorphism\n4. Abstraction";
    } else if (text.includes("array")) {
      reply =
        "Array is a collection of same data type.\n\nExample:\nint[] arr = {1,2,3};";
    } else if (text.includes("placement")) {
      reply =
        "Placement Preparation Roadmap:\n\n• Aptitude\n• DSA\n• Java\n• DBMS\n• Operating System\n• Computer Networks\n• OOPS\n• Projects\n• Resume\n• Interview";
    } else if (text.includes("html")) {
      reply = "HTML is used to create the structure of web pages.";
    } else if (text.includes("css")) {
      reply = "CSS is used to design web pages.";
    } else if (text.includes("javascript")) {
      reply = "JavaScript makes websites interactive.";
    } else if (text.includes("react")) {
      reply = "React is a JavaScript library for building user interfaces.";
    } else if (text.includes("python")) {
      reply =
        "Python is widely used in AI, Machine Learning, Data Science and Automation.";
    } else if (text.includes("c language") || text === "c") {
      reply = "C is a procedural programming language.";
    } else if (text.includes("algorithm")) {
      reply =
        "An Algorithm is a step-by-step procedure used to solve a problem.";
    } else if (text.includes("data structure") || text.includes("dsa")) {
      reply =
        "Data Structures include Array, Linked List, Stack, Queue, Tree and Graph.";
    } else if (text.includes("resume")) {
      reply =
        "A good resume should contain Education, Skills, Projects, Internship, Achievements and Contact Details.";
    } else if (text.includes("interview")) {
      reply =
        "Interview Preparation includes Technical Questions, HR Questions, Projects, Communication Skills and Mock Interviews.";
    } else {
      reply =
        "👋 Hello! I am PrepHub AI.\n\nYou can ask me about:\n\n• Java\n• Python\n• HTML\n• CSS\n• JavaScript\n• React\n• DBMS\n• OOPS\n• DSA\n• Placement\n• Resume\n• Interview\n• Engineering Subjects";
    }

    res.json({ reply });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      reply: "Internal Server Error",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} 🚀`);
});