import { Link, useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/data";
import { BookOpen } from "lucide-react";

function Courses() {
  const { branchId } = useParams();
  const navigate = useNavigate();

  const filteredCourses = courses.filter(
    (c) => String(c.branchId) === String(branchId)
  );

  return (
    <div className="space-y-10">
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-100 text-blue-700 px-5 py-2 rounded-xl"
      >
        ← Back
      </button>

      <section className="bg-gradient-to-br from-green-600 to-blue-700 text-white rounded-[2rem] p-10 shadow-2xl">
        <p className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm mb-5">
          COURSES
        </p>
        <h1 className="text-5xl font-extrabold">Select Course</h1>
        <p className="text-green-100 mt-4">
          Choose your course to view semester-wise subjects.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCourses.map((c, index) => (
          <Link
            key={c.id}
            to={`/semesters/${c.id}`}
            className="bg-white rounded-[2rem] p-7 shadow-lg border hover:shadow-2xl hover:-translate-y-2 transition"
          >
            <div className="w-16 h-16 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center mb-5">
              <BookOpen size={32} />
            </div>

            <p className="text-green-600 font-bold">Course {index + 1}</p>
            <h2 className="text-3xl font-extrabold mt-2">{c.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Courses;