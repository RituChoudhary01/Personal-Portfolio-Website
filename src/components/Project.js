import React from "react";
import {
  PaddingContainer,
  Heading,
  FlexContainer,
  ParaText,
  IconContainer,
  Button,
  BlueText,
} from "../styles/Global.styled";
import { FaGithub } from "react-icons/fa";
import {
  ProjectImage,
  ProjectImageContainer,
  TechStackCard,
  GithubButton,
} from "../styles/MyProjects.styled";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";

const Project = ({ data }) => {
  return (
    <FlexContainer
      fullWidthChild
      direction={data.reverse ? "row-reverse" : false}
      style={{
        marginLeft: '2rem',
        marginRight: '2rem',
      }}
    >
      {/* left-section */}
      <motion.div
        variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
        style={{
          display: "relative",
          zIndex: 10,
        }}
      >
        <FlexContainer
          gap="1rem"
          align="center"
          justify="flex-start"
          textAlign="left"
        >
          <Heading as="h3" size="h3" bottom="1rem">
            {data.project_name}
          </Heading>
          <IconContainer color="blue" size="2rem">
            <GithubButton href={data.github_link} target="blank">
              <FaGithub />
            </GithubButton>
          </IconContainer>
        </FlexContainer>

        <PaddingContainer top="1rem">
          <FlexContainer gap="1.5rem" wrap="wrap">
            {data.tech_stack.map((stack, index) => (
              <TechStackCard key={index}>{stack}</TechStackCard>
            ))}
          </FlexContainer>
        </PaddingContainer>

        <ParaText top="1.5rem">{data.project_desc}</ParaText>
        <ParaText top="0.5rem" bottom="2rem">
          <BlueText>
            {" "}
            <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
              Features:{" "}
            </span>
          </BlueText>

          {data.features}
        </ParaText>
        {/* <Button href={data.project_url} target="blank">
          Visit website
        </Button> */}
        {data.project_url && (
        <Button href={data.project_url} target="_blank">
      Visit website
      </Button>
)}

      </motion.div>
      <ProjectImageContainer
        as={motion.div}
        variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
        justify={data.reverse ? "flex-start" : "flex-end"}
      >
        <ProjectImage src={data.project_img}></ProjectImage>
      </ProjectImageContainer>
    </FlexContainer>
  );
};

export default Project;
