import { auth } from "../firebase";
import { subjects } from "../data/data";
import { User, Mail, ShieldCheck, BookOpen, Trophy, Bookmark } from "lucide-react";

function Profile() {
  const user = auth.currentUser;
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const userName = storedUser?.name || user?.displayName || "User";
  const userEmail = storedUser?.email || user?.email || "Not available";

  const completedSubjectIds =
    JSON.parse(localStorage.getItem("completedSubjects")) || [];

  const completedSubjectNames = subjects.filter((sub) =>
    completedSubjectIds.includes(String(sub.id))
  );

  const totalSubjects = subjects.length;
  const completedSubjects = completedSubjectNames.length;
  const progress = Math.floor((completedSubjects / totalSubjects) * 100);

  return (
    <div className="space-y-8">
      <section className="bg-gradient-to-br from-blue-700 to-purple-700 text-white rounded-[2rem] p-10 shadow-2xl">
        <p className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm mb-4">
          STUDENT PROFILE
        </p>

        <h1 className="text-5xl font-extrabold">
          Welcome Back, {userName} 👋
        </h1>

        <p className="text-blue-100 mt-3">
          Real subject completion progress.
        </p>
      </section>

      <section className="bg-white rounded-[2rem] p-8 shadow-xl border">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-blue-100 text-blue-700 rounded-3xl flex items-center justify-center">
            <User size={50} />
          </div>

          <div>
            <h2 className="text-4xl font-extrabold">{userName}</h2>
            <p className="text-gray-500 mt-1">Student Dashboard</p>

            <div className="mt-4 flex flex-wrap gap-3">
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl flex items-center gap-2">
                <Mail size={18} />
                {userEmail}
              </div>

              <div className="bg-green-50 text-green-700 px-4 py-2 rounded-xl flex items-center gap-2">
                <ShieldCheck size={18} />
                Logged In
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-[2rem] p-7 shadow-lg border">
          <BookOpen className="text-blue-700 mb-4" size={32} />
          <h2 className="text-4xl font-extrabold">{completedSubjects}</h2>
          <p className="text-gray-500 mt-2">Completed Subjects</p>
        </div>

        <div className="bg-white rounded-[2rem] p-7 shadow-lg border">
          <Trophy className="text-yellow-700 mb-4" size={32} />
          <h2 className="text-4xl font-extrabold">{progress}%</h2>
          <p className="text-gray-500 mt-2">Progress</p>
        </div>

        <div className="bg-white rounded-[2rem] p-7 shadow-lg border">
          <Bookmark className="text-pink-700 mb-4" size={32} />
          <h2 className="text-4xl font-extrabold">{totalSubjects}</h2>
          <p className="text-gray-500 mt-2">Total Subjects</p>
        </div>
      </section>

      <section className="bg-white rounded-[2rem] p-8 shadow-xl border">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-3xl font-extrabold">Learning Progress</h2>
          <span className="text-blue-600 font-bold text-xl">{progress}%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="text-gray-500 mt-4">
          {completedSubjects} out of {totalSubjects} subjects completed.
        </p>
      </section>

      <section className="bg-white rounded-[2rem] p-8 shadow-xl border">
        <h2 className="text-3xl font-extrabold mb-6">Completed Subjects</h2>

        {completedSubjectNames.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {completedSubjectNames.map((subject) => (
              <div
                key={subject.id}
                className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex items-center justify-between"
              >
                <div>
                  <h3 className="font-bold text-lg">{subject.name}</h3>
                  <p className="text-gray-500 text-sm">
                    Semester {subject.semesterNumber} • Completed Successfully
                  </p>
                </div>

                <div className="text-green-600 font-bold text-2xl">✓</div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            No subject completed yet. Open any subject and click “Mark as Complete”.
          </p>
        )}
      </section>
    </div>
  );
}

export default Profile;