import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  width: 100%;
  position: fixed;
  top: 1rem;
`;

const HeaderWrapper = styled(Responsive)`
  display: flex;
  background: #fff;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 13px;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
  color: #0c4ccb;
  overflow: hidden;
  
  .logo {
    display: flex;
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 1rem;
    background: #0c4ccb;
    color: #fff;
    height: 100%;
    align-items: center;
  }
`;

const SpaceBlock = styled.div`
  height: 4rem;
`;

const Header = () => {
  return (
      <>
        <HeaderBlock>
          <HeaderWrapper>
            <Link to="/" className="logo">
              Class #3
            </Link>
          </HeaderWrapper>
        </HeaderBlock>
        <SpaceBlock />
      </>
  );
};

export default Header;