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
}

export function Grid({ columns, gap, children }: GridProps) {
  const childrenArray = React.Children.toArray(children);

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number>(6);
  const [closeDropDown, setCloseDropdown] = useState(false);

  const isMobile = window.innerWidth <= 500;

  const showMoreItems = () => {
    setVisibleItems((prev) => prev + 3);
    setCloseDropdown(true);
  };

  useEffect(() => {
    if (isMobile && visibleItems < childrenArray.length) {
      setIsDropdownVisible(true);
    } else if (isMobile === false) {
      setIsDropdownVisible(false);
      setVisibleItems((prev) => prev + 3);
    } else {
      setIsDropdownVisible(false);
    }
  }, [visibleItems, isMobile]);

  const returnStateDropdown = () => {
    setVisibleItems((close) => close - 3);
    setCloseDropdown(false);
  };

  return (
    <GridDropdown>
      <GridContainer columns={columns} gap={gap}>
        {childrenArray.slice(0, visibleItems).map((childrenArray, index) => (
            <ButtonsStyledRoadmaps key={index}>
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
          />
          </ButtonsStyledRoadmaps>
        ))}
      </GridContainer>
      {isDropdownVisible && (
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
