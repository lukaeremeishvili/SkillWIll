import { useNavigate, useLoaderData } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const data = useLoaderData();

  const redirect = () => {
    navigate("/about");
  };

  return (
    <div>
      <div>{data.message}</div>
      <button onClick={redirect}>Go to About</button>
    </div>
  );
};

export default Home;
