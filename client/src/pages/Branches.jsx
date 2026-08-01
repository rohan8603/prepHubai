import { Link, useParams, useNavigate } from "react-router-dom";
import { branches } from "../data/data";
import { Layers } from "lucide-react";

function Branches() {
  const { universityId } = useParams();
  const navigate = useNavigate();

  const filteredBranches = branches.filter(
    (b) => String(b.universityId) === String(universityId)
  );

  return (
    <div className="space-y-10">
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-100 text-blue-700 px-5 py-2 rounded-xl"
      >
        ← Back
      </button>

      <section className="bg-gradient-to-br from-purple-700 to-blue-700 text-white rounded-[2rem] p-10 shadow-2xl">
        <p className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm mb-5">
          BRANCHES
        </p>
        <h1 className="text-5xl font-extrabold">Select Branch</h1>
        <p className="text-purple-100 mt-4">
          Choose your program and continue.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredBranches.map((b, index) => (
          <Link
            key={b.id}
            to={`/courses/${b.id}`}
            className="bg-white rounded-[2rem] p-7 shadow-lg border hover:shadow-2xl hover:-translate-y-2 transition"
          >
            <div className="w-16 h-16 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center mb-5">
              <Layers size={32} />
            </div>

            <p className="text-purple-600 font-bold">Branch {index + 1}</p>
            <h2 className="text-3xl font-extrabold mt-2">{b.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Branches;