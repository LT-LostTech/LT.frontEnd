import { User, X } from "phosphor-react";
import { Button } from "../Button";
import { theme } from "../../theme/theme";
import { useState } from "react";
import { ContainerLinksSideBar,GroupTexts, Group } from "./styled";
import { useNavigate } from "react-router-dom";
import { GetUsername } from "../../services/username";


export function SideBar() {

  const [isOpen, setIsOpen] = useState(false);
  const [isClose,setIsClose] = useState(false)
  const navigate = useNavigate();

const handleCloseSideBar =() => {
    setIsClose(false)
    if(isOpen){
      setIsOpen(isClose)
    }
  }

   const handleSideBar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    navigate("/backoffice");
    const token = localStorage.removeItem('token')
    console.log('certinho', token)
    handleCloseSideBar()
    
  };
 
  const user = GetUsername()


  return (
    <>
      <Button
          width="0"
          height="0"
          text={<User size={32} color="white" weight="bold" />}
          colorText={theme.colors.white}
          bgColor={"transparent"}
          fontWeight="bold"
          border="none"
          onClick={handleSideBar}
        />

      {isOpen && (
       <ContainerLinksSideBar >
        <Group>

            <GroupTexts>
               {user}	 
              </GroupTexts>

            <GroupTexts>
               Configurações	 
              </GroupTexts>
           
               <Button
                  width="100%"
                  height="55px"
                  colorText={theme.colors.black}
                  bgColor={theme.colors.lightGray}
                  fontWeight="600"
                  text="Sair"
                  border="none"
                  onClick={() => {
                  handleLogout();
                  }}
              />
            
           </Group>
        </ContainerLinksSideBar>
      )}
    </>
  );
}