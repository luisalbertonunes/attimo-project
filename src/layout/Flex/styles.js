import styled from 'styled-components';

export const FlexStyle = styled.div`
    display:flex;
    position: relative;
    padding: 0;
    margin: 0;
    
    ${({ wrap }) => wrap && `flex-wrap: ${wrap};`}
    ${({ direction }) => direction && `flex-direction: ${direction};`}
    ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
    ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}

    ${({ container }) => container
     && `
        margin: 16px auto 32px auto;
        padding: 16px;
        max-width: 1200px;
    `}

    @media(max-width:575px){
        flex-direction: column;
    }
`;