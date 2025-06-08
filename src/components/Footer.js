import React, { useState } from "react";
import {
  PaddingContainer,
  Heading,
  BlueText,
  FlexContainer,
  Button,
} from "../styles/Global.styled";
import { ContactForm, FormInput, FormLabel } from "../styles/Footer.styled";
import { motion } from "framer-motion";
import { fadeInBottomVariant } from "../utils/Variants";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("called");
    const service_id = "service_ee883ka";
    const template_id = "template_swbrhyc";
    const public_key = "dJGz-Aaa35bKDYoM1";
    const template_params = {
      from_name: name,
      from_email: email,
      to_name: "Ritu Choudhary",
      message: message,
    };
    emailjs
      .send(service_id, template_id, template_params, public_key)
      .then((res) => {
        toast.success("Email sent successfully");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        toast.error("Error sending email");
      });
  };

  return (
    <PaddingContainer
      id="Contact"
      top="10%"
      bottom="10%"
      responsiveRight="1rem"
      responsiveLeft="1rem"
      style={{
        overflow: "hidden",
      }}
    >
      <Heading
        as={motion.h4}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
        align="center"
      >
        MY CONTACT
      </Heading>
      <Heading
        as={motion.h2}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
        align="center"
        top="0.5rem"
      >
        Contact <BlueText>Me Here</BlueText>
      </Heading>

      <PaddingContainer top="3rem">
        <FlexContainer justify="center">
          <ContactForm
            as={motion.form}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible"
            onSubmit={handleSubmit}
          >
            <PaddingContainer bottom="2rem">
              <FormLabel>Name:</FormLabel>
              <FormInput
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></FormInput>
            </PaddingContainer>
            <PaddingContainer bottom="2rem">
              <FormLabel>Email:</FormLabel>
              <FormInput
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></FormInput>
            </PaddingContainer>
            <PaddingContainer bottom="2rem">
              <FormLabel>Message:</FormLabel>
              <FormInput
                as="textarea"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></FormInput>
            </PaddingContainer>

            <FlexContainer justify="center" responsiveFlex>
              <button type="submit">
                <Button>Send Message</Button>
              </button>
            </FlexContainer>
          </ContactForm>
        </FlexContainer>
      </PaddingContainer>
    </PaddingContainer>
  );
};

export default Footer;
