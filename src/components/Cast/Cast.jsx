import { useEffect, useState } from 'react';
import { fetchCastInfo } from 'services/apiService';
import { useParams } from 'react-router-dom';
import { BASE_IMG_URL } from 'services/constants';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await fetchCastInfo(id);
        setCast(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  return (
    <div>
      <h1>Cast</h1>
      {cast.map(({ cast_id, profile_path, name }) => (
        <li key={cast_id}>
          <img
            src={
              profile_path
                ? BASE_IMG_URL + profile_path
                : require('img/smile.jpg')
            }
            alt=""
            width="100"
          />
          {name}
        </li>
      ))}
      {isLoading && <Loader />}
      {error && toast.error('Please wait...')}
    </div>
  );
};

export default Cast;
