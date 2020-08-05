import React from 'react';
import styled from 'styled-components';

const AuthTemplateBlock = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #2E97F2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhiteBlock = styled.div`
  background: #fff;
  padding: 3rem 5rem;
  border-radius: 10px;  
  width: 500px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
`;

const AuthTemplate = ({children}) => {
    return (
        <AuthTemplateBlock>
            <WhiteBlock>
                {children}
            </WhiteBlock>
        </AuthTemplateBlock>
    );
};

export default AuthTemplate;