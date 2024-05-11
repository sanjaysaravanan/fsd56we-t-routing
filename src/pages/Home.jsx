// This is component is the parent of Home Page
import { Link } from "react-router-dom";
import links from "../links.json";

const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      {/* <a href="/students">Students Page</a> */}
      {links.map((link) => (
        <Link key={link.path} to={link.path} style={{ margin: 16 }}>
          {link.name}
        </Link>
      ))}
      {/* <Link to="/students">Students Page</Link> */}
    </>
  );
};

export default HomePage;
