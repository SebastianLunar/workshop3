import styled from "styled-components";

export const CardsGrid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 15px;
`;

export const CardDiv = styled.div`
  width: 170px;
  background: #ebfff6;
  border-radius: 11px;
  & > img {
    width: 170px;
    height: 108px;
    border-radius: 11px;
  }
`;

export const CardText = styled.div`
  padding: 0 10px 10px;

  & > h3 {
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.3px;
    color: var(--main-dark-color);
  }

  & > span {
    font-weight: 300;
    font-size: 10px;
    text-align: center;
    letter-spacing: -0.3px;
    color: var(--optional-gray-color);
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.title {
      text-overflow: ellipsis;
      text-align: left;
    }

    & > span {
      font-weight: 300;
      font-size: 10px;
      text-align: center;
      letter-spacing: -0.3px;
      color: var(--main-dark-color);

      & > img {
        margin-right: 5px;
      }
    }
  }
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const CardButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
`;
