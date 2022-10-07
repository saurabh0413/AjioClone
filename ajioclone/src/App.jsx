import "./App.css";
import MainRoutes from "./Pages/MainRoutes";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
        <div className="App">
          <MainRoutes />
        </div>
    </ChakraProvider>
  );
}

const global_styles = styled.div`
  margin: 0;
  padding: 0;
`;
export default App;
