import { createGlobalStyle } from "styled-components";
import "@fontsource/ubuntu"

const GlobalStyles = createGlobalStyle`

*,*::before,*::after{

}

body { 
    font-family: "Ubuntu", sans-serif;
    overflow-x: hidden;
}

a{
    color: inherit;
    text-decoration:none;
}
`
export default GlobalStyles;