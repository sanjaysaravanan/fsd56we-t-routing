import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import Students from "./pages/Students";
import StudentPage from "./pages/StudentPage";

import "./App.css";
import Layout from "./layout/layout";
import ThemeContext from "./ThemeContext";
import { useState } from "react";

const SubApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/students" element={<Students />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/students/:studentId" element={<StudentPage />} />
          <Route path="/about-us" element={<h1>About Us Page</h1>} />
        </Route>
        <Route
          path="*"
          element={<h1>Page Not Found, Please check the URL</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      <SubApp />
    </ThemeContext.Provider>
  );
};

export default App;
