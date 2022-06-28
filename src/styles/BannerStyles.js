import styled from "styled-components";

export const BannersDiv = styled.div`
  margin: 20px -10px 20px 20px;
  scroll-snap-type: x mandatory;
  overflow: auto;
  display: flex;
  &::-webkit-scrollbar {
    display: none;
  }
  gap: 10px;
`;

export const BannersItem = styled.div`
  scroll-snap-align: start;
  flex-shrink: 0;
  background-color: var(--main-color);
  border-radius: 11px;
  & > div {
    display: flex;
    align-items: center;
    width: 323px;
    height: 122px;
    & > div {
      padding: 10px;
      & > h2 {
        font-weight: 400;
        font-size: 14px;
        letter-spacing: -0.3px;
        color: var(--main-dark-color);
      }
      & p {
        font-weight: 300;
        font-size: 12px;
        letter-spacing: -0.3px;
        color: var(--main-dark-color);
      }
    }
    & > img {
      height: 122px;
    }
  }
`;
