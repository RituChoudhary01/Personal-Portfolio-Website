import React from "react";
import {
  PaddingContainer,
  Heading,
  BlueText,
  FadeImage,
} from "../styles/Global.styled";
import Project from "./Project";
import { projects } from "../utils/Data";
import { motion } from "framer-motion";
import { fadeInTopVariant } from "../utils/Variants";
import right from "../assets/right.png";

const MyProjects = () => {
  return (
    <PaddingContainer
      id="Projects"
      top="10%"
      bottom="5%"
      responsiveTop="20%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <FadeImage src={right} right="0" width="inherit" />
      <Heading
        as={motion.h4}
        size="h4"
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
      >
        MY PROJECTS
      </Heading>
      <Heading
        as={motion.h2}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
      >
        What <BlueText>I have built</BlueText>
      </Heading>
      {projects.map((item) => (
        <PaddingContainer top="5rem" bottom="5rem" key={item.id}>
          <Project data={item} />
        </PaddingContainer>
      ))}
    </PaddingContainer>
  );
};

export default MyProjects;
