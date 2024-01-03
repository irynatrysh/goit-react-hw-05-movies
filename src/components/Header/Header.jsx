import React from 'react';
import { Outlet } from 'react-router-dom'; // Импорт Outlet
import {
  HeaderDiv,
  HeaderItem,
  HeaderList,
  HeaderNavLink,
} from './HeaderStyled';

const Header = () => {
  return (
    <>
      <HeaderDiv>
        <HeaderList>
          <HeaderItem>
            <HeaderNavLink to="/">HOME</HeaderNavLink>
          </HeaderItem>
          <HeaderItem>
            <HeaderNavLink to="/movies">MOVIES</HeaderNavLink>
          </HeaderItem>
        </HeaderList>
      </HeaderDiv>
      {/* Outlet для рендеру вкладенних маршрутів */}
      <Outlet />
    </>
  );
};

export default Header;
