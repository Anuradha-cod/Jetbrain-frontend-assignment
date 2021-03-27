import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";

const FormId = "agnywTVn";
const Form = () => {
  const [submit, setSubmit] = useFormspark({
    formId: FormId,
  });
  const [message, setMessage] = useState("");

  const onAdd = (e) => {
    setMessage(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submit({ message });
    alert("Form submitted");
    setMessage("");
  };

  return (
    <form onSubmit={onSubmit}>
      <select>
        city
        <option>Ahmdabad</option>
        <option>jaipur</option>
        <option>Delhi</option>
        <option>New Delhi</option>
      </select>
      <input placeholder="Search" value={message} onChange={onAdd} />
      <button type="submit" disabled={setSubmit}>
        Submit
      </button>
    </form>
  );
};
export default Form;
