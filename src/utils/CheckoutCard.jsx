import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  gap: 20px;
  font-family: Roboto;
  width: 480px;
  box-shadow: 1px 1px 1px 1px grey;
  border-radius: 10px;
  padding: 20px;
  @media (max-width: 600px) {
    width: 90%;
  }
`;
const Image = styled.img`
  width: 180px;
  display: flex;
  height: 100px;
`;
const ImagePart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const TextPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Heading = styled.h3`
  color: rgba(11, 110, 79, 1);
  display: flex;
  margin: 0;
`;
const Items = styled.p`
  display: flex;
  margin: 0;
  font-weight: 400;
  color: rgba(95, 95, 95, 1);
`;
const Button = styled.button`
  background-color: rgba(19, 174, 126, 1);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 12px;
  cursor: pointer;
`;
const RatingStars = styled.p`
  font-size: 14px;
  font-weight: 800;
  display: flex;
  color: rgba(95, 95, 95, 1);
`;
export const CheckoutCard = () => {
  return (
    <Container>
      <ImagePart>
        <Image src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" />
        <RatingStars>
          1.2K enrolled <br />
          4.7⭐⭐⭐⭐⭐ (12,423)
        </RatingStars>
      </ImagePart>
      <TextPart>
        <Heading>GATE XE Thermodynamics</Heading>
        <Items>✓ General Aptitude</Items>
        <Items>✓ General Aptitude</Items> <Items>✓ General Aptitude</Items>{" "}
        <Items>✓ General Aptitude</Items>
        <Button>View Package</Button>
      </TextPart>
    </Container>
  );
};
