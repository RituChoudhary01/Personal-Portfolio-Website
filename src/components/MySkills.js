import React from "react";
import {
  FlexContainer,
  PaddingContainer,
  Heading,
  IconContainer,
  ParaText,
  BlueText,
  FadeImage,
} from "../styles/Global.styled";
import { skills } from "../utils/Data";
import {
  SkillButton,
  SkillsCard,
  SkillsCardContainer,
  SkillSectionHeading,
} from "../styles/MySkills.styled";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant, fadeInTopVariant } from "../utils/Variants";
import fadeimage from "../assets/right.png";
import {
  FaCss3,
  FaReact,
  FaHtml5,
  FaNode,
  FaLinux,
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaJava ,
  FaProjectDiagram,
  FaBrain,
  FaBootstrap,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiCplusplus,
  SiGraphql,
  SiMongodb,
  SiPostman,
  SiLatex,
  SiRedux,
} from "react-icons/si";
import {
  SiChakraui,
  SiMysql,
  SiNextdotjs,
  SiExpress,
  SiFramer,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { AiOutlineApi, AiOutlinePartition } from "react-icons/ai";
const Languages = [
  {
    id: 0,
    tech: "C++",
    icon: <SiCplusplus />,
  },
  {
    id: 1,
    tech: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    id: 2,
    tech: "Java",
    icon: <FaJava />,
  },
];

const frontendSkills = [
  { id: 0, tech: "React.js", icon: <FaReact /> },
  { id: 1, tech: "JavaScript (ES6+)", icon: <SiJavascript /> },
  { id: 2, tech: "HTML5", icon: <FaHtml5 /> },
  { id: 3, tech: "CSS3", icon: <FaCss3Alt /> },
  { id: 4, tech: "Tailwind CSS", icon: <SiTailwindcss /> },
  { id: 5, tech: "Bootstrap", icon: <FaBootstrap /> },
  { id: 0, tech: "Redux", icon:<SiRedux />}
];
const backendSkills = [
  { id: 0, tech: "Node.js", icon: <FaNode /> },
  { id: 1, tech: "Express.js", icon: <SiExpress /> },
  { id: 2, tech: "MongoDB", icon: <SiMongodb /> },
  { id: 3, tech: "PostgreSQL", icon: <BiLogoPostgresql /> },
  { id: 4, tech: "MySQL", icon: <SiMysql /> },
  { id: 5, tech: "GraphQL", icon: <SiGraphql /> },
  { id: 6, tech: "REST APIs", icon: <AiOutlineApi /> },
  { id: 7, tech: "Postman", icon: <SiPostman/> },
];
const devOpsSkills = [
  { id: 0, tech: "Git", icon: <FaGit /> },
  { id: 1, tech: "GitHub", icon: <FaGithub /> },
  { id: 9, tech: "Data Structures & Algorithms", icon: <FaProjectDiagram /> },
  { id: 10, tech: "OOPS", icon: <SiCplusplus /> },
  { id: 12, tech: "Problem Solving", icon: <FaBrain /> },
  { id: 13, tech: "System Design", icon: <AiOutlinePartition /> },
  { id: 13, tech: "Latex", icon: <SiLatex /> }
];


const MySkills = () => {
  return (
    <PaddingContainer
      id="Skills"
      top="10%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <FadeImage src={fadeimage} right="0" width="inherit" />
      <Heading  size="h4"
       as={motion.h4}
       variants={fadeInTopVariant}
       initial="hidden"
       whileInView="visible"
      >
        MY SKILLS
      </Heading>
      <Heading size="h2"
       as={motion.h2}
       variants={fadeInTopVariant}
       initial="hidden"
       whileInView="visible"
      >

        What <BlueText>I can do</BlueText>
      </Heading>
      <FlexContainer
        gap="30px"
        responsiveFlex
        direction="column"
        style={{ marginTop: "4rem" }}
        as={motion.div}
        variants={fadeInLeftVariant}
        initial="hidden"  
        whileInView="visible"
      >
         <FlexContainer gap="20px" responsiveFlex wrap>
          <SkillSectionHeading>Languages</SkillSectionHeading>
          {Languages.map((skill) => (
            <SkillButton key={skill.id}>
              <IconContainer color="blue" size="1.5rem">
                {skill.icon}
              </IconContainer>{" "}
              {skill.tech}
            </SkillButton>
          ))}
        </FlexContainer> 
        <FlexContainer gap="20px" responsiveFlex wrap> 
          <SkillSectionHeading>Frontend</SkillSectionHeading>
          {frontendSkills.map((skill) => (
            <SkillButton key={skill.id}>
              <IconContainer color="blue" size="1.5rem">
                {skill.icon}
              </IconContainer>{" "}
              {skill.tech}
            </SkillButton>
          ))}
        </FlexContainer>
         <FlexContainer gap="20px" responsiveFlex wrap> 
          <SkillSectionHeading>Backend</SkillSectionHeading>
          {backendSkills.map((skill) => (
            <SkillButton key={skill.id}>
              <IconContainer color="blue" size="1.5rem">
                {skill.icon}
              </IconContainer>{" "}
              {skill.tech}
            </SkillButton>
          ))}
          </FlexContainer>
          <FlexContainer gap="20px" responsiveFlex wrap> 
            <SkillSectionHeading>Others</SkillSectionHeading>
            {devOpsSkills.map((skill) => (
              <SkillButton key={skill.id}>
                <IconContainer color="blue" size="1.5rem">
                  {skill.icon}
                </IconContainer>{" "}
                {skill.tech}
              </SkillButton>
            ))}
            </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default MySkills;
