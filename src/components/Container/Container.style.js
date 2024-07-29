import styled from "styled-components";

export const MainContainer = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: auto;
  background: ${({ $styles }) => $styles?.background};
`;

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  z-index: -9;
  background: ${({ $styles }) => $styles?.background};
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
export const InputContainer = styled.div`
  text-align: left;
  width: 100%;
  margin: 20px 0 0;
`;
export const HeroSectionContainer = styled.div`
  background-image: linear-gradient(to bottom, #222831, #242c38, #263140, #283547, #2a3a4f, #2d3e54, #314158, #34455d, #394960, #3e4d62, #435265, #485667);
  height: 400px;
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;
