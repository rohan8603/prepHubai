import { useParams, useNavigate } from "react-router-dom";
import { subjectContent, subjects } from "../data/data";

function SubjectDetails() {
  const { subjectId } = useParams();
  const navigate = useNavigate();

  const subject = subjects.find((s) => String(s.id) === String(subjectId));
  const content = subjectContent?.[subjectId];

  const markComplete = () => {
    const completed =
      JSON.parse(localStorage.getItem("completedSubjects")) || [];

    if (!completed.includes(subjectId)) {
      completed.push(subjectId);
      localStorage.setItem("completedSubjects", JSON.stringify(completed));
      alert("Subject marked as completed ✅");
    } else {
      alert("This subject is already completed ✅");
    }
  };

  if (!subject) {
    return <h1>Subject not found</h1>;
  }

  const pdfs = content?.pdfs || [];
  const videos = content?.videos || [];
  const pyq = content?.pyq || [];

  return (
    <div className="space-y-8">
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-100 text-blue-700 px-5 py-2 rounded-xl"
      >
        ← Back
      </button>

      <section className="bg-gradient-to-br from-blue-700 to-purple-700 text-white rounded-[2rem] p-10 shadow-2xl">
        <h1 className="text-5xl font-extrabold">{subject.name}</h1>
        <p className="text-blue-100 mt-3">Notes • PDFs • Videos • PYQs</p>

        <button
          onClick={markComplete}
          className="mt-6 bg-green-500 hover:bg-green-600 text-white px-7 py-3 rounded-2xl font-bold"
        >
          ✅ Mark as Complete
        </button>
      </section>

      <section className="bg-white rounded-[2rem] p-7 shadow-xl border">
        <h2 className="text-3xl font-extrabold mb-3">📘 Notes</h2>
        <p className="text-gray-600">
          {content?.notes || "Notes will be added soon."}
        </p>
      </section>

      <section className="bg-white rounded-[2rem] p-7 shadow-xl border">
        <h2 className="text-3xl font-extrabold mb-5">📄 PDFs</h2>

        {pdfs.length > 0 ? (
          pdfs.map((pdf, index) => (
            <a
              key={index}
              href={pdf.link}
              target="_blank"
              rel="noreferrer"
              className="block bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-2xl mb-3"
            >
              📄 {pdf.title}
            </a>
          ))
        ) : (
          <p className="text-gray-500">PDF links will be added soon.</p>
        )}
      </section>

      <section className="bg-white rounded-[2rem] p-7 shadow-xl border">
        <h2 className="text-3xl font-extrabold mb-5">🎥 Videos</h2>

        {videos.length > 0 ? (
          videos.map((video, index) => (
            <a
              key={index}
              href={video.link}
              target="_blank"
              rel="noreferrer"
              className="block bg-red-500 hover:bg-red-600 text-white p-4 rounded-2xl mb-3"
            >
              ▶ {video.title}
            </a>
          ))
        ) : (
          <p className="text-gray-500">Video links will be added soon.</p>
        )}
      </section>

      <section className="bg-white rounded-[2rem] p-7 shadow-xl border">
        <h2 className="text-3xl font-extrabold mb-5">📑 Previous Year Questions</h2>

        {pyq.length > 0 ? (
          pyq.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="block bg-green-500 hover:bg-green-600 text-white p-4 rounded-2xl mb-3"
            >
              📘 PYQ {item.year}
            </a>
          ))
        ) : (
          <p className="text-gray-500">PYQ links will be added soon.</p>
        )}
      </section>
    </div>
  );
}

export default SubjectDetails;