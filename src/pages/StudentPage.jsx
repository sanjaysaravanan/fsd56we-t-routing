import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import data from "./data.json";

const Student = (props) => {
  return (
    <div
      style={{
        border: "1px solid",
        textAlign: "center",
        padding: "16px",
        position: "relative",
        margin: 8,
      }}
    >
      {props.isSenior && (
        <i
          className="fa-solid fa-person-digging fa-2x"
          style={{ position: "absolute", top: 10, right: 10 }}
        ></i>
      )}
      <img
        alt={props.name}
        style={{ height: "200px", width: "300px", objectFit: "contain" }}
        src={props.image}
      />
      <h3>{props.name}</h3>
      <h4>{props.grade}</h4>
    </div>
  );
};

Student.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  grade: PropTypes.string,
  isSenior: PropTypes.bool,
  image: PropTypes.string,
};

const StudentPage = () => {
  // const params = useParams();
  const { studentId } = useParams();

  return (
    <>
      {/* {console.log(params)} */}
      {console.log(studentId)}
      {console.log(typeof studentId)}
      {/* <h1>Individual Student</h1> */}
      {/* <h2>Student Id: {params.studentId}</h2> */}
      {/* <h2>Student Id: {studentId}</h2> */}

      <Student {...data.find((stu) => stu.id === parseInt(studentId))} />
    </>
  );
};

export default StudentPage;
