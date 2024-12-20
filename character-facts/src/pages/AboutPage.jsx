import { Link, useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>About Klein Moretti</h1>
      <p>
        Klein Moretti is a cautious and good-natured person. He is humorous,
        polite, mature, and gentlemanly. Fundamentally a lover of justice, He
        will not hesitate to do what is right, even at a personal cost. Since
        His transmigration, Klein has experienced a plethora of dangerous events
        and tragedies. Yet He still stands steadfast by his principles and the
        core of his personality as one who is cautious, upholds His own brand of
        justice when necessary, and does not involve or target the innocent.
      </p>
      <Link to="/fact/1">Learn More about Him</Link>
      <br />
      <Link to="/fact/2">Learn More about Him</Link>
      <br />
      <Link to="/fact/3">Learn More about Him</Link>
      <br />
      <button onClick={goHome}>Home Page</button>
    </div>
  );
};

export default AboutPage;
