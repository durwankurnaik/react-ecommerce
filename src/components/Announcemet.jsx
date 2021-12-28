import styled from "styled-components"

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Announcemet = () => {
  return (
    <Container>
      Hurry up! Don't miss the End of the year sale.
    </Container>
  )
}

export default Announcemet
