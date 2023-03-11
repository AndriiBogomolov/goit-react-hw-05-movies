import { NavLink } from 'react-router-dom';

const isActive = ({ isActive }) => (isActive ? 'active_link' : 'link');
export const Navigation = () => {
  return (
    <div className="Navigation">
      <NavLink to="/" className={isActive}>
        Home
      </NavLink>
      <NavLink to="movies" className={isActive}>
        Movies
      </NavLink>
    </div>
  );
};
