import "./App.css";
import MainRoutes from "./Pages/MainRoutes";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}

const global_styles = styled.div`
  margin: 0;
  padding: 0;
`;
export default App;
