import {  useEffect, useState } from "react";
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
import { Overlay } from "../../../utils/Overlay/styled";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { GetRole } from "../../../services/role";
import { ListingRoadmapsApi } from "../../../services/roadmap/listing/api";

interface Roadmap {
    id: string | number;
    category: string;
    label: string;
    estimatedHours: number;
    // add other properties if needed
  }

interface DashboardProps {
  title: string;
  tableHeaders: string[];
  ComponentFormCreate: React.ComponentType;
  ComponentFormEdit: React.ComponentType;
}



export function Dashboard({ title, tableHeaders, ComponentFormCreate, ComponentFormEdit }: DashboardProps) {


  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);
  

useEffect(() => {
    async function fetchRoadmap() {
    try {
      const data = await ListingRoadmapsApi();
      console.log(data)
      setRoadmaps(data);
    } catch (error) {
      console.error("Error fetching roadmaps:", error);
    }
  }
  fetchRoadmap();
  },[])

  const [modalType, setModalType] = useState<"create" | "edit" | null>(
    "create"
  );
  const [isOpenModal, setIsOpenModal] = useState(false);
  const location = useLocation()

  const role =GetRole()
  const token = localStorage.getItem('token')

  useEffect(() => {
    setIsOpenModal(false)
  },[location.pathname])

  if(!token){
    return<Navigate to={'/backoffice'}/>
  }
  if(role?.toLocaleLowerCase() !=="admin"){
    return<Navigate to={'/'}/>
  }

  const handleOpenModal = (type: "create" | "edit") => {
    setModalType(type);
    setIsOpenModal(!isOpenModal);
  };  


  return (
    <DashboardPage>
      <Aside handleCloseAside={() => {}}/>
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
            onClick={() => {
              handleOpenModal("create");
            }}
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
            {roadmaps.map((data) => (
              <DashboardTableBodyRow key={data.id}>
                <DashboardTableBodyCell key={data.id} scope="row">
                  {data.category}
                </DashboardTableBodyCell>
                <DashboardTableBodyCell key={data.id} scope="row">
                  {data.label}
                </DashboardTableBodyCell>
                <DashboardTableBodyCell key={data.id} scope="row">
                  {data.estimatedHours}
                </DashboardTableBodyCell>
                <DashboardTableBodyCell>
                  <Button
                    width="128px"
                    height="40px"
                    colorText={theme.colors.white}
                    bgColor={theme.colors.gray800}
                    fontWeight="500"
                    text="Editar"
                    border="none"
                    onClick={() => {
                      handleOpenModal("edit");
                    }}
                  />
                </DashboardTableBodyCell>
              </DashboardTableBodyRow>
            ))}
          </DashboardTableBody>
        </DashboardTable>

        <Outlet />
      </DashboardContainer>
      {isOpenModal && modalType === "create" && (
        <>
          <Overlay
            onClick={() => {
              setIsOpenModal(false);
            }}
          />
          <ComponentFormCreate />
        </>
      )}
      {isOpenModal && modalType === "edit" && (
        <>
          <Overlay
            onClick={() => {
              setIsOpenModal(false);
            }}
          />
          <ComponentFormEdit />
        </>
      )}
    </DashboardPage>
  );
}
