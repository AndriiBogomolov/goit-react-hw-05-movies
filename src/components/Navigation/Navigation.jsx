import { NavLink } from 'react-router-dom';

// const isActive = ({ isActive }) => (isActive ? 'active_link' : 'link');
export const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="movies">Movies</NavLink>
    </div>
  );
};
