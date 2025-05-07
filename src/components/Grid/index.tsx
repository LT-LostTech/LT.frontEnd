import React, { ReactNode, useEffect, useState } from "react";
import { ButtonsStyledRoadmaps, DropdownButtonStyled, GridContainer, GridDropdown } from "./styled";
import { Button } from "../Button";
import { theme } from "../../theme/theme";
import close from "../../assets/Roadmaps/arrowUp.svg"
import arrowDown from "../../assets/Roadmaps/arrowDown.svg"

export interface GridProps {
  columns: number;
  gap: string;
  children: ReactNode;
  childMaxWidth?: string;
  childType?: string;
  //passa um index especifico para os meus objetos para n ter conflitos de informações e diz que vai disparar algo se for clicado
  navigate?: (index: number) => void;
}

export function Grid({ columns, gap, children,navigate,childMaxWidth,childType}: GridProps) {
  const childrenArray = React.Children.toArray(children);

  const [isMobile,setIsMobile] = useState(window.innerWidth <= 500)
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number>(6); 
  const [closeDropDown,setCloseDropdown] = useState(false)



  useEffect(()=>{
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500)
    }
    addEventListener('resize',handleResize)
    
  return () => removeEventListener('resize',handleResize)
  }
  ,[])

  const showMoreItems = () => {
    const totalItens = childrenArray.length - 6
    setVisibleItems((prev) => prev + totalItens); 
    setCloseDropdown(true)
  };


  useEffect(() => {
    if (isMobile && visibleItems < childrenArray.length) {
      setIsDropdownVisible(true);
    } else{
      setIsDropdownVisible(false);
    }
    if(!isMobile){
        setVisibleItems(childrenArray.length)
    }
  }, [visibleItems, isMobile,childrenArray.length]);



  const returnStateDropdown = () => {
    setVisibleItems((prev) => prev - 3);
    setCloseDropdown(false);
  };
    

  return (
    <GridDropdown>
      <GridContainer columns={columns} gap={gap} >
        {childrenArray.slice(0, visibleItems).map((childrenArray, index) => (
            <ButtonsStyledRoadmaps key={index} childMaxWidth={childMaxWidth} childType={childType}>
          <Button
            width={`365px`}
            height={`81px`}
            colorText={`${theme.colors.white}`}
            bgColor={"transparent"}
            fontWeight={"600"}
            text={childrenArray}
            border={`1px solid ${theme.colors.white}`}
            hoverBg={`${theme.colors.white}`}
            hoverColor={`${theme.colors.black}`}
            //?. para acessar objetos de forma segura
            // navigate?.(index)
            // Aqui só chama a função navigate se ela estiver definida.
            onClick ={() => navigate?.(index)}
          />
          </ButtonsStyledRoadmaps>
        ))}
      </GridContainer>
      {isDropdownVisible && !closeDropDown &&  (
        <DropdownButtonStyled>
          <Button
            width={`365px`}
            height={`81px`}
            colorText={`${theme.colors.white}`}
            bgColor={"transparent"}
            fontWeight={"600"}
            text={
              <img
                src={arrowDown}
                alt="botao de dropdown,assim que for clicado mostra os itens restantes"
              />
            }
            border={`none`}
            onClick={showMoreItems}
          />
        </DropdownButtonStyled>
      )}

      {closeDropDown && (
        <DropdownButtonStyled>
          <Button
            width={`365px`}
            height={`81px`}
            colorText={`${theme.colors.white}`}
            bgColor={"transparent"}
            fontWeight={"600"}
            text={
              <img
                src={close}
                alt="botao de dropdown,assim que for clicado mostra os itens restantes"
              />
            }
            border={`none`}
            onClick={returnStateDropdown}
          />
        </DropdownButtonStyled>
      )}
    </GridDropdown>
  );
}
