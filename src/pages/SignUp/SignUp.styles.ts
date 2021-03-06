import styled, { keyframes } from 'styled-components';
import background from 'assets/sign-up.png';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Animation = styled.div`
  display: flex;
  place-content: center;
  flex-direction: column;
  align-items: center;

  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;
export const Content = styled.div`
  display: flex;
  place-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;
`;

export const BackgroundImage = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center;
  background-size: cover;
`;
