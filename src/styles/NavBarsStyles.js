import styled from "styled-components";

export const NavStyled = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-center;
  position: absolute;
  padding-top: 40px;
`;

export const NavIcons = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const NavLi = styled.li`
  padding: 0 0 15px 0;
  font-size: 2rem;
  display: flex;
  & > a {
    padding: 0 10px;
    color: var(--main-dark-color);
    display: flex;
    flex-direction: column;
  }
`;
