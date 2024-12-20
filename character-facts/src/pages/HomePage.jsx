import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Klein Moretti</h1>
      <img src="/character.jpg" alt="Character" width="200" />
      <p>Explore the facts of The Fool!</p>
      <Link to="/about">Learn More</Link>
    </div>
  );
}

export default HomePage;