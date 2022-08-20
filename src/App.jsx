import styled from "styled-components";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/home";
import { Page2 } from "./Pages/Page2";
const Button = styled.button``;
function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="page2" element={<Page2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
