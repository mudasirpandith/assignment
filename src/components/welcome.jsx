import React from "react";
import styled from "styled-components";
import Home from "../images/home.png";
const Container = styled.div`
  background: rgba(11, 110, 79, 1);
  display: flex;
  color: white;
  height: 100%;
  flex: 1;
`;
const Wrapper = styled.div`
  padding: 20px 20px 20px 20px;
  display: flex;
  text-align: left;
  gap: 40px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const TextPart = styled.div`
  font-family: Roboto;
  margin: auto;
  display: flex;
  padding-left: 60px;
  flex-direction: column;
  @media (max-width: 600px) {
    margin: 0;
    padding-left: 0px;
    text-align: left;
  }
`;
const ImagePart = styled.div`
  display: flex;
  flex: 5;
`;

const Title = styled.h1`
  margin: 0 0 10px 0;
`;
const Details = styled.p`
  margin: 0 0 20px 0;
  font-family: Roboto;
  flex-wrap: wrap;
  text-align: left;
`;
const Span = styled.span`
  font-family: Roboto;
`;
const Image = styled.img`
  width: 400px;
  margin: auto;
  height: 400px;
  @media (max-width: 600px) {
    height: 300px;
    width: 100%;
  }
`;
export const Welcome = () => {
  return (
    <div style={{ height: window.innerHeight }}>
      <Container>
        <Wrapper>
          <TextPart>
            <Title>
              Welcome to <br /> AgriAbhyaas
            </Title>
            <Details>
              As they say, practice makes you perfect. AgriAbhyaas is your one
              stop platform to practice and excel in challenging subjects.{" "}
            </Details>
            <Span> KNOW YOUR SELF TESTS </Span>
          </TextPart>
          <ImagePart>
            <Image src={Home} />
          </ImagePart>
        </Wrapper>
      </Container>
    </div>
  );
};
