import { useState} from "react";
import showPwdImg from '../assets/Images/visibility.png';
import hidePwdImg from '../assets/Images/visibility-off.png';
import axios from 'axios';
import { Container, Wrapper, Title, Desc, Form, InputContainer, Input, Link, Button} from './Login';
import { useNavigate } from "react-router-dom";
const Regsiter = () => {
    const [email,SetEmail] = useState("")
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
    const [isRevealPwd, setIsRevealPwd] = useState(false);

    const submitRegister = async () => {
        axios.post(`http://localhost:5003/Auth/register`, {
            email,
            password
        });
        navigate("/login");
        alert("Hello! Welcome to Omnivita. Please login to continue.");
    }
    
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Desc>Already A Member? <Link href="/login">Log In</Link></Desc>

                <Form>
                    {/* <InputContainer>
                        <Input placeholder = "Username" />
                    </InputContainer> */}

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


                    <Desc style={{margin: "20px 0"}}>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the &nbsp;
                        <b style={{color: "#32E0C4", cursor: "pointer"}}> 
                            PRIVACY POLICY AND TERMS & CONDITIONS
                        </b>
                    </Desc>

                    <Button onClick={submitRegister} ><Link  style={{color:"black"}} >REGISTER NOW</Link></Button>
                </Form>
            </Wrapper>
        </Container>
    )
};

export default Regsiter;
