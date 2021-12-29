import { category } from "../data";
import CategoryItem from "./CategoryItem";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  margin-bottom: -20px;

  ${mobile({flexDirection: "column"})}
`

const Categories = () => {
  return (
    <Container>
      {category.map(item => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
