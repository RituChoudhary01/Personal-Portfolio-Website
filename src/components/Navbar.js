import React, { useEffect, useState } from "react";
import {
  FlexContainer,
  PaddingContainer,
  Container,
  BlueText,
} from "../styles/Global.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavbarContainer, Logo, MenuIcon, NavMenuButton } from "../styles/Navbar.styled";
import { theme } from "../utils/Theme";
import NavMenu from "./NavMenu";
import { AnimatePresence, motion } from "framer-motion";
import { ResumeButoon } from "../styles/Showcase.styled";
import { navLinks, resumeLink } from "../utils/Data";
import { FaDownload } from "react-icons/fa6";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <NavbarContainer bgColor={sticky ? theme.colors.primary : "transparent"}>
      <PaddingContainer
        top="2rem"
        bottom="2rem"
        responsiveLeft="1rem"
        responsiveRight="1rem"
        responsiveTop="1rem"
        responsiveBottom="1rem"
      >
        <Container>
          <FlexContainer justify="space-between" responsiveFlex>
            {/* letf-logo */}
            <div onClick={scrollToTop}>
              <Logo>
                Ritu<BlueText>.dev</BlueText>
              </Logo>
            </div>
            {/* middle-content */}
            <FlexContainer align="center" justify="center" gap="12px" responsiveFlex>
              {
                navLinks.map((link, index) => {
                  return (
                    <NavMenuButton key={index}
                        whileHover={{scale: 1.2}}
                        href={`#${link.href}`}  onClick={()=>setOpenMenu(false)}>{link.name}</NavMenuButton>
                  );
                })
              }
               
            </FlexContainer>
            <ResumeButoon href={resumeLink} target="blank">
              Resume
              <span
                style={{
                  paddingTop: "3px",
                }}
              >
                <FaDownload size={16} />
              </span>
            </ResumeButoon>

            <MenuIcon
              as={motion.a}
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                setOpenMenu(true);
              }}
            >
              {" "}
              <GiHamburgerMenu />
            </MenuIcon>
          </FlexContainer>
        </Container>

        <AnimatePresence>
          {openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
        </AnimatePresence>
      </PaddingContainer>
    </NavbarContainer>
  );
};

export default Navbar;
