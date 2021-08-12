import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  height: 100%;
  /* width: ${({ widthPx }) => `${window.innerWidth - widthPx}px`}; */
  ${({ widthPx }) => `width: calc( 100% - ${widthPx}px);`}
  transition: 0.8s ease;
  margin-left: ${({ widthPx }) => `${widthPx}px`};

  @media screen and (max-width: 900px) {
    width: 100%;
    top: 60px;
    height: auto;
  }
  @media screen and (max-width: 600px) {
  }
`;
