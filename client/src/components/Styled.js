import styled from 'styled-components';
import { mobile } from '../responsive';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.bgColor};
    overflow: hidden;
`
export const Title = styled.h1`
    margin: 2rem 4rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    flex: 1;
    color: ${props => props.color};

    ${mobile ({
        margin: "2rem"
    })}
`
export const Wrapper = styled.div`
    margin: 2rem 4rem;
    background-color: ${props => props.bgColor};
    border-radius: 8px;
    height: 80vh;
    display: flex;
    justify-content: space-between;

    ${mobile ({
        margin: "1rem",
        backgroundColor: "transparent",
    })}
`

export const Illustration = styled.div`
    flex: 1;

    ${mobile ({
        display: "none"
    })}
`
export const Img = styled.img`
    margin: 5rem 3rem;
    width: 80%;
    display: flex;
    align-item: center;
`

// Form
export const FormWrapper = styled.form`
    flex: 1;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    overflow: auto;

    ${mobile ({
        padding: "1rem"
    })}
`
export const InputWrapper = styled.div`
    display: flex;
    margin: 1rem 0;
    flex-direction: column;
    width: 80%;
    
    ${mobile ({
        width: "100%"
    })}
`
export const Label = styled.label`
    margin-bottom: 0.5rem;
    font-weight: 300;
    color: ${props => props.color};
`
export const Input = styled.input`
    border-radius: 4px;
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    padding: 0.5rem;
    border: none;
`
export const Select = styled.select`
    border-radius: 4px;
    padding: 0.5rem;
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    border: none;
`
export const Option = styled.option`
    color: ${props => props.color};
`

export const Button = styled.button`
    width: 80%;
    border-radius: 4px;
    margin-top: 1rem;
    margin-bottom: 2rem;
    border: none;
    padding: 0.8rem;
    color: ${props => props.color};
    background-color: ${props => props.bgColor};
    background-color: ${props => props.action === "add" && `${props.secondBg}`};
    &:hover {
        background-color: ${props => props.hover};
    }

    ${mobile ({
        width: "100%"
    })}
`