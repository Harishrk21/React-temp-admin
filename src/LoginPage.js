import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Make sure to import this
import "./login.css"; // Add your styles here

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // To navigate programmatically

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check login credentials
    if (email === "admin@gmail.com" && password === "Admin123@") {
      navigate("/admin"); // Redirect to /admin (Admin Dashboard) after successful login
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-page"> {/* Added class to scope styles to login page */}
      <div className="login-container">
        <h1 className="login-title">Welcome to the Login Page</h1> {/* Title inside login container */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
