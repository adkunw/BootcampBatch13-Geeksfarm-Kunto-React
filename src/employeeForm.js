import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Styles from "./employeeFormStyle";

// Schema Validasi dengan Yup
const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  employed: yup.boolean(),
  education: yup.string().required("Education is required"),
  expertise: yup.array().min(1, "At least one expertise is required"),
  preferred: yup.string().required("Preferred technology is required"),
  notes: yup.string(),
});

const orderedKeys = [
  "firstName",
  "lastName",
  "employed",
  "education",
  "expertise",
  "preferred",
  "notes",
];

const getOrderedData = (data) => {
  return Object.fromEntries(orderedKeys.map((key) => [key, data[key] ?? ""]));
};

const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      employed: false,
      education: "",
      expertise: [],
      preferred: "",
      notes: "",
    },
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    window.alert(JSON.stringify(data, null, 2));
  };

  return (
    <Styles>
      <h1>Employee Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <input {...register("firstName")} placeholder="First Name" />
          <p>{errors.firstName?.message}</p>
        </div>
        <div>
          <label>Last Name</label>
          <input {...register("lastName")} placeholder="Last Name" />
          <p>{errors.lastName?.message}</p>
        </div>
        <div>
          <label>Employed</label>
          <input type="checkbox" {...register("employed")} />
        </div>
        <div>
          <label>Education</label>
          <select {...register("education")}>
            <option value="">Select Education</option>
            <option value="highSchool">High School</option>
            <option value="bachelor">Bachelor</option>
            <option value="master">Master</option>
          </select>
          <p>{errors.education?.message}</p>
        </div>
        <div>
          <label>Expertise</label>
          <div>
            {["HTML", "CSS", "Javascript", "NodeJS", "ReactJS"].map((skill) => (
              <label key={skill}>
                <input
                  type="checkbox"
                  {...register("expertise")}
                  value={skill}
                />{" "}
                {skill}
              </label>
            ))}
          </div>
          <p>{errors.expertise?.message}</p>
        </div>
        <div>
          <label>Preferred Technology</label>
          <div>
            {["Front End", "Back End", "Full Stack"].map((tech) => (
              <label key={tech}>
                <input type="radio" {...register("preferred")} value={tech} />{" "}
                {tech}
              </label>
            ))}
          </div>
          <p>{errors.preferred?.message}</p>
        </div>
        <div>
          <label>Notes</label>
          <textarea {...register("notes")} placeholder="Notes" />
        </div>
        <div className="buttons">
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <button type="button" onClick={() => reset()} disabled={isSubmitting}>
            Reset
          </button>
        </div>
        <pre>{JSON.stringify(getOrderedData(watch()), null, 2)}</pre>
      </form>
    </Styles>
  );
};

export default App;
