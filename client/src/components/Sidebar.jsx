import { NavLink } from "react-router-dom";
import { useState } from "react";

import {
  Home,
  GraduationCap,
  Briefcase,
  Bot,
  Bookmark,
  User,
  Phone,
} from "lucide-react";

function Sidebar() {

  const [showContact, setShowContact] = useState(false);

  const links = [
    {
      name: "Home",
      path: "/",
      icon: <Home size={20} />,
    },

    {
      name: "Universities",
      path: "/universities",
      icon: <GraduationCap size={20} />,
    },

    {
      name: "Placement",
      path: "/placement",
      icon: <Briefcase size={20} />,
    },

    {
      name: "AI Assistant",
      path: "/ai-assistant",
      icon: <Bot size={20} />,
    },

    {
      name: "Bookmarks",
      path: "/bookmarks",
      icon: <Bookmark size={20} />,
    },

    {
      name: "Profile",
      path: "/profile",
      icon: <User size={20} />,
    },
  ];

  return (
    <aside className="hidden lg:block w-72 min-h-screen bg-white border-r border-gray-200 fixed left-0 top-0 z-40 shadow-sm">

      {/* Logo */}
      <div className="p-6">

        <h1 className="text-3xl font-extrabold text-blue-700">
          PrepHub <span className="text-purple-600">AI</span>
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Student Dashboard
        </p>

      </div>

      {/* Menu */}
      <nav className="px-4 mt-4 space-y-2">

        {links.map((link) => (

          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold transition ${
                isActive
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
              }`
            }
          >

            {link.icon}

            {link.name}

          </NavLink>

        ))}

        {/* Contact Button */}
        <button
          onClick={() => setShowContact(!showContact)}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
        >
          <Phone size={20} />

          Contact
        </button>

      </nav>

      {/* Contact Card */}
      {showContact && (

        <div className="mt-6 px-4">

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl p-5 shadow-xl animate-fadeIn">

            <p className="text-sm text-blue-100 mb-2">
              CONTACT SUPPORT
            </p>

            <h3 className="text-xl font-extrabold">
              Rohan Kumar
            </h3>

            <p className="mt-4 text-blue-50">
              📞 +91 8603844252
            </p>

            <p className="text-blue-50 mt-2 break-all">
              ✉ prephubai@gmail.com
            </p>

          </div>

        </div>

      )}

    </aside>
  );
}

export default Sidebar;