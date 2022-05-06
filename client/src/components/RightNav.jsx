import { Paper } from "@mui/material";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalPharmacyOutlinedIcon from '@mui/icons-material/LocalPharmacyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { tablet } from "../responsive";
import BottomNav from "./BottomNav";
import { useSelector } from "react-redux";

const RightNav = () => {

    const theme = useSelector((state) => state.theme);

    // Styling
    const Container = styled.div`
        width: 16rem;
        height: 100vh;
        margin: 0;
        padding: 0;
        background-color: ${theme.white};
        display: flex;
        flex-direction: column;
    
        ${tablet({
            display: "none"
        })}
    `
    // Profile
    const ProfileContainer = styled.div`
        padding: 2rem 1.5rem;
        background-color: ${theme.white};
        flex: 1;
    `
    const Heading = styled.div`
        height: 12vh;
        display: flex;
        align-items: center;
    `
    const Avatar = styled.img`
        width: 7rem;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    `
    const Information = styled.div`
        padding: 10px;
    `
    const Title = styled.h1`
        font-size: 1.2rem;
        line-height: 1.1rem;
        color: ${theme.text};
    `
    const Desc = styled.p`
        padding-top: 0.5rem;
        font-size: 1rem;
        color: ${theme.text};
    `
    
    // Nav
    const NavContainer = styled.div`
        background-color: ${theme.white};
        flex: 3;
    `
    const NavList = styled.ul`
        margin: 30px 0;
        padding: 0px;
        width: 80%;
        list-style: none;
    `
    const NavItems = styled.li`
        padding: 0.5rem 1rem;
        border-radius: 0 4px 4px 0;
        display: flex;
        align-items: center;
        font-weight: 300;
        cursor: pointer;
    `
    const Icon = styled.div`
        padding-right: 10px;
    `
    const Text = styled.span`
        font-size: 1rem;
        text-decoration: none;
        color: #222222;
    `

    let location = useLocation();
    let currentLocation = location.pathname;
    
    const getActive = (curr) => {
        if(currentLocation ===  curr) {
            return `${theme.primary}`;
        }
    }

    const username = useSelector((state) => state.user.username);

    return (
        <Paper>
            <Container>
                <ProfileContainer>
                    <Heading>
                        <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                        <Information>
                            <Title>{username}</Title>
                            <Desc>Male 22</Desc>
                        </Information>
                    </Heading>

                    {/* <Description>Expertise</Description>
                    <Memo>Manager</Memo> */}
                </ProfileContainer>

                <NavContainer>
                    <NavList>   
                        <NavItems style={{backgroundColor: getActive('/')}}>
                            <Icon>
                                <HomeOutlinedIcon style={{color: `${theme.text}`}}/>
                            </Icon> 
                            <Text>
                                <Link to="/" style={{textDecoration: "none", color: `${theme.text}`}}>Overview</Link>
                            </Text>
                        </NavItems>

                        <NavItems style={{backgroundColor: getActive('/log')}}>
                            <Icon>
                                <AssessmentOutlinedIcon style={{color: `${theme.text}`}} />
                            </Icon> 
                            <Text>
                                <Link to="/log" style={{textDecoration: "none", color: `${theme.text}`}}>Health Log</Link>
                            </Text>
                        </NavItems>
                        
                        <NavItems style={{backgroundColor: getActive('/symptom')}}>
                            <Icon>
                                <CoronavirusOutlinedIcon style={{color: `${theme.text}`}} />
                            </Icon> 
                            <Text>
                                <Link to="/symptom" style={{textDecoration: "none", color: `${theme.text}`}}>Symptoms</Link>
                            </Text>
                        </NavItems>

                        <NavItems style={{backgroundColor: getActive('/book')}}>
                            <Icon>
                                <EventAvailableOutlinedIcon style={{color: `${theme.text}`}} />
                            </Icon> 
                            <Text>
                                <Link to="/book" style={{textDecoration: "none", color: `${theme.text}`}}>Add Appointment</Link>
                            </Text>
                        </NavItems>

                        <NavItems style={{backgroundColor: getActive('/prescription')}}>
                            <Icon>
                                <MedicationOutlinedIcon style={{color: `${theme.text}`}} />
                            </Icon> 
                            <Text>
                                <Link to="/prescription" style={{textDecoration: "none", color: `${theme.text}`}}>Prescription</Link>
                            </Text>
                        </NavItems>

                        <NavItems style={{backgroundColor: getActive('/doctors')}}>
                            <Icon>
                                <SupervisedUserCircleOutlinedIcon style={{color: `${theme.text}`}} />
                            </Icon> 
                            <Text>
                                <Link to="/doctors" style={{textDecoration: "none", color: `${theme.text}`}}>Doctors</Link>
                            </Text>
                        </NavItems>

                        <NavItems style={{backgroundColor: getActive('/clinic')}}>
                            <Icon>
                                <LocalPharmacyOutlinedIcon style={{color: `${theme.text}`}} />
                            </Icon> 
                            <Text>
                                <Link to="/clinic" style={{textDecoration: "none", color: `${theme.text}`}}>Clinic</Link>
                            </Text>
                        </NavItems>

                        <NavItems style={{backgroundColor: getActive('/settings')}}>
                            <Icon>
                                <SettingsOutlinedIcon style={{color: `${theme.text}`}} />
                            </Icon> 
                            <Text>
                                <Link to="/settings" style={{textDecoration: "none", color: `${theme.text}`}}>Setting</Link>
                            </Text>
                        </NavItems>

                    </NavList>
                </NavContainer>
            </Container>

            <BottomNav />
        </Paper>
    );
};

export default RightNav;
