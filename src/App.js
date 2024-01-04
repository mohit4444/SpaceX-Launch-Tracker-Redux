import { ThemeProvider } from "styled-components";
import { FilterProvider } from "./contexts/FilterContext";
import GlobalStyles from "./styles/Global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import LaunchDetails from "./components/LaunchDetails";
import { theme } from "./config";

function App() {
  return (
    <FilterProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/launch/:id" element={<LaunchDetails />} />
            <Route
              path="*"
              element={
                <>
                  <h1>Page you are looking for does not exist</h1>
                </>
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </FilterProvider>
  );
}

export default App;
