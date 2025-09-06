import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate()

  const validate = () => {
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = "Username is required";
    } else if (username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Get existing users or empty array
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      //  Check if username already exists
      if (existingUsers.find((user) => user.username === username)) {
        alert("Username already taken!");
        return;
      }

      // Add new user
      const newUser = { username, email, password };
      existingUsers.push(newUser);

      localStorage.setItem("users", JSON.stringify(existingUsers));

      navigate("/login");
    }
  };

  return (
    <div className="max-w-[400px] mx-auto mt-16 p-8 bg-white rounded-xl shadow-lg mb-12">
      <h2 className="text-center mb-7 text-2xl font-semibold text-gray-800">
        Sign Up
      </h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Username */}
        <div className="mb-5">
          <label className="block mb-1.5 font-medium text-gray-700">
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter your username"
            className={` outline-0 w-full px-3 py-2 border rounded-md ${errors.username
              ? "border-red-500"
              : "border-gray-300 focus:border-teal-500 "
              }`}
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block mb-1.5 font-medium text-gray-700">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className={` outline-0 w-full px-3 py-2 border rounded-md ${errors.email
              ? "border-red-500"
              : "border-gray-300 focus:border-teal-500 "
              }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-1.5 font-medium text-gray-700">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className={` outline-0 w-full px-3 py-2 border rounded-md ${errors.password
              ? "border-red-500"
              : "border-gray-300 focus:border-teal-500 "
              }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg mt-4 outline-0"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
