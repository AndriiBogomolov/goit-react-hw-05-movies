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
        console.log(data);
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
      <img
        src={
          movieData.poster_path
            ? BASE_IMG_URL + movieData.poster_path
            : require('img/smile.jpg')
        }
        alt=""
        width="200"
      />
      <h4>Additional information</h4>
      <NavLink
        to="cast"
        state={{
          from: location.state.from,
        }}
        style={{ marginLeft: '10' }}
      >
        cast
      </NavLink>
      <NavLink
        to="reviews"
        state={{
          from: location.state.from,
        }}
      >
        reviews
      </NavLink>
      <Outlet />
      {isLoading && <Loader />}
      {error && toast.error('Please wait..')}
    </div>
  );
};

export default MovieDetails;
