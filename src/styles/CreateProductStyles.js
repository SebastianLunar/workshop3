import styled from "styled-components";

export const CreateDiv = styled.div`
  padding: 10px 15px;
  & > h2 {
    font-weight: 300;
    font-size: 18px;
    text-align: center;
  }
`;

export const FileDiv = styled.div`
  background: #ebfff6;
  border-radius: 11px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    margin-right: 10px;
  }

  & > input {
    display: none;
  }
`;

export const CreateInputs = styled.div`
  padding: 20px 0;
`;

export const InputCreate = styled.input`
  background-color: var(--main-color);
  border: none;
  border-radius: 109px;
  padding: 10px 0 10px 15px;
  width: 100%;
  margin: 5px 0;
  color: var(--optional-gray-color);

  &:focus {
    outline: none;
  }
`;

export const SelectCreate = styled.select`
  background-color: var(--main-color);
  border: none;
  border-radius: 109px;
  padding: 10px 10px;
  width: 105%;
  margin: 5px 0;
  color: var(--optional-gray-color);

  &:focus {
    outline: none;
  }
`;

export const TextareaCreate = styled.textarea`
  background: rgba(180, 255, 216, 0.16);
  border-radius: 11px;
  padding: 10px 0 40px 15px;
  width: 100%;
  margin: 5px 0;
  border: none;
  resize: none;

  &:focus {
    outline: none;
  }
`;

export const ButtonCreate = styled.button`
  background: var(--main-color);
  border-radius: 109px;
  border: none;
  text-align: center;
  padding: 10px 0;
  width: 100%;

  &:active {
    transform: scale(0.95);
  }
`;
