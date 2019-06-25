import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto+Slab|Roboto:300,400,500,700&display=swap');
    
    * {
        box-sizing: border-box;

        &:before {
        box-sizing: inherit;
        }

        &:after {
        box-sizing: inherit;
        }
    }

    html {
        overflow-y: scroll;
        text-size-adjust: 100%;
        scroll-behavior: smooth;
        height:100%;
    }

    body {
        background-color: #fafafa;
        margin: 0;
        height:100%;
    }

    @media only screen and (max-width: 480px) {
        html {
        font-size: 100%;
        }
    }
`;