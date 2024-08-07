import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@chakra-ui/react";
import AppWrapper from "./shared/AppWrapper";
import Navbar from "./shared/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import { ContextProvider } from "./context/ContextProvider";

delete theme.styles.global;

function App() {
  return (
    <ChakraProvider disableGlobalStyle={true}>
      <ContextProvider>
        <AppWrapper>
          <Home />
          <Navbar />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </AppWrapper>
      </ContextProvider>
    </ChakraProvider>
  );
}

export default App;