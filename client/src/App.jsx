import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Universities from "./pages/Universities";
import Branches from "./pages/Branches";
import Courses from "./pages/Courses";
import Semesters from "./pages/Semesters";
import Subjects from "./pages/Subjects";
import SubjectDetails from "./pages/SubjectDetails";
import Placement from "./pages/Placement";
import AIAssistant from "./pages/AIAssistant";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f5f7fb]">
        <Sidebar />

        <div className="lg:ml-72">
          <Navbar />

          <main className="max-w-7xl mx-auto px-4 py-8">
            <Routes>

              <Route path="/" element={<Home />} />

              <Route
                path="/universities"
                element={<Universities />}
              />

              <Route
                path="/branches/:universityId"
                element={<Branches />}
              />

              <Route
                path="/courses/:branchId"
                element={<Courses />}
              />

              <Route
                path="/semesters/:courseId"
                element={<Semesters />}
              />

              <Route
                path="/subjects/:courseId/:semesterNumber"
                element={<Subjects />}
              />

              <Route
                path="/subject/:subjectId"
                element={<SubjectDetails />}
              />

              <Route
                path="/placement"
                element={<Placement />}
              />

              <Route
                path="/login"
                element={<Login />}
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/ai-assistant"
                element={
                  <ProtectedRoute>
                    <AIAssistant />
                  </ProtectedRoute>
                }
              />

            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;