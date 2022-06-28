import styled from "styled-components";

export const HomeDiv = styled.div`
  padding: 20px 0;
  width: 100%;

  & > span.reco {
    font-weight: 300;
    font-size: 14px;
    text-align: center;
    letter-spacing: -0.3px;
    color: var(--main-dark-color);
    margin: 0 20px;
  }
`;

export const Menu = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    font-size: 14px;
    gap: 20px;
    & > div {
      display: flex;
      flex-direction: column;
    }
  }

  & > img {
    width: 24px;
    height: 24px;
  }
`;
