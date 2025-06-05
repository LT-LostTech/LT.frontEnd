import { ThemeProvider } from "styled-components";

import { theme } from "./theme/theme";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ToastContainer/>
    </ThemeProvider>
    
  );
}

export default App;
