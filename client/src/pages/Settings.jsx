import styled from "styled-components";
import { mobile } from '../responsive';
import RightNav from "../components/RightNav";
import { 
    InputWrapper,
    Label,
    Input,
    Button
} from "../components/Styled";
import "./File.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";


const Settings = () => {
    const theme = useSelector((state) => state.theme);

    

    const Container = styled.div`
        width: 100%;
        height: 100vh;
        background-color: ${theme.shade};
        overflow: hidden;
    `
    const Title = styled.h1`
        margin: 2rem 4rem;
        font-size: 1.5rem;
        color: ${theme.text}
    ` 
    const FormWrapper = styled.form`
        margin: 2rem 4rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: auto;
    
        ${mobile ({
            padding: "1rem"
        })}
    `
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const userDetail = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(update({username, email}))
    };
    
    const logout = async () => {
        localStorage.clear();
        navigate("/login");
    }

    return (
        <main style={{width: "100%", display: "flex"}}>
            <RightNav />
      
            <Container>
                <Title>SETTINGS</Title>

                <FormWrapper>
                    {/* <InputWrapper>
                        <Label color = {theme.text}>Change Profile Picture</Label>
                        <Wrapper>
                            <AvatarWrapper>
                                <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                            </AvatarWrapper>
                            <InputFile type="file" style={{position: "absolute"}}/>
                        </Wrapper>
                    </InputWrapper> */}

                    <InputWrapper>
                        <Label color = {theme.text}>Name</Label>
                        <Input 
                            placeholder={userDetail.username}
                            onChange={(e) => setUsername(e.target.value)}
                            bgColor={theme.background} color={theme.text}
                        />
                    </InputWrapper>
                
                    <InputWrapper>
                        <Label color = {theme.text}>Email</Label>
                        <Input 
                            type="email" 
                            placeholder={userDetail.email}
                            onChange={(e) => setEmail(e.target.value)}   
                            bgColor={theme.background} color={theme.text} 
                        />
                    </InputWrapper>

                    <Button
                        onClick={handleUpdate}
                        bgColor={theme.primary} hover={theme.secondary}
                    >
                        UPDATE
                    </Button>


                    <Button
                        onClick={logout}
                        bgColor={theme.primary} hover={theme.secondary}
                        
                    >
                        LOGOUT
                    </Button>
                </FormWrapper>

            </Container>
        </main>
    );
};

export default Settings;
