import React from "react";
import { Formik, /* Field, Form,*/ ErrorMessage/*, FieldArray*/ } from "formik"; // must npm install formik to use it
import * as Yup from "yup";
import "../FormStyle.css";
import Selector from "./MajorSelector"

/**
 * Form component, used when users initially sign up for an account
 */

function FormInput() {
  const majorCollection = [
    {label: "Applied and Computational Mathematical Sciences", value: "acms"},
    {label: "Art: Interdisciplinary", value: "art_interdisciplinary"},
    {label: "Art: Painting and Drawing", value: "art_paintingAndDrawing"},
    {label: "Art: Photomedia", value: "art_photomedia"},
    {label: "Art: Three Dimensional Forum", value: "art_threeDimensionalForum"},
    {label: "Art History", value: "artHistory"},
    {label: "Astronomy", value: "astronomy"},
    {label: "Biochemistry", value: "biochemistry"},
    {label: "Biology", value: "biology"},
    {label: "Biology: Ecology, Evolution, and Conservation", value: "biology_ecology"},
    {label: "Biology: Molecular, Cellular, and Development", value: "biology_molecular"},
    {label: "Biology: Plant", value: "biology_plant"},
    {label: "Computer Science", value: "computerScience"},
    {label: "Dance", value: "dance"},
    {label: "Drama", value: "drama"},
    {label: "Mathematics", value: "math"},
    {label: "Music", value: "music"},
    {label: "Physics", value: "physics"},
  ];
  return (
    <div>
      <h3>Tell us a bit about yourself!</h3>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          major: []
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
            .required("Required*"),
          major: Yup.string()
            .required("Required*")
          })
        }
        onSubmit={(values, { setSubmitting } ) => {
          setTimeout(() => {
            alert("this is working" + JSON.stringify(values, null, 2));
            console.log("this is submitting");
            setSubmitting(false);
          }, 200);
        }}
        >
      {(formik) => (
        <form onSubmit={formik.handleSubmit} className="fillForm">
          <label className="container">Full Name
            <input
              name="firstName"
              type="text"
              {...formik.getFieldProps("firstName")}
              placeholder="First Name"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
             <div>{formik.errors.firstName}</div>
           ) : null}
            {/* <div className="errorMsg"><ErrorMessage name="firstName" /></div> */}
            <input
              name="lastName"
              type="text"
              {...formik.getFieldProps("lastName")}
              placeholder="Last Name"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
             <div>{formik.errors.firstName}</div>
           ) : null}
          </label>
          <label className="container">
            <input
              name="email"
              type="email"
              {...formik.getFieldProps("email")}
              placeholder="xxx@example.com"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
             <div>{formik.errors.firstName}</div>
           ) : null}
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
      </Formik>
    </div>
  )
}

export default FormInput;
/*//   <Form className="fillForm">
      //     <label className="container">Full Name:
      //       <Field
      //         name="firstName"
      //         type="text"
      //         placeholder="First Name"
      //       />
      //       <div className="errorMsg"><ErrorMessage name="firstName" /></div>
      //       <Field
      //         name="lastName"
      //         type="text"
      //         placeholder="Last Name"
      //       />
      //       <div className="errorMsg"><ErrorMessage name="lastName" /></div>
      //     </label>
      //     <label className="container"> Email:
      //       <Field
      //         name="email"
      //         type="email"
      //         placeholder="xxx@example.com"
      //       />
      //       <div className="errorMsg"><ErrorMessage name="email" /></div>
      //     </label>
      //     <label className="container"> Major:
      //       <Field
      //         name="major"
      //         as="select"
      //       >
      //         <option value={null}>---Please Select a Major---</option>
      //         <option value="astronomy">Astronomy</option>
      //         <option value="biology">Biology</option>
      //         <option value="computerScience">Computer Science</option>
      //         <option value="computerScience">History</option>
      //       </Field>
      //       <div className="errorMsg"><ErrorMessage name="major" /></div>
      //     </label>
      //     <FieldArray
      //       name="majors"
      //       render={
      //         (arrayHelpers) => (
      //           <div>
      //               {majorCollection.map(major => (
      //                   <label key={major.value}>
      //                       <input
      //                           name="majors"
      //                           type="checkbox"
      //                           value={major}
      //                           {...console.log(Formik.values)}
      //                           checked={formik.values.majors.includes(major.value)}
      //                           onChange={e => {
      //                             if (e.target.checked) {
      //                               arrayHelpers.push(major.value);
      //                             } else {
      //                               const idx = formik.values.majors.indexOf(major.value);
      //                               arrayHelpers.remove(idx);
      //                             }
      //                           }}
      //                       />
      //                       <span>{major.label}</span>
      //                   </label>
      //               ))}
      //           </div>
      //         )
      //       }
      //     />
      //    <Selector />
      {
      //     <button type="submit">Submit</button>
      //   </Form>
      /* </Formik> */