import styled from "styled-components"
import { statistics } from "../data"

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`
const Box = styled.div`
    flex: 1;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h1`
    font-weight: 300;
    font-size: 0.8rem;
`
const Value = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    padding-top: 0.5rem;
`


const Stats = () => {
  return (
      <Container>
        {
            statistics.map(item => (
                <Box>
                    <Title>{item.title}</Title>
                    <Value>{item.value}</Value>
                </Box> 
            ))
        }
        
        
      </Container>
  );
};

export default Stats;
