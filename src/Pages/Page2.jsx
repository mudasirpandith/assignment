import React from "react";
import styled from "styled-components";
import { CheckOutOther } from "../components/CheckOutOther";
import { QuestionCard } from "../utils/QuestionCard";
const Container = styled.div`
  font-family: Roboto;
  display: flex;
  text-align: left;
  gap: 10px;
  margin-bottom: 30px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const NavBar = styled.div`
  display: flex;
  color: white;
  padding: 10px 20px;
  background-color: rgba(11, 110, 79, 1);
  flex-direction: column;
  flex: 1;
`;
const QuestionSide = styled.div`
  display: flex;
  padding-top: 20px;
  flex: 7;
  flex-direction: column;
`;
const Title = styled.h2`
  display: flex;
  font-size: 25px;
  margin: 15px 0;
`;
const SubTitle = styled.p`
  display: flex;
  margin: 5px 0;
  color: rgba(255, 255, 255, 1);

  font-size: 20x;
`;
const Tags = styled.div`
  color: green;
  display: flex;
  flex-wrap: wrap;
`;
const Button = styled.button`
  background-color: transparent;
  color: green;
  border: green 1px solid;
  border-radius: 8px;
  margin: 0 10px;
  padding: 0 20px;
  cursor: pointer;
`;
const Questions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 90%;
  flex: 5;
  border: 2px solid rgba(95, 95, 95, 1);
`;
export const Page2 = () => {
  var x = [1, 2, 3, 4, 5]; // For map func
  return (
    <>
      <Container>
        <NavBar>
          <Title>All subjects</Title>
          <Title>Mathematics</Title>
          <SubTitle>Geometery</SubTitle>
          <SubTitle>Algrebra</SubTitle>
          <SubTitle>Triangles</SubTitle> <SubTitle>Probablity</SubTitle>
          <Title>English</Title>
          <SubTitle>Verbal</SubTitle>
          <SubTitle>Poetry</SubTitle>
        </NavBar>
        <QuestionSide>
          <Tags>
            Topic:- <Button>Circles</Button>
            <Button>Circles</Button>
            <Button>Circles</Button>
            <Button>Circles</Button>
            <Button>Circles</Button>
            <Button>Circles</Button>
            <Button>Circles</Button>
            <Button>Circles</Button>
            <Button>Circles</Button>
            <Button>Circles</Button>
          </Tags>
          <Questions>
            {x.map((test) => {
              return (
                <>
                  <QuestionCard p2={1} QNo={test} />
                </>
              );
            })}
          </Questions>
        </QuestionSide>
      </Container>
      <CheckOutOther />
    </>
  );
};
