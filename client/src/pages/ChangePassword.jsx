import { useState } from "react";
import { Container, Wrapper, Title, Form, InputContainer, Input, Button} from './Login';
import showPwdImg from '../assets/Images/visibility.png';
import hidePwdImg from '../assets/Images/visibility-off.png';



const ChangePassword = () => {
    const [pwd, setPwd] = useState('');
    const [confirm, setConfirm] = useState('');
    
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [isRevealConfirmPwd, setIsRevealConfirmPwd] = useState(false);
    
    return (
        <Container>
            <Wrapper>
                <Title style>CHANGE PASSWORD</Title>
                
                <Form>
                <InputContainer>
                        <Input 
                            name="pwd"
                            placeholder="New Password"
                            type={isRevealPwd ? "text" : "password"}
                            value={pwd}
                            onChange={e => setPwd(e.target.value)}
                        />
                        <img
                            title={isRevealPwd ? "Hide password" : "Show password"}
                            src={ isRevealPwd ? showPwdImg : hidePwdImg}
                            alt = "visibility"
                            onClick={() => setIsRevealPwd(prevState => !prevState)}
                            style={{width: "1.5rem", height: "1.5rem", margin: "1rem"}}
                        />
                            
                    </InputContainer>

                    <InputContainer>
                        <Input 
                            name="pwd"
                            placeholder="Confirm Password"
                            type={isRevealConfirmPwd ? "text" : "password"}
                            value={confirm}
                            onChange={e => setConfirm(e.target.value)}
                        />
                        <img
                            title={isRevealConfirmPwd ? "Hide password" : "Show password"}
                            src={ isRevealConfirmPwd ? showPwdImg : hidePwdImg}
                            alt = "visibility"
                            onClick={() => setIsRevealConfirmPwd(prevState => !prevState)}
                            style={{width: "1.5rem", height: "1.5rem", margin: "1rem"}}
                        />
                            
                    </InputContainer>

                    <Button>CONTINUE</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default ChangePassword;
