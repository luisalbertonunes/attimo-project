import styled from 'styled-components';

export const DefaultStyle = styled.h1`
    font-family: 'Roboto Slab', serif;
    font-size: 2rem;
    color: #333;
`;

export const MainTitle = styled.h1`
    font-family: 'Roboto Slab', serif;
    font-size: 2rem;
    text-align: ${(props) => props.align || 'left'};
    color: ${(props) => props.color || '#333'};
`