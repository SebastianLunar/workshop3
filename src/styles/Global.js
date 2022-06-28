import styled from 'styled-components'

export const Boton = styled.button`
    background-color: #2BE7E8;
    border-radius: 35px;
    font-size: 18px;
    width: 358px; height: 44px;
    margin: 0 auto;
    border: none;
    color: white;
    &.down{
        position: absolute;
        bottom: 40px;
        right: 0;
        left: 0;
    }
`;

export const SOCIAL = styled.div`
    display: flex; margin: 0 auto;
    width: 72px; height: 29px;
    justify-content: space-between; align-items: center;
    margin-bottom: 89px;
`;

export const DIVInput = styled.div`
    display: grid;
    border-bottom: solid #A7A7A7 1px;
    margin: 1rem;
`;
export const Input = styled.input`
    border: none;
    background-color: #2E3562;
    border-radius: 44px;
    width: 326px; height: 44px;
    padding: 0 1rem;
    color: white;
    ::placeholder{
        color: white;
    }
`
export const DIVTags = styled.div`
    display: flex; flex-wrap: wrap;
    justify-content: center; gap: 6px;
`
export const DIVTabs = styled.div`
    display: flex;
    background: #2E3562;
    border-radius: 62px;
    width: fit-content;
    margin: 1rem auto;
`
export const ADVICES = styled.div`
    display: flex; justify-content: center;
    overflow-x: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`
export const Botab = styled.button`
    min-width: 179px; height: 2rem;
    border-radius: 62px;
    background: #2E3562; color: white;
    border: none;
    display: flex; justify-content: center; align-items: center;
    font-weight: 500;
    font-size: 18px;
    padding: 0;
    &.active{
        background: #2BE7E8
    }
`
export const Botag = styled.button`
    min-width: 3.5rem; height: 1rem;
    border-radius: 37px;
    background: #2E3562; color: white;
    border: none;
    display: flex; justify-content: center; align-items: center;
    font-weight: 300;
    font-size: 10px;
`