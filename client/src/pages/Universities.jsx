import { Link } from "react-router-dom";
import { universities } from "../data/data";
import { GraduationCap } from "lucide-react";

function Universities() {
  return (
    <div className="space-y-10">
      <section className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white rounded-[2rem] p-10 shadow-2xl">
        <p className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm mb-5">
          UNIVERSITIES
        </p>
        <h1 className="text-5xl font-extrabold">Explore Universities</h1>
        <p className="text-blue-100 mt-4 max-w-2xl">
          Select your university and access notes, videos, PYQs and AI support.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {universities.map((u, index) => (
          <Link
            key={u.id}
            to={`/branches/${u.id}`}
            className="bg-white rounded-[2rem] p-7 shadow-lg border hover:shadow-2xl hover:-translate-y-2 transition"
          >
            <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-5">
              <GraduationCap size={34} />
            </div>

            <p className="text-blue-600 font-bold mb-2">
              University {index + 1}
            </p>

            <h2 className="text-2xl font-extrabold text-gray-900">
              {u.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Universities;