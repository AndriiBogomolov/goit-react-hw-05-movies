import { useState, useEffect } from 'react';
import {
  useParams,
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { fetchMovieDetsById } from '../services/apiService';
import { BASE_IMG_URL } from 'services/constants';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await fetchMovieDetsById(id);
        setMovieData(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  const handleGoBack = () => {
    navigate(location.state.from);
  };
  if (!movieData) {
    return (
      <div>
        <h1>Loading data...</h1>
      </div>
    );
  }

  return (
    <div className={css.moviedetails}>
      <button className={css.buttonGoBack} onClick={handleGoBack}>
        Go back
      </button>
      <div className="details">
        <div>
          <img
            src={
              movieData.poster_path
                ? BASE_IMG_URL + movieData.poster_path
                : require('img/smile.jpg')
            }
            alt=""
            width="300"
          />
        </div>
        <div className="about">
          <h2>
            {movieData.title} (
            {movieData.release_date
              ? movieData.release_date.substring(0, 4)
              : ''}
            )
          </h2>

          <p>
            User Score: {''}
            {movieData.vote_average
              ? Math.fround(movieData.vote_average * 10).toFixed(0)
              : ''}
            %
          </p>

          <h3>Overview</h3>
          <p>{movieData.overview}</p>

          <h4>Genres</h4>
          <p className="genres">
            {movieData.genres
              ? movieData.genres.map(genre => genre.name).join('')
              : ''}
          </p>
        </div>
      </div>
      <h5 className="addinfo">Additional information</h5>
      <div className="navlink">
        <NavLink
          to="cast"
          className="cast"
          state={{
            from: location.state.from,
          }}
        >
          Cast
        </NavLink>
        <NavLink
          to="reviews"
          className="reviews"
          state={{
            from: location.state.from,
          }}
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
      {isLoading && <Loader />}
      {error && toast.error('Please wait..')}
    </div>
  );
};

export default MovieDetails;
