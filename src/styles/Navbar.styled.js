import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  transition: all 0.3s ease-in;
  background-color: ${({ bgColor }) => bgColor};
`;

export const Logo= styled.p`
    font-size:1.7rem;
    font-weight: ${({theme})=>theme.fonts.weight.medium};
    color: white;
`
export const MenuIcon= styled.a`
    color: ${({theme})=>theme.colors.secondary};
    font-size:1.6rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
    }


`
export const NavMenuButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px solid;
  border-radius: 20px;
  transition: all 0.3s ease;
  font-size: '1.25rem';
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary_light};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1rem;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary_light};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
export const NavMenuContainer=styled.div`
    position: fixed;
    top:0;
    left:0;
    height: 100vh;
    width:100%;
    background-color:  ${({theme})=>theme.colors.primary_light};
    z-index: 1;
`

export const MenuItem=styled.a`
    color: #fff;
    font-size: 2rem;
    margin-top: 3rem;
    cursor: pointer;
    text-decoration: none;
`