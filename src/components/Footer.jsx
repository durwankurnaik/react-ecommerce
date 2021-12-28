import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`

`

const Desc = styled.p`
  margin: 20px 0
`

const SocialContainer = styled.div`
  
`

const SocialIcon = styled.div`
  
`

const Center = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Florange Fashions.</Logo>
        <Desc>Your one stop shop for all your fashion needs</Desc>
        <SocialContainer>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
