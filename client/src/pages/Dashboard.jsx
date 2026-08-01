import { auth } from "../firebase";

function Dashboard() {
  const user = auth.currentUser;

  return (
    <div className="p-6">

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-4">
        Welcome 👋
      </h1>

      {/* User Info */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">User Info</h2>
        <p>Email: {user?.email}</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:scale-105 transition">
          <h3 className="text-lg font-semibold">📘 Notes</h3>
          <p>Access your study notes</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:scale-105 transition">
          <h3 className="text-lg font-semibold">💼 Placement</h3>
          <p>Prepare for interviews</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:scale-105 transition">
          <h3 className="text-lg font-semibold">🤖 AI Assistant</h3>
          <p>Ask anything instantly</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;