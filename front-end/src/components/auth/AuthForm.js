import React from 'react';
import styled from "styled-components";

const AuthFormBlock = styled.div`
  h3 {
    color: #636363;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 3rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  transition: all ease-in 0.2s;
  border-bottom: 1px solid #e5e5e5;
  &:focus {
    // color: $oc-teal-7;
    border-bottom: 1px solid #828282;
  }
  & + & {
    margin-top: 2rem;
  }
`;

const AuthForm = () => {
    return (
        <AuthFormBlock>
            <h3>Login</h3>
            <form>
                <StyledInput
                    autoComplete="username"
                    name="username"
                    placeholder="Username"
                />
                <StyledInput
                    autoComplete="new-password"
                    name="password"
                    placeholder="Password"
                    type="password"
                />
            </form>
        </AuthFormBlock>
    );
};

export default AuthForm;