import styled from "styled-components";

export const MainBody = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Container = styled.div`
  width: 90%;
  margin: auto;
`;

export const PaddingContainer = styled.div`
  padding-top: ${({ top }) => top};
  padding-bottom: ${({ bottom }) => bottom};
  padding-left: ${({ left }) => left};
  padding-right: ${({ right }) => right};
  /* border: 2px solid red; */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: ${({ responsiveTop }) => responsiveTop};
    padding-bottom: ${({ responsiveBottom }) => responsiveBottom};
    padding-left: ${({ responsiveLeft }) => responsiveLeft};
    padding-right: ${({ responsiveRight }) => responsiveRight};
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ direction }) => direction};
  text-align: ${({ textAlign }) => textAlign};
  flex-wrap: ${({ wrap }) => wrap};
  & > div {
    flex: ${({ fullWidthChild }) => fullWidthChild && 1};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: ${({ responsiveFlex }) => (responsiveFlex ? "flex" : "block")};
    flex-direction: ${({ responsiveDirection }) => responsiveDirection};
  }
`;
export const Heading = styled(PaddingContainer)`
  color: ${({ theme }) => theme.colors.white};
  text-align: ${({ align }) => align};
  font-size: ${({ size }) => {
    switch (size) {
      case "h1":
        return "5rem";
      case "h2":
        return "4rem";
      case "h3":
        return "2.5rem";
      case "h4":
        return "1.5rem";
      default:
        return;
    }
  }};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ size }) => {
      switch (size) {
        case "h1":
          return "2.5rem";
        case "h2":
          return "2rem";
        case "h3":
          return "1.5rem";
        case "h4":
          return "1rem";
        default:
          return;
      }
    }};
  }
`;

export const BlueText = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ParaText = styled(PaddingContainer)`
  color: ${({ theme }) => theme.colors.para_text_color};
  line-height: 1.75drem;
  font-size: 1.1rem;
`;

export const IconContainer = styled.div`
  font-size: ${({ size }) => size};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ color, theme }) => {
    switch (color) {
      case "white":
        return theme.colors.white;
      case "blue":
        return theme.colors.secondary;
      default:
        return;
    }
  }};
`;

export const Button = styled.a`
  display: inline-block;
  width: max-content;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary_light};
  border: 1px solid #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary_light};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const FadeImage = styled.img`
  position: absolute;
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  z-index: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
