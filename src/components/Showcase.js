import React from "react";
import { motion } from "framer-motion";
import {
  PaddingContainer,
  Heading,
  ParaText,
  FlexContainer,
  BlueText,
  IconContainer,
} from "../styles/Global.styled";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import {
  ShowcaseParticleContainer,
  ShowcaseImageCard,
  Image,
  StyledLink,
} from "../styles/Showcase.styled";
import showcaseImage from "../assets/profile.png"
import BackgroundImage from "../assets/particle.png";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";
import { TypeAnimation } from "react-type-animation";

const Showcase = () => {
  return (
    <PaddingContainer
      id="Home"
      left="3%"
      right="8%"
      top="12%"
      bottom="10%"
      responsiveTop="8rem"
      responsiveLeft="1rem"
      responsiveRight="1rem"
      style={{
      }}
    >
      <FlexContainer align="center" justify="space-between">
        {/*left content */}
        <motion.div
          style={{ textAlign: "left" }}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          <Heading as="h2" size="h2" top="0.5rem" bottom="1rem">
            <span style={{
              'font-size': '2rem',
            }}>Hello, I'm </span><BlueText>Ritu Choudhary</BlueText>
          </Heading>
          <Heading as="h3" size="h3">
            A{" "}
            <BlueText>
              <TypeAnimation
                sequence={[
                  "FullStack developer",
                  1000,
                  "Problem solver",
                  1000,
                  "Tech enthusiast",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </BlueText>
          </Heading>
          <Heading as="h3" size="h3" top="0.5rem" bottom="1rem">Based in India.</Heading>
          <ParaText as="p" top="1rem" bottom="3rem" style={{
            maxWidth: "80%",
          }}>

<section className="about-me">
  <h2>👋 About Me</h2>
  <p>
    I'm a passionate and dedicated web developer currently pursuing my Master's in
    <strong>Mathematics and Computing</strong> at <strong>IIT (ISM) Dhanbad</strong>,
    in <strong>May 2025</strong>.
  </p>
  <p>
    I specialize in building modern, responsive, and user-friendly web applications
    using technologies like <strong>HTML, CSS, JavaScript, React.js, Node.js, and MongoDB</strong>.
  </p>
  <p>
    My goal is to create digital solutions that are not just visually appealing but also solve real-world problems.
  </p>
  <p>
    I'm actively working on full-stack projects, polishing my DSA skills, and preparing for exciting opportunities in software development.
  </p>
  <p>
    Let's connect and build something great together!
  </p>
</section>
          </ParaText>
         

          {/* social icons */}
          <FlexContainer gap="20px" responsiveFlex>
            <IconContainer color="white" size="2rem">
              <StyledLink
                target="blank"
                href="https://www.linkedin.com/in/ritu-choudhary-973a50287/"
              >
                <BsLinkedin />
              </StyledLink>
            </IconContainer>
            <IconContainer color="white" size="2rem">
              <StyledLink target="blank" href="https://github.com/RituChoudhary01">
                <BsGithub />
              </StyledLink>
            </IconContainer>
            <IconContainer color="white" size="2rem">
              <StyledLink target="blank" href="https://leetcode.com/u/00RituChoudhary01/">
                <SiLeetcode />
              </StyledLink>
            </IconContainer>

          </FlexContainer>
         
        </motion.div>

        {/* right content */}
        <FlexContainer
          as={motion.div}
          align="flex-end"
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
              
        >
          <ShowcaseParticleContainer>
            <ShowcaseImageCard>
              <Image src={showcaseImage} alt="profile" />
            </ShowcaseImageCard>
          </ShowcaseParticleContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default Showcase;
