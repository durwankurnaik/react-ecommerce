import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcemet"

const Container = styled.div`

`

const Title = styled.h1`
  display: flex;
  justify-content: center;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`

`

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>Filter 1</Filter>
        <Filter>Filter 2</Filter>
      </FilterContainer>
    </Container>
  )
}

export default ProductList
