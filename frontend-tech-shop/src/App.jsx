import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import UserPage from "./components/UserPage";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SignUpForm />
            </ProtectedRoute>
          }
        />
        <Route path="/user-page" element={<UserPage />} />
      </Routes>
    </Router>
  );
};

export default App;
