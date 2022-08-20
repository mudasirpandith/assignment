import React from "react";
import styled from "styled-components";
import MCarousel from "../utils/Carosoul";
import { CheckOutOther } from "../components/CheckOutOther";
import { QuestionSection } from "../components/QuestionSection";
import { Welcome } from "../components/welcome";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flexx: 1;
  flex-direction: column;
  backgrond-color: #ccffffff;
`;
const Hr = styled.div`
  border: 0.1px solid rgba(95, 95, 95, 1);
  height: 0px;
  margin: 10px 20px;
`;
const Text = styled.p`
  color: rgba(95, 95, 95, 1);
  font-size: 15px;
  margin: 0 20px;
`;
const Image = styled.img`
  height: 300px;
  width: 100px;
`;
const BottomText = styled.h3`
  background-color: rgba(19, 174, 126, 1);
  color: white;
  margin: -1px;
`;
const Card = styled.div`
  text-align: center;
  border: green 2px solid;
  background-color: rgba(19, 174, 126, 1);
`;
export const HomePage = () => {
  return (
    <Container>
      <Welcome />
      <MCarousel show={4} infiniteLoop>
        <div style={{ padding: 8 }}>
          <Link style={{ textDecoration: "none" }} to="/Page2">
            <Card>
              <Image
                src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWF0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="placeholder"
                style={{ width: "100%" }}
              />
              <BottomText>Biology</BottomText>
            </Card>{" "}
          </Link>
        </div>
        <div style={{ padding: 8 }}>
          <Link style={{ textDecoration: "none" }} to="/Page2">
            <Card>
              <Image
                src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWF0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="placeholder"
                style={{ width: "100%" }}
              />
              <BottomText>Biology</BottomText>
            </Card>{" "}
          </Link>
        </div>{" "}
        <div style={{ padding: 8 }}>
          <Link style={{ textDecoration: "none" }} to="/Page2">
            <Card>
              <Image
                src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWF0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="placeholder"
                style={{ width: "100%" }}
              />
              <BottomText>Biology</BottomText>
            </Card>{" "}
          </Link>
        </div>{" "}
        <div style={{ padding: 8 }}>
          <Link style={{ textDecoration: "none" }} to="/Page2">
            <Card>
              <Image
                src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWF0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="placeholder"
                style={{ width: "100%" }}
              />
              <BottomText>Biology</BottomText>
            </Card>{" "}
          </Link>
        </div>{" "}
        <div style={{ padding: 8 }}>
          <Link style={{ textDecoration: "none" }} to="/Page2">
            <Card>
              <Image
                src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWF0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="placeholder"
                style={{ width: "100%" }}
              />
              <BottomText>Biology</BottomText>
            </Card>{" "}
          </Link>
        </div>{" "}
        <div style={{ padding: 8 }}>
          <Link style={{ textDecoration: "none" }} to="/Page2">
            <Card>
              <Image
                src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWF0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="placeholder"
                style={{ width: "100%" }}
              />
              <BottomText>Biology</BottomText>
            </Card>{" "}
          </Link>
        </div>{" "}
        <div style={{ padding: 8 }}>
          <Link style={{ textDecoration: "none" }} to="/Page2">
            <Card>
              <Image
                src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWF0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="placeholder"
                style={{ width: "100%" }}
              />
              <BottomText>Biology</BottomText>
            </Card>{" "}
          </Link>
        </div>
      </MCarousel>

      <Hr />
      <Text>
        Explore various topics for quiz to know where you stand. WLorem ipsum
        dolor sit amet, consectetur ad ipiscing elit. Integer nec odio. Praesent
        libero Sed cursus ante dapibus diam. Sed nisi. Nbcnt per conubia nostra,
        per inceptos himenaeos. ante dapibus diam. Sed nisi. Nbcnt per conubia
        nostra.
      </Text>
      <QuestionSection />
      <CheckOutOther />
    </Container>
  );
};
