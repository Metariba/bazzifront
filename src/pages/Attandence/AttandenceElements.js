import styled from "styled-components";

export const AttandenceBAckground = styled.div`
  background-color: rgb(41, 40, 40);
  width: 100%;
  height: auto;
  padding-top: 8%;
  padding-bottom: 8%;
`;

export const AdminViewStudentTable = styled.table`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  z-index: 2;
  box-shadow: 0 0px 5px 5px rgb(103, 24, 129), 0 0;
`;
export const AdminViewStudentRow = styled.tr`
  cursor: pointer;
  &: nth-child(even) {
    background-color: #f2f2f2;
  }
  &: active {
    background-color: rgb(103, 24, 129);
    color: white;
  }
  &: hover {
    background-color: rgb(103, 24, 129);
    color: white;
  }
`;
export const AdminViewStudentCol = styled.td`
  text-align: center;
`;

export const InputField = styled.input`
  background-color: transparent;
  z-index: 2;
  color: white;
  width: 400px;
  height: 50px;
  border-radius: 15px;
  border: 2px solid white;
  font-weight: 800;
  font-size: 150%;
  cursor: pointer;
  padding-left: 2%;
  margin-top: 10%;
  margin-bottom: 5%;
  &:hover {
    background-color: white;
    color: black;
    box-shadow: 0 0px 5px 5px rgb(103, 24, 129), 0 0;
  }
  &:focus {
    background-color: white;
    color: black;
    box-shadow: 0 0px 5px 5px rgb(103, 24, 129), 0 0;
  }
  @media screen and (max-width: 800px) {
    width: 270px;
    padding: 5%;
    margin-top: 10%;
    margin-bottom: 10%;
  }
`;

export const CheckBoxAttandence = styled.input``;
