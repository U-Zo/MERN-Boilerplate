import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const AuthFormBlock = styled.div`
  h3 {
    color: #2b2b2b;
    text-align: center;
    margin-bottom: 1.5rem;
    font-weight: bold;
    font-size: 1.2rem;
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
    border-bottom: 1px solid #828282;
  }
  & + & {
    margin-top: 2rem;
  }
`;

const ButtonWithMargin = styled(Button)`
  margin-top: 1rem;
`;

const AuthForm = () => {
    return (
        <AuthFormBlock>
            <h3>로그인</h3>
            <form>
                <StyledInput
                    autoComplete="username"
                    name="username"
                    placeholder="아이디"
                />
                <StyledInput
                    autoComplete="new-password"
                    name="password"
                    placeholder="비밀번호"
                    type="password"
                />
                <ButtonWithMargin fullWidth>
                    로그인
                </ButtonWithMargin>
            </form>
        </AuthFormBlock>
    );
};

export default AuthForm;