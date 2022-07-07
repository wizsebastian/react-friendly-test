import styled from 'styled-components';

export const Tr = styled.tr`
    background: #F7F7F8;
     border-radius: 22px;
`;

export const Avatar = styled.img`
  width: 30px;
    height: 30px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TableContainer = styled.div`
    height: 60vh;
    overflow-y: scroll;
`

export const EmptyState = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 27px;
    font-style: italic;
    width: 100%;
    height: 50vh;
    flex-direction: column;
    color: #938b8b;
  
`