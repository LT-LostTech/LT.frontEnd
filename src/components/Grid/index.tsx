import { useEffect, useState } from "react";
import {
  ButtonsStyledRoadmaps,
  DropdownButtonStyled,
  GridContainer,
  GridDropdown,
} from "./styled";
import { Button } from "../Button";
import { theme } from "../../theme/theme";
import close from "../../assets/Roadmaps/arrowUp.svg";
import arrowDown from "../../assets/Roadmaps/arrowDown.svg";
import { GridProps } from "../../interfaces/interfaces.web";
import React from "react";

export function Grid({
  columns,
  gap,
  children,
  navigate,
  childType,
  childMediaWidth,

}: GridProps) {
  const childrenArray = React.Children.toArray(children);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number>(6);
  const [closeDropDown, setCloseDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showMoreItems = () => {
    const totalItens = childrenArray.length - 6;
    setVisibleItems((prev) => prev + totalItens);
    setCloseDropdown(true);
  };

  useEffect(() => {
    if (isMobile && visibleItems < childrenArray.length) {
      setIsDropdownVisible(true);
    } else {
      setIsDropdownVisible(false);
    }
    if (!isMobile) {
      setVisibleItems(childrenArray.length);
    }
  }, [visibleItems, isMobile, childrenArray.length]);

  const returnStateDropdown = () => {
    setVisibleItems(6);
    setCloseDropdown(false);
  };

  return (
    <GridDropdown>
      <GridContainer columns={columns} gap={gap}>
        {childrenArray.slice(0, visibleItems).map((child, index) => (
          <ButtonsStyledRoadmaps
            key={index}
            childMediaWidth={childMediaWidth}
            childType={childType}
          >
            <Button
              width={"365px"}
              height={"81px"}
              colorText={theme.colors.white}
              bgColor={"transparent"}
              fontWeight={"600"}
              text={child}
              border={`1px solid ${theme.colors.white}`}
              hoverBg={theme.colors.white}
              hoverColor={theme.colors.black}
              onClick={() => navigate?.(index)}
            />
          </ButtonsStyledRoadmaps>
        ))}
      </GridContainer>

      {isDropdownVisible && !closeDropDown && (
        <DropdownButtonStyled>
          <Button
            width={"365px"}
            height={"81px"}
            colorText={theme.colors.white}
            bgColor={"transparent"}
            fontWeight={"600"}
            text={<img src={arrowDown} alt="Mostrar mais" />}
            border={"none"}
            onClick={showMoreItems}
          />
        </DropdownButtonStyled>
      )}

      {closeDropDown && (
        <DropdownButtonStyled>
          <Button
            width={"365px"}
            height={"81px"}
            colorText={theme.colors.white}
            bgColor={"transparent"}
            fontWeight={"600"}
            text={<img src={close} alt="Mostrar menos" />}
            border={"none"}
            onClick={returnStateDropdown}
          />
        </DropdownButtonStyled>
      )}
    </GridDropdown>
  );
}
