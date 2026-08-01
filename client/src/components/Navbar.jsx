import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Navbar() {

  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {

    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsub();

  }, []);

  const logout = async () => {

    await signOut(auth);

    localStorage.removeItem("user");

    navigate("/login");

  };

  const storedUser = JSON.parse(localStorage.getItem("user"));

  return (

    <nav className="bg-white shadow-lg border-b sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        <Link to="/" className="text-3xl font-extrabold text-blue-700">
          PrepHub AI 🚀
        </Link>

        <div className="flex items-center gap-5">

          <NavLink to="/" className="font-semibold text-gray-700 hover:text-blue-600">
            Home
          </NavLink>

          <NavLink to="/universities" className="font-semibold text-gray-700 hover:text-blue-600">
            Universities
          </NavLink>

          <NavLink to="/placement" className="font-semibold text-gray-700 hover:text-blue-600">
            Placement
          </NavLink>

          <NavLink to="/profile" className="font-semibold text-gray-700 hover:text-blue-600">
            Profile
          </NavLink>

          {user || storedUser ? (

            <div className="flex items-center gap-3">

              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl font-bold">

                👋 {storedUser?.name || user?.displayName}

              </div>

              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl"
              >
                Logout
              </button>

            </div>

          ) : (

            <NavLink
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl"
            >
              Login
            </NavLink>

          )}

        </div>

      </div>

    </nav>

  );
}

export default Navbar;