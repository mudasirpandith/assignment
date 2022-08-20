import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Ans } from "./Ans";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: rgba(248, 248, 248, 1);

  width: 100%;
`;

const Question = styled.p`
  display: flex;
  gap: 20px;
`;
const QuestionDetail = styled.p`
  display: flex;
  @media (min-width: 600px) {
    margin-top: 34px;
  }
`;
const QuestionNo = styled.h1`
  display: flex;

  color: rgba(11, 110, 79, 1);
`;
const Options = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  gap: 10px;
`;
const Option = styled.div`
  display: flex;
  gap: 20px;
`;

const Label = styled.label``;
const RadioButton = styled.input``;
const Buttons = styled.div`
  display: flex;
  margin: 10px auto;
  gap: 10px;
`;
const ButtonAns = styled.button`
  background-color: rgba(19, 174, 126, 1);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 12px;
  cursor: pointer;
`;
const ButtonDis = styled.button`
  background-color: rgba(95, 95, 95, 1);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 12px;
  cursor: pointer;
`;
const ButtonSav = styled.button`
  background-color: rgba(51, 98, 171, 1);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 12px;
  cursor: pointer;
`;
const Answer = styled.div`
  display: flex;
  margin: 10px auto;
`;
export const QuestionCard = (props) => {
  const [SubmitAns, setSubmitAns] = useState(0);
  function handleAns(e) {
    console.log(e.target.value);
    setSubmitAns(!SubmitAns);
  }
  return (
    <Container>
      <Question>
        <QuestionNo>{props.QNo}.</QuestionNo>
        <QuestionDetail>
          Courses Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </QuestionDetail>
      </Question>
      <form>
        <Options>
          <Option>
            <RadioButton disabled={SubmitAns} value="A" name="A" type="radio" />
            <Label>Option A</Label>
          </Option>
          <Option>
            <RadioButton disabled={SubmitAns} value="B" name="B" type="radio" />
            <Label>Option B</Label>
          </Option>{" "}
          <Option>
            <RadioButton disabled={SubmitAns} value="C" name="C" type="radio" />
            <Label>Option C</Label>
          </Option>{" "}
          <Option>
            <RadioButton disabled={SubmitAns} value="D" name="D" type="radio" />
            <Label>Option D</Label>
          </Option>
        </Options>
        {SubmitAns ? (
          <>
            <Answer>
              <Ans />
            </Answer>
          </>
        ) : (
          <Buttons>
            <ButtonAns type="submit" onClick={handleAns}>
              {" "}
              Answer & Solution
            </ButtonAns>
            {!props.p2 && <ButtonDis>Join the discussion</ButtonDis>}
            <ButtonSav>Save for later</ButtonSav>
          </Buttons>
        )}
      </form>
    </Container>
  );
};
