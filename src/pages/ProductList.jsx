import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilterText = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const SelectWrapper = styled.div`
  ${mobile({
    display: "flex",
    justifContent: "space-between",
    marginTop: "5px",
  })}
`;

const Select = styled.select`
  margin: 0 5px;
  padding: 10px;

  ${mobile({ padding: 0 })}
`;

const Option = styled.option``;

const Filter = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${mobile({ flexDirection: "column" })}
`;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Newest");

  const handleFilter = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>
        {category.charAt(0).toUpperCase() + category.slice(1, category.length)}
        {/* This thing capitalizes the first letter of the category since they are not capitalized from start */}
      </Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <SelectWrapper>
            <Select name="color" onChange={handleFilter}>
              <Option disabled selected>
                Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
              <Option>Gray</Option>
              <Option>Others</Option>
            </Select>
            <Select name="size" onChange={handleFilter}>
              <Option disabled selected>
                Size
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
              <Option>XXL</Option>
            </Select>
          </SelectWrapper>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select onChange={(event) => setSort(event.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price - Low to high</Option>
            <Option value="desc">Price - High to low</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
