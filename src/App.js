import React from "react";
import { Container, MainBody, FadeImage } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/Theme";
import Showcase from "./components/Showcase";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TopFadeImage from "../src/assets/top.png";
import AnimatedCursor from "react-animated-cursor";
import Experience from "./components/Experience";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Toaster />
      </div>
      <MainBody>
        <Navbar />
        <Container>
          <Showcase />
          <MySkills />
          <Experience />
          <MyProjects />
          <Footer />
        </Container>
        <FadeImage src={TopFadeImage} top="0" width="inherit" />
      </MainBody>
      <AnimatedCursor
  innerSize={12}
  outerSize={35}
  color="0, 200, 120"           
  outerAlpha={0.3}
  innerScale={0.9}
  outerScale={4.5}
  clickables={[
    'a',
    'button',
    'input',
    'textarea',
    'select',
    '.link',
    '.custom-hover' // Add custom classes here if needed
  ]}
/>
    </ThemeProvider>
  );
}

export default App;
