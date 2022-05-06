import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container, Wrapper, Title, Form, InputContainer, Input, Link, Button} from './Login';
import MailSvg from '../assets/Images/mail.svg';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const ImageWrapper = styled.div`
    width: 50%;
    margin: 2rem auto;
`
const Image = styled.img`
    width: 100%;
    object-fit: cover;
`

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [open, setOpen] = useState(false);
    const [error, setError] = useState("");

    let navigate = useNavigate();

    const handleClick = () => {
        if(email !== ""){
            navigate("/login/forgot/change");
        }
        else{
            setError("Please enter your email address");
            setOpen(true);
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };
    
    return (
        <Container>
            <Wrapper>
                <Title style>FORGOT PASSWORD?</Title>
                <Link href="/login">Go Back</Link>
                
                <ImageWrapper>
                    <Image src={ MailSvg } alt="Mail Box" color="#32E0C4"/>
                </ImageWrapper>

                <Form>
                    <InputContainer>
                        <Input placeholder = "Email" onChange={(e) => setEmail(e.target.value)}/>
                    </InputContainer>

                    <Button onClick={() => {handleClick()}}>Verify</Button>

                </Form>
                
                <Snackbar
                    open={open}
                    onClose={handleClose}
                    autoHideDuration={5000}
                > 
                    <Alert severity="error">{error}</Alert>
                </Snackbar> 
               
            </Wrapper>
        </Container>
    );
};

export default ForgotPassword;
