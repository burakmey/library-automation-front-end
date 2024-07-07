import styled from "styled-components";
import { Wrapper } from "../Container/Container.style";

export const TableWrapper = styled(Wrapper)`
  position: relative;
`;

export const TableContainer = styled.table`
  margin-top: 50px;
  overflow-x: auto;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  background-color: #cccccc;
`;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #f9f9f9;
  }
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableData = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

export const TableButtons = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
`;
