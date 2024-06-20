import styled from "styled-components";
import { Wrapper } from "../Container/Container.style";
import { Link } from "react-router-dom";

export const PanelWrapper = styled(Wrapper)`
  position: fixed;
  height: 80%;
`;
export const PanelGrid = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-columns: 1fr;
  grid-gap: 20px;
`;
export const PanelItem = styled(Link)`
  background-color: #222831;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 20px;
  cursor: pointer;
`;
