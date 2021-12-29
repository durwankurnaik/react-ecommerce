import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;

  ${mobile({ padding: "10px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

  ${mobile({ margin: "0" })}
`;

const Input = styled.input`
  border: none;
  outline: none;

  ${mobile({ width: "4rem" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 25px;

  ${mobile({ fontSize: "16px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ justifyContent: "center" })}
`;

const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  ${mobile({
    fontSize: "12px",
    margin: "2px",
  })}
`;

const Navbar = () => {
  return (
    <Container>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <Input placeholder="Search" />
          <Search style={{ color: "gray", fontSize: 16 }} />
        </SearchContainer>
      </Left>
      <Center>
        <Logo>Florange Fashions.</Logo>
      </Center>
      <Right>
        <MenuItems>REGISTER</MenuItems>
        <MenuItems>SIGNIN</MenuItems>
        <MenuItems>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </MenuItems>
      </Right>
    </Container>
  );
};

export default Navbar;
