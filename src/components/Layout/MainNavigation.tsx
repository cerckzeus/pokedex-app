import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

const MainNavigation = () => {
  return (
    <Nav>
      <NavLink to="/">POKEDEX</NavLink>
    </Nav>
  );
};
const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 10 !important;
  background: #f03131;
  height: 85px;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;

  overflow-x: hidden;
  padding: 0.5rem calc((100vw-1000px) / 2);
`;

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #fff;
  }
  &:hover {
    color: #fff;
  }
`;

export default MainNavigation;
