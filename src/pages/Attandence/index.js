import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  AttandenceBAckground,
  AdminViewStudentTable,
  AdminViewStudentRow,
  AdminViewStudentCol,
  CheckBoxAttandence,
} from "./AttandenceElements";

const Attandence = () => {
  var studentClassList = [
    {
      name: "hussein",
      status: "registered",
      isChecked: false,
    },
    {
      name: "jafar",
      status: "registered",
      isChecked: false,
    },
    {
      name: "jafar",
      status: "registered",
      isChecked: false,
    },
    {
      name: "hussein",
      status: "not registered",
      isChecked: false,
    },
    {
      name: "salam",
      status: "registered",
      isChecked: false,
    },
    {
      name: "hussein",
      status: "registered",
      isChecked: false,
    },
    {
      name: "hussein",
      status: "registered",
      isChecked: false,
    },
    {
      name: "hussein",
      status: "registered",
      isChecked: false,
    },
    {
      name: "hussein",
      status: "registered",
      isChecked: false,
    },
    {
      name: "hussein",
      status: "registered",
      isChecked: false,
    },
    {
      name: "hussein",
      status: "registered",
      isChecked: false,
    },
    {
      name: "hussein",
      status: "registered",
      isChecked: false,
    },
    {
      name: "hussein",
      status: "registered",
      isChecked: false,
    },
    {
      name: "hussein",
      status: "registered",
      isChecked: false,
    },
    {
      name: "hussein",
      status: "registered",
      isChecked: false,
    },
    {
      name: "hussein",
      status: "registered",
      isChecked: false,
    },
    {
      name: "hussein",
      status: "registered",
      isChecked: false,
    },
    {
      name: "hussein",
      status: "registered",
      isChecked: false,
    },
    {
      name: "hussein",
      status: "registered",
      isChecked: false,
    },
    {
      name: "hussein",
      status: "registered",
      isChecked: false,
    },
    {
      name: "hussein",
      status: "registered",
      isChecked: false,
    },
    {
      name: "hussein",
      status: "registered",
      isChecked: false,
    },
    {
      name: "hussein",
      status: "registered",
      isChecked: false,
    },
    {
      name: "hussein",
      status: "registered",
      isChecked: false,
    },
    {
      name: "hussein",
      status: "registered",
      isChecked: false,
    },
    {
      name: "hussein",
      status: "registered",
      isChecked: false,
    },
    {
      name: "hussein",
      status: "registered",
      isChecked: false,
    },
    {
      name: "hussein",
      status: "registered",
      isChecked: false,
    },
  ];
  return (
    <AttandenceBAckground>
      <Container>
        <AdminViewStudentTable>
          {studentClassList &&
            studentClassList.map((student, index) => {
              return (
                <>
                  <AdminViewStudentRow>
                    <AdminViewStudentCol>{student.name}</AdminViewStudentCol>
                    <AdminViewStudentCol>{student.status}</AdminViewStudentCol>
                    <CheckBoxAttandence
                      type="checkbox"
                      onClick={(e) => {
                        student.isChecked = e.target.checked;
                        console.log(studentClassList);
                      }}
                    />
                  </AdminViewStudentRow>
                </>
              );
            })}
        </AdminViewStudentTable>
      </Container>
    </AttandenceBAckground>
  );
};

export default Attandence;
