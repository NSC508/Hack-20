import React from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik"; // must npm install formik to use it
import * as Yup from "yup";
import "../FormStyle.css";
import MajorSelector from "./MajorSelector"
import InterestSelector from "./InterestSelector"

/**
 * Form component, used when users initially sign up for an account
 */

function SelectMult() {
  return (
    <div className="formContainer">
      <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        year: "",
        major: ["computer science, biology"],
        interests: ["basketball"]
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be at most 20 characters")
          .required("Required*"),
        lastName: Yup.string()
          .max(20, "Must be at most 20 characters")
          .required("Required*"),
        year: Yup.string()
          .min(4, "Must be 4 digits")
          .max(4, "Must be 4 digits")
          .required("Required*")
        })
      }
      onSubmit={(values, { setSubmitting } ) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
      >
      <Form className="fillForm">
        <button type="submit">Submit</button>
        <label className="container">Full Name:
        <Field
          name="firstName"
          type="text"
          placeholder="First Name"
        />
        <div className="errorMsg"><ErrorMessage name="firstName" /></div>
        <Field
          name="lastName"
          type="text"
          placeholder="Last Name"
        />
        <div className="errorMsg"><ErrorMessage name="lastName" /></div>
        </label>
          <label className="container"> Year:
            <Field
              name="year"
              as="select"
            >
              <option value={null}>---Please Select a Year---</option>
              <option value="1">Freshman</option>
              <option value="2">Sophomore</option>
              <option value="3">Junior</option>
              <option value="4">Senior</option>
            </Field>
            <div className="errorMsg"><ErrorMessage name="major" /></div>
          </label>
        </Form>
      </Formik>
      <p>Major:</p>
      <MajorSelector className="multiSelect"/>
      <p>Interests:</p>
      <InterestSelector className="multiSelect"/>
    </div>
  )
}

export default SelectMult;