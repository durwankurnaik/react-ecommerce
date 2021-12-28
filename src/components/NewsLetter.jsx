import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 25px;
  font-weight: 300;
  margin-bottom: 25px;
`;
const InputContainer = styled.div`
  width: 600px;
  display: flex;
`;
const Input = styled.input`
  flex: 9;
  padding: 10px;
`;
const Button = styled.button`
  flex: 1;
  background-color: teal;
  color: white;
  cursor: pointer;
  border: none;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates on your favorite products.</Desc>
      <InputContainer>
        <Input type="email" placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
