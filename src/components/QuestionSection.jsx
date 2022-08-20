import React from "react";
import styled from "styled-components";
import { QuestionCard } from "../utils/QuestionCard";
const Container = styled.div`
  display: flex;

  font-family: Roboto;
  margin-top: 30px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const NavBar = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  flex: 1;
`;
const Questions = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  flex: 7;
  border: 2px solid rgba(95, 95, 95, 1);
`;

const NavHead = styled.h3`
  color: green;
  margin: 0;
`;
const Navele = styled.p`
  display: flex;
  margin: 0;
  margin-left: 20px;
`;
export const QuestionSection = () => {
  var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // For map func
  return (
    <>
      <Container>
        <NavBar>
          <NavHead>Geometry</NavHead>
          <Navele>Circle</Navele>
          <Navele>Triangles</Navele>
          <Navele>Quardrilaterals</Navele>
          <Navele>Parabolas</Navele>
        </NavBar>
        <Questions>
          {x.map((test) => {
            return (
              <>
                <QuestionCard QNo={test} />
              </>
            );
          })}
        </Questions>
      </Container>
    </>
  );
};
