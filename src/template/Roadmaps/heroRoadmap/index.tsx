import { useState, useEffect } from "react";
import { Button } from "../../../components/Button";
import { theme } from "../../../theme/theme";
import { buttons } from "../GridButton";
import arrowDown from "../../../assets/Roadmaps/arrowDown.svg"
import { ButtonsStyledRoadmaps, Grid, DropdownButtonStyled, GridDropdown } from "../GridButton/styled";
import { HeroStrongTitleRoadmaps, HeroTitleRoadmaps } from "./styled";
import close from "../../../assets/Roadmaps/arrowUp.svg"

export function HeroRoadmaps() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number>(6); 
  const [closeDropDown,setCloseDropdown] = useState(false)

  const isMobile = window.innerWidth <= 500; 


  const showMoreItems = () => {
    setVisibleItems((prev) => prev + 3); 
    setCloseDropdown(true)
  };


  useEffect(() => {
    if (isMobile && visibleItems < buttons.length) {
      setIsDropdownVisible(true);
    } else if(isMobile === false){
      setIsDropdownVisible(false);
      setVisibleItems((prev) => prev + 3);  
      
    }else{
      setIsDropdownVisible(false);
    }
  }, [visibleItems, isMobile]);



  const returnStateDropdown = () => {
      setVisibleItems((close)=> close - 3)
      setCloseDropdown(false)
    
    }
    
  

  return (
    <>
      <HeroTitleRoadmaps>
        Encontre o seu caminho na <HeroStrongTitleRoadmaps>{'</tecnologia>'}</HeroStrongTitleRoadmaps>!
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
                text={button}
                border={`1px solid ${theme.colors.white}`}
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