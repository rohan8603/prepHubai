import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const provider = new GoogleAuthProvider();

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const navigate = useNavigate();

  const saveUser = (user, userName) => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: userName || user.displayName,
        email: user.email,
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isRegister) {
        const result = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await updateProfile(result.user, {
          displayName: name,
        });

        saveUser(result.user, name);

        alert("Account Created Successfully ✅");
      } else {
        const result = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        saveUser(result.user);

        alert("Login Successful ✅");
      }

      navigate("/");

    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {

      const result = await signInWithPopup(auth, provider);

      saveUser(result.user);

      alert("Google Login Successful ✅");

      navigate("/");

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-5">

      <div className="bg-white w-full max-w-md rounded-[2rem] shadow-2xl p-8 border">

        <h1 className="text-4xl font-extrabold text-center mb-3 text-gray-800">

          {isRegister ? "Create Account" : "Login"}

        </h1>

        <p className="text-center text-gray-500 mb-8">
          Welcome to PrepHub AI 🚀
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {isRegister && (
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full border border-gray-300 px-5 py-3 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full border border-gray-300 px-5 py-3 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full border border-gray-300 px-5 py-3 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-extrabold text-lg transition"
          >
            {isRegister ? "Create Account" : "Login"}
          </button>

        </form>

        <button
          onClick={handleGoogleLogin}
          className="w-full mt-5 bg-red-500 hover:bg-red-600 text-white py-3 rounded-2xl font-bold transition"
        >
          Continue with Google
        </button>

        <p
          onClick={() => setIsRegister(!isRegister)}
          className="text-center mt-7 text-blue-600 font-bold cursor-pointer"
        >
          {isRegister
            ? "Already have an account? Login"
            : "New user? Create Account"}
        </p>

      </div>

    </div>
  );
}

export default Login;