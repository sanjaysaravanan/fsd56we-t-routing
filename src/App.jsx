import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import Students from "./pages/Students";
import StudentPage from "./pages/StudentPage";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:studentId" element={<StudentPage />} />
        <Route path="/about-us" element={<h1>About Us Page</h1>} />
        <Route
          path="*"
          element={<h1>Page Not Found, Please check the URL</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
