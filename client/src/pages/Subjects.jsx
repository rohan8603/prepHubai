import { Link, useParams, useNavigate } from "react-router-dom";
import { subjects, courses } from "../data/data";
import { FileText } from "lucide-react";

function Subjects() {
  const { courseId, semesterNumber } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => String(c.id) === String(courseId));

  const filteredSubjects = subjects.filter(
    (s) =>
      s.courseName === course?.name &&
      String(s.semesterNumber) === String(semesterNumber)
  );

  return (
    <div className="space-y-10">
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-100 text-blue-700 px-5 py-2 rounded-xl"
      >
        ← Back
      </button>

      <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-[2rem] p-10 shadow-2xl">
        <p className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm mb-5">
          SUBJECTS
        </p>
        <h1 className="text-5xl font-extrabold">Select Subject</h1>
        <p className="text-blue-100 mt-4">
          {course?.name} - Semester {semesterNumber}
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSubjects.map((s, index) => (
          <Link
            key={s.id}
            to={`/subject/${s.id}`}
            className="bg-white rounded-[2rem] p-7 shadow-lg border hover:shadow-2xl hover:-translate-y-2 transition"
          >
            <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-5">
              <FileText size={32} />
            </div>

            <p className="text-blue-600 font-bold">Subject {index + 1}</p>
            <h2 className="text-2xl font-extrabold mt-2">{s.name}</h2>

            <p className="text-gray-500 mt-3">
              Notes • PDFs • Videos • PYQs • AI Help
            </p>
          </Link>
        ))}

        {filteredSubjects.length === 0 && (
          <div className="bg-white rounded-[2rem] p-7 shadow-lg border">
            Subjects not added yet.
          </div>
        )}
      </div>
    </div>
  );
}

export default Subjects;