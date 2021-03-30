import React from "react";
import { useFormspark } from "@formspark/use-formspark";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormId = "agnywTVn";

const Registration = () => {
  const [submit, setSubmit] = useFormspark({
    formId: FormId,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());

    submit(formDataObj);
    alert("Submited");
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formBasicName">
        <Form.Label>First Name</Form.Label>
        <Form.Control name="firstName" placeholder="First name" />
        <Form.Label>Last Name</Form.Label>
        <Form.Control name="lastName" placeholder="Last name" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
        CITY
      </Form.Label>
      <Form.Control
        name="city"
        as="select"
        className="my-1 mr-sm-2"
        id="inlineFormCustomSelectPref"
        custom
      >
        <option value="0">Choose...</option>
        <option value="Noida">Noida</option>
        <option value="Delhi">Delhi</option>
        <option value="Gurgaon">Gurgaon</option>
        <option value="Banglore">Banglore</option>
      </Form.Control>
      <Form.Group controlId="dob">
        <Form.Label>DOB</Form.Label>
        <Form.Control type="date" name="dob" placeholder="Date of Birth" />
      </Form.Group>
      <Form.Group id="formGender">
        <Form.Check
          name="gender"
          inline
          type="radio"
          label={`Male`}
          id="male"
          value="male"
        />
        <Form.Check
          name="gender"
          inline
          type="radio"
          label={`Female`}
          id="female"
          value="female"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default Registration;
