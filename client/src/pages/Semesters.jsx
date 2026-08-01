import { Link, useParams, useNavigate } from "react-router-dom";
import { semesters, courses } from "../data/data";
import { CalendarDays } from "lucide-react";

function Semesters() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => String(c.id) === String(courseId));

  return (
    <div className="space-y-10">
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-100 text-blue-700 px-5 py-2 rounded-xl"
      >
        ← Back
      </button>

      <section className="bg-gradient-to-br from-orange-500 to-pink-600 text-white rounded-[2rem] p-10 shadow-2xl">
        <p className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm mb-5">
          SEMESTERS
        </p>
        <h1 className="text-5xl font-extrabold">Select Semester</h1>
        <p className="text-orange-100 mt-4">
          {course?.name} semester-wise learning path.
        </p>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {semesters.map((sem) => (
          <Link
            key={sem.number}
            to={`/subjects/${courseId}/${sem.number}`}
            className="bg-white rounded-[2rem] p-7 shadow-lg border text-center hover:bg-blue-600 hover:text-white hover:-translate-y-2 transition"
          >
            <CalendarDays className="mx-auto mb-4" size={36} />
            <p className="font-bold">Semester</p>
            <h2 className="text-5xl font-extrabold">{sem.number}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Semesters;