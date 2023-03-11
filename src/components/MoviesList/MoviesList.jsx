import { NavLink, useLocation } from 'react-router-dom';
import propTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className="render_List">
      {movies.map(movie => (
        <li key={movie.id} className="renderCard">
          <NavLink
            to={`/movies/${movie.id}`}
            state={{
              from: location,
            }}
          >
            {movie.title || movie.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string,
      name: propTypes.string,
    })
  ),
};
