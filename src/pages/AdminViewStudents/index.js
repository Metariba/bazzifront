import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  AdminViewStudentsPage,
  AdminViewStudentTable,
  AdminViewStudentRow,
  AdminViewStudentCol,
  InputField,
} from "./AdminViewStudentsElements";
const AdminViewStudents = () => {
  const studentList = [
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "jafar",
      status: "registered",
    },
    {
      name: "jafar",
      status: "registered",
    },
    {
      name: "hussein",
      status: "not registered",
    },
    {
      name: "salam",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
    {
      name: "hussein",
      status: "registered",
    },
  ];
  const [studentListState, setStudentListState] = useState(studentList);

  const search = (search) => {
    let permanentStudentList = [];
    console.log(search.target.value);
    studentList.forEach((student) => {
      if (student.name.includes(search.target.value) || student.status.includes(search.target.value)) {
        permanentStudentList.push(student);
      }
    });
    setStudentListState(permanentStudentList);
  };

  return (
    <AdminViewStudentsPage>
      <Container>
        <InputField placeholder="Search..." onKeyUp={(e) => search(e)} />
        <AdminViewStudentTable>
          {studentListState &&
            studentListState.map((student) => {
              return (
                <>
                  <AdminViewStudentRow>
                    <AdminViewStudentCol>{student.name}</AdminViewStudentCol>
                    <AdminViewStudentCol>{student.status}</AdminViewStudentCol>
                  </AdminViewStudentRow>
                </>
              );
            })}
        </AdminViewStudentTable>
      </Container>
    </AdminViewStudentsPage>
  );
};

export default AdminViewStudents;
