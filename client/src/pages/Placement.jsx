import { useState } from "react";

function Placement() {
  const [showGD, setShowGD] = useState(false);
  const [showAptitude, setShowAptitude] = useState(false);
  const [showCoding, setShowCoding] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");

  const aptitudeTopics = [
    "Time and Work",
    "Pipes and Cistern",
    "LCM & HCF",
    "Surds & Indices",
    "Figure Counting",
    "Coding Decoding",
    "Blood Relation",
    "Inequality",
    "Sitting Arrangement",
    "Order Ranking",
  ];

  const gdTopics = [
    "Artificial Intelligence vs Human Intelligence",
    "Online Education vs Offline Education",
    "Impact of Social Media on Youth",
    "Is Coding Necessary for Everyone?",
    "Government Job vs Private Job",
    "Work From Home Advantages and Disadvantages",
    "Role of AI in Education",
    "Digital India",
    "Women Empowerment",
    "Climate Change",
    "Electric Vehicles in India",
    "Importance of Communication Skills",
    "Future of Cryptocurrency",
    "Advantages of Internet",
    "Smartphones: Boon or Bane",
    "Startup Culture in India",
    "Should College Attendance Be Mandatory?",
    "Technology in Healthcare",
    "Impact of OTT Platforms",
    "Cashless Economy",
    "India as a Superpower",
    "Cyber Security Awareness",
    "Population Growth in India",
    "Importance of Time Management",
    "Effects of Video Games on Students",
    "Can AI Replace Teachers?",
    "Space Exploration",
    "Use of Robotics in Daily Life",
    "Mental Health Awareness",
    "Advantages of Cloud Computing",
    "Internet Addiction",
    "Role of Youth in Nation Building",
    "Importance of Teamwork",
    "Remote Jobs Future",
    "Social Networking Sites",
    "Coding vs Non-Coding Careers",
    "Future of Machine Learning",
    "Data Privacy in Digital World",
    "Impact of Mobile Phones on Students",
    "Importance of Financial Literacy",
    "Leadership Qualities",
    "India’s Education System",
    "Renewable Energy Sources",
    "Can Technology Reduce Unemployment?",
    "Importance of Discipline",
    "Advantages and Disadvantages of AI",
    "Make in India",
    "Role of Engineers in Society",
    "Success Requires Hard Work or Luck",
    "Is Internet Making Us Less Social?",
  ];

  const aptitudeQuestions = [
    { question: "What is 25% of 480?", options: ["100", "120", "140", "150"], answer: "120" },
    { question: "Simple interest on ₹1000 at 10% for 2 years?", options: ["100", "200", "300", "400"], answer: "200" },
    { question: "Average of 10, 20, 30, 40, 50?", options: ["20", "25", "30", "35"], answer: "30" },
    { question: "Find 20% of 250", options: ["25", "50", "75", "100"], answer: "50" },
    { question: "What is the square root of 144?", options: ["10", "11", "12", "13"], answer: "12" },
    { question: "If A:B = 2:3 and B:C = 4:5 then A:C = ?", options: ["8:15", "2:5", "4:7", "6:9"], answer: "8:15" },
    { question: "A train crosses a pole in 20 sec at 54 km/hr. Find length.", options: ["250m", "300m", "150m", "200m"], answer: "300m" },
    { question: "What is 15% of 600?", options: ["60", "75", "90", "120"], answer: "90" },
    { question: "LCM of 12 and 18?", options: ["24", "36", "48", "72"], answer: "36" },
    { question: "HCF of 24 and 36?", options: ["6", "8", "12", "18"], answer: "12" },
    { question: "Speed = 60 km/hr, Distance = 240 km. Time?", options: ["2 hr", "3 hr", "4 hr", "5 hr"], answer: "4 hr" },
    { question: "If CP = 500 and SP = 650, Profit %?", options: ["20%", "25%", "30%", "35%"], answer: "30%" },
    { question: "If 5x = 100 then x = ?", options: ["10", "15", "20", "25"], answer: "20" },
    { question: "Cube of 5?", options: ["25", "75", "100", "125"], answer: "125" },
    { question: "0.25 × 400 = ?", options: ["25", "50", "75", "100"], answer: "100" },
    { question: "Probability of getting head in coin toss?", options: ["0", "1/4", "1/2", "1"], answer: "1/2" },
    { question: "Area of square with side 8?", options: ["16", "32", "64", "128"], answer: "64" },
    { question: "Perimeter of rectangle 10×5?", options: ["20", "25", "30", "40"], answer: "30" },
    { question: "What is 40% of 900?", options: ["180", "270", "360", "450"], answer: "360" },
    { question: "A shopkeeper gains 20% by selling at ₹240. CP?", options: ["180", "190", "200", "220"], answer: "200" },
    { question: "What is 35% of 200?", options: ["50", "60", "70", "80"], answer: "70" },
    { question: "A man buys for ₹500 and sells for ₹650. Profit?", options: ["100", "120", "150", "180"], answer: "150" },
    { question: "Square of 15?", options: ["125", "200", "225", "250"], answer: "225" },
    { question: "Cube root of 27?", options: ["2", "3", "4", "5"], answer: "3" },
    { question: "What is 10% of 1500?", options: ["100", "150", "200", "250"], answer: "150" },
    { question: "Average of 5,10,15,20,25?", options: ["10", "12", "15", "18"], answer: "15" },
    { question: "Speed of car = 80 km/hr. Distance = 400 km. Time?", options: ["3 hr", "4 hr", "5 hr", "6 hr"], answer: "5 hr" },
    { question: "What is 5²?", options: ["10", "15", "20", "25"], answer: "25" },
    { question: "If 8x = 64 then x = ?", options: ["6", "7", "8", "9"], answer: "8" },
    { question: "What is 50% of 320?", options: ["120", "140", "160", "180"], answer: "160" },
    { question: "A train speed is 72 km/hr. Convert into m/s.", options: ["18", "20", "22", "24"], answer: "20" },
    { question: "Simple interest on ₹2000 at 5% for 2 years?", options: ["100", "150", "200", "250"], answer: "200" },
    { question: "Area of rectangle 12×5?", options: ["50", "55", "60", "65"], answer: "60" },
    { question: "Perimeter of square side 9?", options: ["18", "27", "36", "45"], answer: "36" },
    { question: "What is 75% of 400?", options: ["200", "250", "300", "350"], answer: "300" },
    { question: "HCF of 18 and 24?", options: ["4", "6", "8", "12"], answer: "6" },
    { question: "LCM of 8 and 12?", options: ["12", "18", "24", "36"], answer: "24" },
    { question: "What is 2³?", options: ["4", "6", "8", "10"], answer: "8" },
    { question: "A product sold for ₹960 after 20% profit. Cost price?", options: ["700", "750", "800", "850"], answer: "800" },
    { question: "What is the probability of rolling 1 on dice?", options: ["1/2", "1/3", "1/6", "1/12"], answer: "1/6" },
    { question: "Average of first five natural numbers?", options: ["2", "3", "4", "5"], answer: "3" },
    { question: "Find 30% of 900", options: ["180", "240", "270", "300"], answer: "270" },
    { question: "A sum doubles in 5 years at simple interest. Rate?", options: ["10%", "15%", "20%", "25%"], answer: "20%" },
    { question: "Find missing number: 2,4,8,16,?", options: ["24", "30", "32", "36"], answer: "32" },
    { question: "What is 9 × 9?", options: ["72", "81", "91", "99"], answer: "81" },
    { question: "Find square root of 169", options: ["11", "12", "13", "14"], answer: "13" },
    { question: "Distance covered in 3 hr at 50 km/hr?", options: ["100", "120", "150", "180"], answer: "150" },
    { question: "If CP = ₹400 and loss = 10%, SP?", options: ["340", "350", "360", "370"], answer: "360" },
    { question: "What is 1/4 of 200?", options: ["25", "40", "50", "60"], answer: "50" },
    { question: "Find next number: 1,1,2,3,5,8,?", options: ["11", "12", "13", "14"], answer: "13" },
  ];

  const codingQuestions = [
    "Reverse a String",
    "Palindrome Check",
    "Find Largest Element in Array",
    "Second Largest Number",
    "Factorial using Recursion",
    "Fibonacci Series",
    "Prime Number Check",
    "Remove Duplicates from Array",
    "Sort Array",
    "Binary Search",
    "Linear Search",
    "Find Missing Number",
    "Merge Two Arrays",
    "Count Vowels in String",
    "Swap Two Numbers",
    "Armstrong Number",
    "Anagram Check",
    "Reverse Linked List",
    "Stack using Array",
    "Queue using Array",
    "Implement Binary Tree",
    "DFS Traversal",
    "BFS Traversal",
    "Bubble Sort",
    "Selection Sort",
    "Insertion Sort",
    "Quick Sort",
    "Merge Sort",
    "Kadane Algorithm",
    "Longest Substring",
    "Matrix Multiplication",
    "Transpose Matrix",
    "Check Leap Year",
    "GCD and LCM",
    "Power Calculation",
    "Decimal to Binary",
    "Binary to Decimal",
    "Pattern Printing",
    "Count Digits",
    "Sum of Digits",
    "Rotate Array",
    "Find Duplicate Element",
    "String Compression",
    "Balanced Parentheses",
    "Valid Sudoku",
    "LRU Cache",
    "Maximum Subarray",
    "Two Sum Problem",
    "Move Zeroes",
    "Find Intersection of Arrays",
  ];

  return (
    <div className="space-y-10">
      <section className="bg-gradient-to-br from-blue-700 to-purple-700 text-white rounded-[2rem] p-10 shadow-2xl">
        <p className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm mb-5">
          PLACEMENT PREPARATION
        </p>

        <h1 className="text-5xl font-extrabold">
          Crack Your Dream Placement 🚀
        </h1>

        <p className="text-blue-100 mt-4 max-w-2xl">
          Prepare for coding rounds, interviews, aptitude, GD rounds and company placements.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          onClick={() => setShowCoding(!showCoding)}
          className="bg-white rounded-[2rem] p-8 shadow-xl border hover:-translate-y-2 transition cursor-pointer"
        >
          <div className="text-5xl mb-5">💻</div>
          <h2 className="text-3xl font-extrabold">Coding Questions</h2>
          <p className="text-gray-500 mt-3">Click to explore coding interview questions.</p>
        </div>

        <div
          onClick={() => {
            setShowAptitude(!showAptitude);
            setSelectedTopic("");
          }}
          className="bg-white rounded-[2rem] p-8 shadow-xl border hover:-translate-y-2 transition cursor-pointer"
        >
          <div className="text-5xl mb-5">🧠</div>
          <h2 className="text-3xl font-extrabold">Aptitude</h2>
          <p className="text-gray-500 mt-3">Click to explore aptitude topics.</p>
        </div>

        <div
          onClick={() => setShowGD(!showGD)}
          className="bg-white rounded-[2rem] p-8 shadow-xl border hover:-translate-y-2 transition cursor-pointer"
        >
          <div className="text-5xl mb-5">🎤</div>
          <h2 className="text-3xl font-extrabold">GD Topics</h2>
          <p className="text-gray-500 mt-3">Click to explore GD topics.</p>
        </div>
      </section>

      {showCoding && (
        <section className="bg-white rounded-[2rem] p-8 shadow-xl border">
          <h2 className="text-4xl font-extrabold mb-8">💻 Coding Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {codingQuestions.map((question, index) => (
              <div key={index} className="bg-blue-50 rounded-2xl p-5 border">
                <p className="font-bold">
                  {index + 1}. {question}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {showAptitude && (
        <section className="bg-white rounded-[2rem] p-8 shadow-xl border">
          <h2 className="text-4xl font-extrabold mb-8">🧠 Aptitude Topics</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {aptitudeTopics.map((topic, index) => (
              <div
                key={index}
                onClick={() => setSelectedTopic(topic)}
                className="bg-blue-50 hover:bg-blue-600 hover:text-white border border-blue-100 rounded-2xl p-6 cursor-pointer transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white text-blue-700 font-bold flex items-center justify-center">
                    {index + 1}
                  </div>

                  <h3 className="font-bold text-lg">{topic}</h3>
                </div>
              </div>
            ))}
          </div>

          {selectedTopic && (
            <div className="mt-12">
              <h2 className="text-3xl font-extrabold mb-6">
                {selectedTopic} Questions
              </h2>

              <div className="space-y-6">
                {aptitudeQuestions.map((q, index) => (
                  <div key={index} className="bg-blue-50 rounded-2xl p-6 border">
                    <h3 className="font-bold text-lg mb-4">
                      {index + 1}. {q.question}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {q.options.map((option, i) => (
                        <button
                          key={i}
                          onClick={() => alert(`Correct Answer: ${q.answer}`)}
                          className="bg-white hover:bg-blue-600 hover:text-white p-3 rounded-xl border transition text-left"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {showGD && (
        <section className="bg-white rounded-[2rem] p-8 shadow-xl border">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-blue-600 font-bold">GROUP DISCUSSION</p>
              <h2 className="text-4xl font-extrabold mt-2">50 GD Topics</h2>
            </div>

            <div className="bg-blue-100 text-blue-700 px-5 py-2 rounded-xl font-bold">
              {gdTopics.length} Topics
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gdTopics.map((topic, index) => (
              <div
                key={index}
                className="bg-blue-50 hover:bg-blue-600 hover:text-white border border-blue-100 rounded-2xl p-5 transition duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="min-w-[36px] h-9 bg-white text-blue-700 rounded-xl flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  <p className="font-semibold leading-relaxed">{topic}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default Placement;