import styled from "styled-components";
export const StyledLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: inherit;
`;

export const ShowcaseParticleContainer = styled.div`
  position: relative;
  /* border: 5px solid red; */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
export const ShowcaseImageCard = styled.div`
  position: relative;
  overflow: hidden;
  height: 460px;
  width: max-content;
  object-fit: cover;
  object-position: center;
`;
export const Image = styled.img`
  border-radius: 5%;
  height: 100%;
  margin-right: 20px;
`;

export const Particle = styled.img`
  position: absolute;
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  transform: rotate(${({ rotate }) => rotate});
`;
export const ResumeButoon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 8px;
  gap: 8px;
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
