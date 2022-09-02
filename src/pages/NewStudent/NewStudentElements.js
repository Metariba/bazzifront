import styled from "styled-components";

export const NewStudentBackground = styled.div`
  background-color: rgb(41, 40, 40);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
`;
export const InputField = styled.input`
  background-color: transparent;
  color: white;
  width: 400px;
  height: 50px;
  border-radius: 15px;
  border: 2px solid white;
  font-weight: 800;
  font-size: 150%;
  cursor: pointer;
  margin-bottom: 2%;
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
`;

export const RadioButtonField = styled.button`
  background-color: white;
  color: white;
  width: 25px;
  height: 25px;
  border-radius: 50px;
  border: 0;
  font-weight: 800;
  cursor: pointer;
  margin-right: 1%;
  margin-left: 1%;
  &:hover {
    background-color: white;
    color: black;
    box-shadow: 0 0px 4px 4px rgb(103, 24, 129), 0 0;
  }
  &:focus {
    background-color: rgb(103, 24, 129);
    box-shadow: 0 0px 4px 4px white, 0 0;
  }
`;

export const NewStudentButton = styled.button`
  background-color: transparent;
  color: white;
  width: 300px;
  height: 50px;
  border-radius: 15px;
  border: 2px solid white;
  font-weight: 800;
  font-size: 150%;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    box-shadow: 0 0px 5px 5px rgb(103, 24, 129), 0 0;
  }
`;

export const RadioButtonConatiner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  width: 100%;
`;

export const SelectClass = styled.select`
  background-color: transparent;
  color: white;
  width: 300px;
  height: 50px;
  border-radius: 15px;
  border: 2px solid white;
  cursor: pointer;
  font-weight: 100;
  font-size: 150%;
  text-align: center;
  &: focus {
    background-color: rgb(103, 24, 129);
    color: white;
  }
  &: hover {
    background-color: rgb(103, 24, 129);
    color: white;
  }
  margin-bottom: 2%;
  margin-top: 2%;
`;

export const CheckBoxConatiner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-auto-columns: auto;
  grid-auto-rows: auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

export const CheckBoxField = styled.input`
`;
