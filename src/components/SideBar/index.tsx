import { User, X } from "phosphor-react";
import { Button } from "../Button";
import { theme } from "../../theme/theme";
import { useState } from "react";
import { ContainerLinksSideBar,GroupTexts, Group, PositionButton } from "./styled";
import { GetUsername } from "../../services/username";


interface SideBarProps {
  onlogout: () => void;
}

export function SideBar({onlogout}:SideBarProps) {

  const [isOpen, setIsOpen] = useState(false);
  const [isClose,setIsClose] = useState(false)

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
    localStorage.removeItem('token')
    onlogout()
    handleCloseSideBar()
  };
 
  const user = GetUsername()
  console.log("user", user)


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
        <>
       <ContainerLinksSideBar >
         <PositionButton>          
          <Button

              onClick={handleCloseSideBar}
              text={<X size={20} weight="bold" color={theme.colors.white} style={{ cursor: 'pointer' }} />}
              colorText={theme.colors.white}
              bgColor={"transparent"}
              fontWeight={""}
              border={"none"} width={""} height={""}               
                />
           </PositionButton>
        <Group>
            <GroupTexts>
               {user?.toLocaleLowerCase()}	 
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
        </>
      )}
    </>
  );
}