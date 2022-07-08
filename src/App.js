import React from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider >
      <Navbar />
    </ThemeProvider>
  );
}

export default App;


// cmd b opens and closes sidebar