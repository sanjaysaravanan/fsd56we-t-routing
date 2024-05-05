import { Link, useSearchParams } from "react-router-dom";
import data from "./data.json";

const Students = () => {
  const [searchParams] = useSearchParams();

  return (
    <>
      <h1>Students</h1>
      <h2>Grade: {searchParams.get("grade")}</h2>
      <h2>Senior: {searchParams.get("isSenior")}</h2>
      {data.map((stu) => (
        <Link key={stu.id} to={`/students/${stu.id}`} style={{ margin: 16 }}>
          <img
            alt={stu.name}
            style={{ height: "200px", width: "300px", objectFit: "contain" }}
            src={stu.image}
          />
        </Link>
      ))}
    </>
  );
};

export default Students;
