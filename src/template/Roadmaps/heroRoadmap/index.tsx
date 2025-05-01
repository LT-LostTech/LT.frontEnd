import { useState, useEffect } from "react";
import { Button } from "../../../components/Button";
import { theme } from "../../../theme/theme";
import { buttons } from "../GridButton";
import arrowDown from "../../../assets/Roadmaps/arrowDown.svg"
import { ButtonsStyledRoadmaps, Grid, DropdownButtonStyled, GridDropdown } from "../GridButton/styled";
import { StrongTitle, HeroTitleRoadmaps } from "./styled";
import close from "../../../assets/Roadmaps/arrowUp.svg"
import { useNavigate } from "react-router-dom";

export function HeroRoadmaps() {
  const[isMobile,setIsMobile] = useState(window.innerWidth <= 500)
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number>(6); 
  const [closeDropDown,setCloseDropdown] = useState(false)

  const navigate = useNavigate()

  useEffect(()=>{
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500)
    }
    addEventListener('resize',handleResize)
    
  return () => removeEventListener('resize',handleResize)
  }
  ,[])

  const showMoreItems = () => {
    setVisibleItems((prev) => prev + 3); 
    setCloseDropdown(true)
  };


  useEffect(() => {
    if (isMobile && visibleItems < buttons.length) {
      setIsDropdownVisible(true);
    } else{
      setIsDropdownVisible(false);
    }
  }, [visibleItems, isMobile]);



  const returnStateDropdown = () => {
    setVisibleItems((prev) => prev - 3);
    setCloseDropdown(false);
  };
    
  

  return (
    <>
      <HeroTitleRoadmaps>
        Encontre o seu caminho na <StrongTitle>{'</tecnologia>'}</StrongTitle>!
      </HeroTitleRoadmaps>

      <GridDropdown>
        <Grid>
          {buttons.slice(0, visibleItems).map((button, index) => (
            <ButtonsStyledRoadmaps key={index}>
              <Button
                width={`365px`}
                height={`81px`}
                colorText={`${theme.colors.white}`}
                bgColor={"transparent"}
                fontWeight={"600"}
                text={button.name}
                border={`1px solid ${theme.colors.white}`}
                onClick={() => navigate(button.path)}
              />
            </ButtonsStyledRoadmaps>
          ))}
        </Grid>


        {isDropdownVisible && (
          <DropdownButtonStyled>
            <Button
              width={`365px`}
              height={`81px`}
              colorText={`${theme.colors.white}`}
              bgColor={"transparent"}
              fontWeight={"600"}
              text={<img src={arrowDown} alt="botao de dropdown,assim que for clicado mostra os itens restantes"/>}
              border={`none`}
              onClick={showMoreItems} 
              
            />
            </DropdownButtonStyled>
        )}
         
          {closeDropDown&& (
            <DropdownButtonStyled>
             <Button
             width={`365px`}
             height={`81px`}
             colorText={`${theme.colors.white}`}
             bgColor={"transparent"}
             fontWeight={"600"}
             text={<img src={close} alt="botao de dropdown,assim que for clicado mostra os itens restantes"/>}
             border={`none`}
             onClick={returnStateDropdown} 
 
             />
             </DropdownButtonStyled>
          )}

      </GridDropdown>
    </>
  );
}