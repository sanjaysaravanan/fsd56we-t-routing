import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState } from "react";

// import HomePage from "./pages/Home";
// import Students from "./pages/Students";
// import StudentPage from "./pages/StudentPage";
// import AboutUs from "./pages/AboutUs";

import "./App.css";
import Layout from "./layout/layout";
import ThemeContext from "./ThemeContext";

// Lazy Optimization
const HomePage = lazy(() => import("./pages/Home"));
const Students = lazy(() => import("./pages/Students"));
const StudentPage = lazy(() => import("./pages/StudentPage"));
const AboutUs = lazy(() => import("./pages/AboutUs"));

const SubApp = () => {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/students" element={<Students />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/students/:studentId" element={<StudentPage />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Route>
          <Route
            path="*"
            element={<h1>Page Not Found, Please check the URL</h1>}
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
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
