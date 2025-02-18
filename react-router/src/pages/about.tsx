import { useNavigate, Form } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/");
  };

  return (
    <div>
      <h1> About Page</h1>
      <Form method="post">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <button type="submit">Submit</button>
      </Form>
      <button onClick={redirect}>Go to About</button>
    </div>
  );
};

export default About;
