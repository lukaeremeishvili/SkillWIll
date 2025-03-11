import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActivePage } from '../store/actions/navigationSlice';

const Navigation = () => {
  const dispatch = useDispatch();

  const handlePageChange = (page: string) => {
    dispatch(setActivePage(page));
  };

  return (
    <ul>
      <li>
        <Link to="/" onClick={() => handlePageChange('home')}>
          Home Page
        </Link>
      </li>
      <li>
        <Link to="/beers" onClick={() => handlePageChange('beers')}>
          Beers Page
        </Link>
      </li>
      <li>
        <Link to="/random-beers" onClick={() => handlePageChange('random-beers')}>
          Random Beers Page
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
