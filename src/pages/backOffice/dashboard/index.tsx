import { useEffect, useState } from "react";
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
import { ListingChallengesApi } from "../../../services/challenges/listing/api";

interface Roadmap {
  id: number | null;
  category: string;
  label: string;
  estimatedHours: number;
}

interface Challenge {
  id: number | null;
  category: string;
  labels: string;
  estimatedHours: number;
  title: string;
  description: string;
  difficulty: string;
}

interface DashboardProps {
  title: string;
  tableHeaders: string[];
  ComponentFormCreate: React.ComponentType<{updateBackoffice?: () => void}>;
  //basicamente to falando que o componente vai receber uma prop id que pode ser um número ou nulo
  ComponentFormEdit:  React.ComponentType< 
  {
    id:number | null; 
    onUpdate: () => void;
  } >;
  
}



export function Dashboard({ title, tableHeaders, ComponentFormCreate, ComponentFormEdit }: DashboardProps) {


  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);
  const [challengs, setChallenges] = useState<Challenge[]>([]);
  const [deleteBackoffice, setDeleteBackoffice] = useState<number | null>(null);
  const [isChallenges, setIsChallenges] = useState(false);


    async function fetchRoadmap() {
      try {
        const data = await ListingRoadmapsApi();
        setRoadmaps(data);
      } catch (error) {
        console.error("Error fetching roadmaps:", error);
      }
    }

    async function fetchChallenges() {
      try {
        const challengeData = await ListingChallengesApi() ;
        setChallenges(challengeData);
      } catch (error) {
        console.error("Error fetching roadmaps:", error);
      }
    }

  useEffect(() => {
    fetchRoadmap();
    fetchChallenges();
  },[])

  const [modalType, setModalType] = useState<"create" | "edit" | null>(
    "create"
  );
  const [isOpenModal, setIsOpenModal] = useState(false);
  const location = useLocation()

  const role = GetRole()
  const token = localStorage.getItem('token')

  useEffect(() => {
    setIsOpenModal(false)
  }, [location.pathname])

  useEffect(() => {
    if(location.pathname === "/backoffice/dashboard/challenges"){
      setIsChallenges(false)
    }
    else{
      setIsChallenges(true)
    }
  }, [location.pathname]);

  if (!token) {
    return <Navigate to={'/backoffice'} />
  }
  if (role?.toLocaleLowerCase() !== "admin") {
    return <Navigate to={'/'} />
  }

  const handleOpenModal = (type: "create" | "edit") => {
    setModalType(type);
    setIsOpenModal(!isOpenModal);
  };

    return (
      <DashboardPage>
        <Aside handleCloseAside={() => { }} />
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
            {isChallenges &&(
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
                  <DashboardTableBodyCell scope="row">
                    {data.label}
                  </DashboardTableBodyCell>
                  <DashboardTableBodyCell scope="row">
                    {data.category}
                  </DashboardTableBodyCell>
                  <DashboardTableBodyCell scope="row">
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
                        setDeleteBackoffice(data.id);
                        handleOpenModal("edit");
                      }}
                    />
                  </DashboardTableBodyCell>
                </DashboardTableBodyRow>
              ))}
            </DashboardTableBody>
          </DashboardTable>
          )}
{!isChallenges &&(
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
              {challengs.map((challenge) => (
                <DashboardTableBodyRow key={challenge.id}>
                  <DashboardTableBodyCell scope="row">
                    {challenge.title}
                  </DashboardTableBodyCell>
                  <DashboardTableBodyCell scope="row">
                    {challenge.category}
                  </DashboardTableBodyCell>
                  <DashboardTableBodyCell scope="row">
                    {challenge.labels}
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
                        setDeleteBackoffice(challenge.id);
                        handleOpenModal("edit");
                      }}
                    />
                  </DashboardTableBodyCell>
                </DashboardTableBodyRow>
              ))}
            </DashboardTableBody>
          </DashboardTable>
)}
          <Outlet />
        </DashboardContainer>
        {isOpenModal && modalType === "create" && (
          <>
            <Overlay
              onClick={() => {
                setIsOpenModal(false);
              }}
            />
            <ComponentFormCreate updateBackoffice={isChallenges? fetchRoadmap : fetchChallenges} />
          </>
        )}
        {isOpenModal && modalType === "edit" && (
          <>
            <Overlay
              onClick={() => {
                setIsOpenModal(false);
              }}
            />
            <ComponentFormEdit id={deleteBackoffice} onUpdate={isChallenges? fetchRoadmap : fetchChallenges}/>
          </>
        )}
      </DashboardPage>
    );
  }

