import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserPage = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch user data from session
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/session", {
          withCredentials: true,
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user session:", error);
        setError("Failed to fetch user data. Redirecting to login...");
        setTimeout(() => {
          navigate("/");
        }, 3000); // Redirect to the sign-in page after 3 seconds
      }
    };

    fetchUserData();
  }, [navigate]);

  // Handle logout
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/logout", {}, { withCredentials: true });
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
      setError("Failed to log out. Please try again.");
    }
  };

  if (error) {
    return (
      <div className="container text-center mt-5">
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="container text-center mt-5">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container text-center mt-5">
      <h1>Welcome, {userData.username}!</h1>
      <p>Email: {userData.email}</p>
      <button className="btn btn-danger mt-3" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserPage;
