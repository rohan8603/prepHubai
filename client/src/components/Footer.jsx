function Footer() {
  return (
    <footer className="mt-20 bg-gray-950 text-white rounded-t-[2rem]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-3xl font-extrabold">
            PrepHub <span className="text-blue-400">AI</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Smart learning platform for students across India.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <p className="text-gray-400">Home</p>
          <p className="text-gray-400">Universities</p>
          <p className="text-gray-400">Placement</p>
          <p className="text-gray-400">AI Assistant</p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Categories</h3>
          <p className="text-gray-400">Engineering</p>
          <p className="text-gray-400">Management</p>
          <p className="text-gray-400">Computer Applications</p>
          <p className="text-gray-400">Other Courses</p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Stay Connected</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to get updates and study materials.
          </p>
          <div className="flex">
            <input
              placeholder="Enter your email"
              className="px-4 py-3 rounded-l-xl text-black w-full"
            />
            <button className="bg-blue-600 px-4 rounded-r-xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-5 text-gray-500">
        © 2026 PrepHub AI. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;