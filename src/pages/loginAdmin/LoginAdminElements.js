import styled from "styled-components";

export const LandingPage = styled.div`
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
  margin-right: 1%;
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

export const LoginButton = styled.button`
  background-color: transparent;
  color: white;
  width: 300px;
  height: 50px;
  border-radius: 15px;
  border: 2px solid white;
  font-weight: 800;
  font-size: 150%;
  cursor: pointer;
  margin-right: 1%;
  &:hover {
    background-color: white;
    color: black;
    box-shadow: 0 0px 5px 5px rgb(103, 24, 129), 0 0;
  }
`;
