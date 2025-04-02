import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const DashboardPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const DashboardContainer = styled.main`
  width: 100%;
  height: auto;
  background-color: ${theme.colors.white};
  padding: 49px;
  gap: 32px;
  display: flex;
  flex-direction: column;


  @media (max-width: 430px) {
    padding: 30px;
  }
`;

export const DashboardLabelContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 430px) {
    button {
      width: 152px;
    }
  }
`;

export const DashboardLabelText = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${theme.colors.black};
`;

export const DashboardTable = styled.table`
  width: 100%;
  height: 100%;
  border-spacing: 8px;
  border-collapse: collapse;

  @media (max-width: 1024px) {
    border-spacing: 2px;
  }
`;

export const DashboardTableHeader = styled.thead`
  width: 100%;
  height: 76px;
`;

export const DashboardTableHeaderRow = styled.tr`
  height: auto;
  width: 100%;
  border-bottom: 1px solid ${theme.colors.gray400};
`;

export const DashboardTableHeaderCell = styled.th`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.gray400};
  text-align: left;
  padding: 0 20px;
  height: auto;

  @media (max-width: 430px) {
    &:nth-child(2),
    &:nth-child(3) {
      display: none;
    }
  }
`;

export const DashboardTableBody = styled.tbody`
  width: auto;
  height: 100%;
`;

export const DashboardTableBodyRow = styled.tr`
  height: 51px;
  width: 100%;
  border-top: 1px solid ${theme.colors.gray400};
  padding: 8px;
  
`;

export const DashboardTableBodyCell = styled.td`
  font-size: 14px;
  font-weight: 400;
  color: ${theme.colors.gray400};
  padding: 0 20px;
  height: auto;
  text-align: left;

  @media (max-width: 430px) {
    &:nth-child(2),
    &:nth-child(3) {
      display: none;
    }
  }
`;
