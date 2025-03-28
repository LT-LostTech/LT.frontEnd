import { Aside } from "../../../components/Aside";
import { Button } from "../../../components/Button";
import { theme } from "../../../theme/theme";
import {
  DashboardContainer,
  DashboardLabelContainer,
  DashboardLabelText,
  DashboardTableHeaderCell,
  DashboardTable,
  DashboardTableHeader,
  DashboardTableHeaderRow,
  DashboardPage,
  DashboardTableBody,
  DashboardTableBodyRow,
  DashboardTableBodyCell,
} from "./styled";

interface DashboardProps {
  title: string;
  tableHeaders: string[];
}

const tableData = [
  {
    name: "teste",
    description: "teste",
    status: "teste",
    actions: "teste",
  },
  {
    name: "teste",
    description: "teste",
    status: "teste",
    actions: "teste",
  },
  {
    name: "teste",
    description: "teste",
    status: "teste",
    actions: "teste",
  },
];

export function Dashboard({ title, tableHeaders }: DashboardProps) {
  return (
    <DashboardPage>
      <Aside />
      <DashboardContainer>
        <DashboardLabelContainer>
          <DashboardLabelText>{title}</DashboardLabelText>
          <Button
            width="244px"
            height="55px"
            colorText={theme.colors.white}
            bgColor={theme.colors.gray800}
            fontWeight="600"
            text="Criar"
            border="none"
          />
        </DashboardLabelContainer>

        <DashboardTable>
          <DashboardTableHeader>
            <DashboardTableHeaderRow>
              {tableHeaders.map((header, key) => (
                <DashboardTableHeaderCell key={key} scope="col">
                  {header}
                </DashboardTableHeaderCell>
              ))}
              <DashboardTableHeaderCell></DashboardTableHeaderCell>
            </DashboardTableHeaderRow>
          </DashboardTableHeader>
          <DashboardTableBody>
            {tableData.map((data, key) => (
              <DashboardTableBodyRow key={key}>
                <DashboardTableBodyCell key={key} scope="row">
                  {data.name}
                </DashboardTableBodyCell>
                <DashboardTableBodyCell key={key} scope="row">
                  {data.description}
                </DashboardTableBodyCell>
                <DashboardTableBodyCell key={key} scope="row">
                  {data.status}
                </DashboardTableBodyCell>
                <DashboardTableBodyCell>
                  <Button
                    width="128px"
                    height="35px"
                    colorText={theme.colors.white}
                    bgColor={theme.colors.gray800}
                    fontWeight="500"
                    text="Editar"
                    border="none"
                  />
                </DashboardTableBodyCell>
              </DashboardTableBodyRow>
            ))}
          </DashboardTableBody>
        </DashboardTable>
      </DashboardContainer>
    </DashboardPage>
  );
}
