import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik"; // must npm install formik to use it
import * as Yup from "yup";
import "../FormStyle.css";

/**
 * Form component, used when users initially sign up for an account
 */

function FormInput() {
  return (
    <div>
      <p>Hello world!</p>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: ""
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(20, "Must be at most 20 characters")
            .required("Required*"),
          lastName: Yup.string()
            .max(20, "Must be at most 20 characters")
            .required("Required*"),
          email: Yup.string()
            .email("Must be a valid email")
            .required("Required*")
          })
        }
        onSubmit={(values, { setSubmitting } ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 200);
        }}
      >
        <Form className="fullForm">
          <label>Full Name
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
          <label>
            <Field
              name="email"
              type="email"
              placeholder="xxx@example.com"
            />
          </label>
          <div className="errorMsg"><ErrorMessage name="email" /></div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      {/*<form onSubmit={formik.handleSubmit}>
        <label>Full Name
          <input
            name="firstName"
            type="text"
            {...formik.getFieldProps("firstName")}
            placeholder="First Name"
          />
          {formik.touched.firstName && formik.errors.firstName ?
            <div>{formik.errors.firstName}</div> : null}
          <input
            name="lastName"
            type="text"
            {...formik.getFieldProps("lastName")}
            placeholder="Last Name"
          />
          {formik.touched.lastName && formik.errors.lastName ?
            <div>{formik.errors.lastName}</div> : null}
        </label>
        <label>
          <input
            name="email"
            type="email"
            {...formik.getFieldProps("email")}
            placeholder="xxx@example.com"
          />
        </label>
        {formik.touched.email && formik.errors.email ?
          <div>{formik.errors.email}</div> : null}
        <button type="submit">Submit</button>
        </form>*/}
    </div>
  )
}

export default FormInput;