import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { white, background, primary, secondary, text } from "../assets/Colors";
import showPwdImg from '../assets/Images/visibility.png';
import hidePwdImg from '../assets/Images/visibility-off.png';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("https://wallpaper.dog/large/5486500.png");
    background-size: 100%;
    display: flex;
    align-items: center;

    ${mobile({
        background: "rgba(255,255,255)"
    })}
`

export const Wrapper = styled.div`
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
    padding: 2rem;
    width: 400px;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;

    ${mobile({
        width: "100%",
        boxShadow: "none",
    })}
    
`
export const Title = styled.h1`
    font-size: 2rem;
    color: ${text};
`
export const Desc = styled.p`
    font-size: 1rem;
    font-weight: 300;
    color: ${text};
`
export const Link = styled.a`
    color: ${primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
`

export const Form = styled.form`
    margin: 2rem 0;
    display: flex;
    flex-direction: column;

    ${mobile({
        width: "100%",
    })}
`

export const InputContainer = styled.div`
    border-radius: 8px;
    background-color: ${background};
    padding: 0.3rem;
    display: flex;
    height: 2rem;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 0;
`

export const Input = styled.input`
    font-size: 1rem;
    padding: 10px;
    height: 40%;
    border: none;
    border-radius: 8px;
    background-color: ${background};
`
export const Button = styled.button`
    width: 100%;
    border: none;
    padding: 10px;
    margin: 20px 0;
    background-color: ${primary};
    color: ${white};
    cursor: pointer;
    border-radius: 8px;
    font-size: 1rem;

    &:hover{
        background-color: ${secondary};
    }
`


const Login = () => {
    const [email,SetEmail] = useState("")
    const [password, setPassword] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [user, setUser] = useState(null);
    let navigate = useNavigate();

    const submitLogin = async () => {
        alert("Redirecting");
        navigate("/");
    }

    
    return (
        <Container>
            <Wrapper>
                <Title>WELCOME BACK</Title>
                <Desc>Don't have an account yet? <Link href="/register">Sign Up</Link></Desc>

                <Form>
                <InputContainer>
                        <Input placeholder = "Email"
                        name="email"
                            placeholder="Enter your Email"
                            type="email"
                            value={email}
                            onChange={e => SetEmail(e.target.value)} />
                    </InputContainer>
                    
                    <InputContainer>
                        <Input 
                            name="password"
                            placeholder="Enter Password"
                            type={isRevealPwd ? "text" : "password"}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <img
                            title={isRevealPwd ? "Hide password" : "Show password"}
                            src={ isRevealPwd ? showPwdImg : hidePwdImg}
                            alt = "visibility"
                            onClick={() => setIsRevealPwd(prevState => !prevState)}
                            style={{width: "1.5rem", height: "1.5rem", margin: "1rem"}}
                        />
                        
                    </InputContainer>

                    <Link style={{marginTop: "0.5rem"}} href="/login/forgot">Forgot Password</Link>

                    <Button onSubmit={submitLogin}><Link  href="http://localhost:3000" style={{color:"black"}} >LOGIN NOW</Link></Button>
                </Form>
            </Wrapper>
        </Container>
    )
};

export default Login;
