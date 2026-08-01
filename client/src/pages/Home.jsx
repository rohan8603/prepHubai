import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Bot,
  Briefcase,
} from "lucide-react";

function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-[2rem] px-6 py-16 md:px-14 shadow-sm"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-bold mb-4">
              India’s Smart Learning Platform
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900">
              Learn Smarter. <br />
              Achieve <span className="gradient-text">Better.</span>
            </h1>

            <p className="text-gray-600 text-lg mt-6 max-w-xl">
              Get access to university-wise notes, video lectures, PYQs,
              placement preparation and AI tutor — everything in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to="/universities"
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl font-bold shadow transition text-center"
              >
                Explore Universities →
              </Link>

              <Link
                to="/ai-assistant"
                className="bg-white text-blue-600 border border-blue-200 px-7 py-4 rounded-xl font-bold shadow-sm hover:shadow transition text-center"
              >
                Ask AI Assistant ✨
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="glass rounded-[2rem] shadow-2xl p-8 text-center">
              <div className="w-24 h-24 bg-blue-100 text-blue-700 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Bot size={50} />
              </div>

              <h2 className="text-3xl font-bold text-gray-900">
                Your AI Study Buddy
              </h2>

              <p className="text-gray-600 mt-3">
                Notes, PYQs, videos and placement support.
              </p>
            </div>

            <div className="absolute -top-6 -left-6 glass px-5 py-3 rounded-2xl shadow">
              📘 Notes
            </div>

            <div className="absolute top-10 -right-6 glass px-5 py-3 rounded-2xl shadow">
              📑 PYQs
            </div>

            <div className="absolute -bottom-6 left-10 glass px-5 py-3 rounded-2xl shadow">
              🤖 AI Tutor
            </div>
          </div>
        </div>
      </motion.section>

      {/* Stats */}
      <section className="bg-white rounded-3xl shadow-lg p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          ["50+", "Universities"],
          ["1000+", "Subjects"],
          ["5000+", "Notes & PDFs"],
          ["10K+", "Students"],
        ].map((item, index) => (
          <div key={index}>
            <h2 className="text-4xl font-extrabold text-blue-600">
              {item[0]}
            </h2>

            <p className="text-gray-600 mt-2">{item[1]}</p>
          </div>
        ))}
      </section>

      {/* Features */}
      <section>
        <p className="text-center text-blue-600 font-bold mb-2">
          FEATURES
        </p>

        <h2 className="text-4xl font-extrabold text-center mb-12">
          Everything You Need
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <GraduationCap size={32} />,
              title: "University Resources",
              desc: "University-wise subjects and semesters.",
            },
            {
              icon: <BookOpen size={32} />,
              title: "Study Materials",
              desc: "Notes, PDFs and PYQs in one place.",
            },
            {
              icon: <Bot size={32} />,
              title: "AI Assistant",
              desc: "Get instant AI-powered answers.",
            },
            {
              icon: <Briefcase size={32} />,
              title: "Placement Prep",
              desc: "Coding, aptitude and interview prep.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow p-7 card-hover"
            >
              <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>

              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-purple-700 to-blue-700 text-white rounded-[2rem] p-10 shadow-xl">
          <p className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm mb-5">
            PLACEMENT PREPARATION
          </p>

          <h2 className="text-4xl font-extrabold">
            Crack Your Dream Placement
          </h2>

          <p className="text-purple-100 mt-5">
            Aptitude, coding questions, interview questions, GD topics and more.
          </p>

          <Link
            to="/placement"
            className="inline-block bg-white text-blue-700 px-7 py-3 rounded-xl font-bold mt-8"
          >
            Start Preparing →
          </Link>
        </div>

        <div className="bg-white rounded-[2rem] p-10 shadow-xl">
          <p className="text-blue-600 font-bold mb-3">AI ASSISTANT</p>

          <h2 className="text-4xl font-extrabold text-gray-900">
            Your Personal AI Tutor
          </h2>

          <p className="text-gray-600 mt-5">
            Ask any study doubt instantly with AI support.
          </p>

          <Link
            to="/ai-assistant"
            className="inline-block bg-blue-600 text-white px-7 py-3 rounded-xl font-bold mt-8"
          >
            Ask AI →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;