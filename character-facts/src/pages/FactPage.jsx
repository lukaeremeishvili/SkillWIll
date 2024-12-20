import { useParams, useNavigate } from "react-router-dom";

const FactPage = () => {
  const { factId } = useParams();
  const navigate = useNavigate();
  const facts = [
    { id: "1", text: "Klein Moretti is the main protagonist of Lord of Mysteries." },
    { id: "2", text: "He is the mysterious leader of the Tarot Club known as The Fool" },
    { id: "3", text: "He likes Cats, Money, Single player games and dislikes Snakes." },
  ];

  const fact = facts.find((fact) => fact.id === factId);

  if (!fact) {
    return <div>Fact not found</div>;
  }

  const goBackToAbout = () => {
    navigate("/about");
  };

  return (
    <div>
      <h1>Fact Details</h1>
      <p>{fact.text}</p>
      <button onClick={goBackToAbout}>About Page</button>
    </div>
  );
};

export default FactPage;
