import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 95%;
  font-family: Roboto;
  background-color: rgba(252, 252, 252, 1);
  box-shadow: 1px 1px 1px 1px grey;
  border-radius: 10px;

  gap: 10px;
`;
const Heading = styled.h3`
  margin: 0;
  color: green;
  display: flex;
`;
const SubHeading = styled.h5`
  margin: 0;
  display: flex;
`;
const Details = styled.p`
  margin: 0;
  display: flex;
`;

export const Ans = () => {
  return (
    <Container>
      <Heading>Correct Anwser</Heading>
      <SubHeading>Explaination</SubHeading>
      <SubHeading>Answer: B</SubHeading>
      <Details>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dicta,
        quidem culpa voluptates explicabo placeat impedit, quam repellendus
      </Details>
    </Container>
  );
};
