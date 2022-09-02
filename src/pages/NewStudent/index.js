import React, { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  NewStudentBackground,
  InputField,
  RadioButtonField,
  NewStudentButton,
  RadioButtonConatiner,
  SelectClass,
  CheckBoxConatiner,
  CheckBoxField,
} from "./NewStudentElements";
const NewStudent = () => {
  useState(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <NewStudentBackground>
      <InputField placeholder="   student name" data-aos="fade-right" />
      <InputField placeholder="   student email" data-aos="fade-left" />
      <RadioButtonConatiner data-aos="fade-right">
        <p style={{ color: "white" }}>Franch</p>
        <RadioButtonField />
        <RadioButtonField />
        <p style={{ color: "white" }}>English</p>
      </RadioButtonConatiner>
      <SelectClass data-aos="fade-left">
        <option
          style={{ backgroundColor: "white", color: "rgb(103, 24, 129)" }}
        >
          Class1
        </option>
        <option
          style={{ backgroundColor: "white", color: "rgb(103, 24, 129)" }}
        >
          Class2
        </option>
        <option
          style={{ backgroundColor: "white", color: "rgb(103, 24, 129)" }}
        >
          Class3
        </option>
      </SelectClass>
      <CheckBoxConatiner data-aos="fade-right">
        <div>
          <CheckBoxField type="checkbox" />
          <p style={{ color: "white" }}>Franch</p>
        </div>
        <div>
          <CheckBoxField type="checkbo4x" />
          <p style={{ color: "white" }}>Franch</p>
        </div>
        <div>
          <CheckBoxField type="checkbox" />
          <p style={{ color: "white" }}>Franch</p>
        </div>
        <div>
          <CheckBoxField type="checkbox" />
          <p style={{ color: "white" }}>Franch</p>
        </div>
        <div>
          <CheckBoxField type="checkbox" />
          <p style={{ color: "white" }}>Franch</p>
        </div>
        <div>
          <CheckBoxField type="checkbox" />
          <p style={{ color: "white" }}>Franch</p>
        </div>
        <div>
          <CheckBoxField type="checkbox" />
          <p style={{ color: "white" }}>Franch</p>
        </div>
      </CheckBoxConatiner>

      <NewStudentButton>Submit</NewStudentButton>
    </NewStudentBackground>
  );
};

export default NewStudent;
