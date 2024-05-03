import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    /* COLORS */
    --header-primary: #f2f3f5;
    --font-primary: #b5bac1;
    --text-muted: #949ba4;
    --text-normal: #dbe1de;
    --text-black: #23272A;
    --input-text: #dbdee1;
    --brand-experiment: #5c64f4;
    --text-link: #00a8fc;
    --background-primary: #313338;
    --background-primary-blue: #5865f2;
    --blue-2: #404eed;
    --background-modifier-accent: #4e50587a;
    --input-background: #1e1f22;
    --background-linear: linear-gradient(to bottom, #222831, #242c38, #263140, #283547, #2a3a4f, #2d3e54, #314158, #34455d, #394960, #3e4d62, #435265, #485667);--background-radial: radial-gradient(circle, #7f8ca3, #6b7993, #576784, #435575, #2f4466, #263b5d, #1c3253, #12294a, #112543, #11213d, #0f1d36, #0e1930);
}`;

export default GlobalStyle;
