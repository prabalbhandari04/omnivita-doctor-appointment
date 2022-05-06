// import { SearchOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import React, { useState,useEffect } from 'react';
import { appointmentLists } from "../data";
import { mobile } from '../responsive';
import axios from 'axios';
import { change, revert } from "../redux/themeSlice";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BoltIcon from '@mui/icons-material/Bolt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import LocalPharmacyOutlinedIcon from '@mui/icons-material/LocalPharmacyOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import DirectionsBusOutlinedIcon from '@mui/icons-material/DirectionsBusOutlined';
import { Switch } from "@material-ui/core";

import Chart from "./Chart.tsx";

const CenterContent = () => {
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    const Container = styled.div`
        width: 100%;
        height: 100vh;
        background-color: ${theme.background};
        overflow-x: hidden;
    `
    const HeadingWrapper = styled.div`
        margin: 2rem 4rem;
        display: flex;
        width: 90%;
        justify-content: space-between;
        align-items: start;
    
        ${mobile({
            margin: "2rem 1rem",
            
        })}
    `
    const Title = styled.h1`
        font-size: 1.5rem;
        text-transform: uppercase;
        flex: 1;
        color: ${theme.text};
    `
    
    // Blocks
    const SecondContainer = styled.div`
        margin: 2rem 4rem;
        display: flex;
        flex-direction: column;
    
        ${mobile({
            margin: "2rem 1rem"
        })}
    `
    const ContentContainer = styled.div`
        flex: 3;
        display: flex;
        align-items: center;
        border-radius: 8px;
        background-color: ${theme.shade};
        margin: 1rem 0;
        justify-content: space-around;
    
        ${mobile({
            width: "100%",
            flexWrap: "wrap",
        })}
    `
    const Blocks = styled.div`
        flex: 1;
        display: flex;
        align-items: center;
        padding: 1rem 1.5rem;
    `
    const Icon = styled.div`
        background-color: ${props => props.color};
        padding: 0.5rem;
        border-radius: 50%;
    `
    const DescBox = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        color: ${theme.text};
    
        ${mobile({
            flexDirection: "row",
        })}
    `
    const Desc = styled.p`
        font-size: 1rem;
        padding: 0 1rem;
        color: ${theme.text};
    `
    
    // Result Wrapper
    const Wrapper = styled.div`
        margin: 1rem 0;
        display: flex;
        flex-wrap: wrap;
    `
    
    const ChartContainer = styled.div`
        flex: 1;
        background-color: ${theme.shade};
        border-radius: 8px;
        margin-right: 1rem;
    
        ${mobile({
            marginBottom: "1rem",
            width: "100%"
        })}
    `
    const AppointmentContianer = styled.div`
        flex: 1;    
        background-color: ${theme.shade};
        border-radius: 8px;
        padding: 2rem;  
    `
    const DoctorList = styled.div`
        margin: 1rem 0;
        background-color: ${theme.shade};
        padding: 1rem;
        display: flex;
        border-radius: 8px;
        align-items: center;
        justify-content: space-between;
    
        ${mobile({
            flexDirection: "column"
        })}
    `
    
    const NameContainer = styled.div`
        display: flex;
        flex: 1;
    `
    const DataContainer = styled.div`
        flex: 2;
        display: flex;
        justify-content: space-around;
    
        ${mobile({
            paddingTop: "1rem",
            width: "100%",
            justifyContent: "space-between"
        })}
    `
    const DocAvatar = styled.img`
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        object-fit: cover;
    `
    const Status = styled.div`
        font-size: 0.8rem;
        font-weight: 100;
        color: ${theme.disabled};
        color: ${props => props.color === "Accepted" && `${theme.primary}`};
        color: ${props => props.color === "Pending" && `${theme.disabled}`};
        color: ${props => props.color === "Denied" && `${theme.warning}`};
    `

    const [darkMode, setDarkMode] = useState(false); 

    const handleToggle = () => {
        setDarkMode(!darkMode);

        if (darkMode === false) {
            dispatch(change())
        }
        else {
            dispatch(revert())
        }
    }

    const [doctor,SetDoctor] = useState([]);
    const [appointment,SetAppointment] = useState([]);

    // useEffect(()=>{
    //     axios.get('http://localhost:5003/api/doctors/')
    //     .then(res=>{
    //     //   console.log(res)
    //       SetDoctor(res.data)
    //     })
    //     .catch(err =>{
    //       console.log(err)
    //     })
    //   })

    //   useEffect(()=>{
    //     axios.get('http://localhost:5003/api/appointments/')
    //     .then(res=>{
    //     //   console.log(res)
    //       SetAppointment(res.data)
    //     })
    //     .catch(err =>{
    //       console.log(err)
    //     })
    //   })
    
    return (
             
            <Container>
                <HeadingWrapper>
                    <Title>Analytics</Title>
                    
                    {/* <InputContainer>
                        <Input placeholder="Search"/>
                        <SearchOutlined />
                    </InputContainer> */}
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Desc>{theme.current}</Desc>
                        <Switch 
                            color = {theme.text}
                            checked={darkMode} 
                            onChange = {handleToggle} 
                        />
                    </div>
                
                </HeadingWrapper>
                
                {/* Stats */}
                <SecondContainer>
                    <ContentContainer>
                        {/* Clinics */}
                        <Blocks>
                            <Icon color="#F8485E">
                                <LocalPharmacyOutlinedIcon style={{color: "#fff"}}/>
                            </Icon>
                            <DescBox>
                                <Desc>Total Clinics</Desc>
                                <Desc style={{fontSize:"0.8", fontWeight: "100"}}>21</Desc>
                            </DescBox>
                        </Blocks>

                        {/* Doctors */}
                        <Blocks>
                            <Icon color="#2541B2">
                                <PeopleAltOutlinedIcon style={{color: "#fff"}}/>
                            </Icon>
                            <DescBox>
                                <Desc>Total Doctors</Desc>
                                <p style={{fontSize:"0.8", fontWeight: "100"}}>8</p>
                            </DescBox>
                        </Blocks>

                        {/* Staffs */}
                        <Blocks>
                            <Icon color="#0F0E0E">
                                <AdminPanelSettingsOutlinedIcon style={{color: "#fff"}}/>
                            </Icon>
                            <DescBox>
                                <Desc>Total Staffs</Desc>
                                <p style={{fontSize:"0.8", fontWeight: "100"}}>45</p>
                            </DescBox>
                        </Blocks>

                        {/* Vehicles */}
                        <Blocks>
                            <Icon color="#502064">
                                <DirectionsBusOutlinedIcon style={{color: "#fff"}}/>
                            </Icon>
                            <DescBox>
                                <Desc>Total Vehicles</Desc>
                                <p style={{fontSize:"0.8", fontWeight: "100"}}>3</p>
                            </DescBox>
                        </Blocks>

                        <Blocks>
                            <Icon color="#11E370">
                                <DeviceThermostatIcon style={{color: "#fff"}}/>
                            </Icon>
                            <DescBox>
                                <Desc>Temperature</Desc>
                                <Desc style={{fontSize:"0.8", fontWeight: "100"}}><a style={{textDecoration:"none", color:`${theme.text}`}} target="__blank" href="https://thingspeak.com/channels/1651844/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15">Check Now</a></Desc>
                            </DescBox>
                        </Blocks>


                    </ContentContainer>
                    <ContentContainer>
                        <Blocks>
                            <Icon color="#117DE3">
                                <AcUnitIcon style={{color: "#fff"}}/>
                            </Icon>
                            <DescBox>
                                <Desc>Humidity</Desc>
                                <Desc style={{fontSize:"0.8", fontWeight: "100"}}><a style={{textDecoration:"none", color:`${theme.text}`}} target="__blank" href="https://thingspeak.com/channels/1651844/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15">Check Now</a></Desc>
                            </DescBox>
                        </Blocks>

                        <Blocks>
                            <Icon color="#472504">
                                <CleaningServicesIcon style={{color: "#fff"}}/>
                            </Icon>
                            <DescBox>
                                <Desc>Dust</Desc>
                                <Desc style={{fontSize:"0.8", fontWeight: "100"}}><a style={{textDecoration:"none", color:`${theme.text}`}} target="__blank" href="https://thingspeak.com/channels/1651844/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15">Check Now</a></Desc>
                            </DescBox>
                        </Blocks>

                        <Blocks>
                            <Icon color="#EE1111">
                                <MonitorHeartIcon style={{color: "#fff"}}/>
                            </Icon>
                            <DescBox>
                                <Desc>Heart Beat</Desc>
                                <Desc style={{fontSize:"0.8", fontWeight: "100"}}><a style={{textDecoration:"none", color:`${theme.text}`}} target="__blank" href="https://thingspeak.com/channels/1651844/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15">Check Now</a></Desc>
                            </DescBox>
                        </Blocks>


                        <Blocks>
                            <Icon color="#C4EEDD">
                                <FavoriteIcon style={{color: "#fff"}}/>
                            </Icon>
                            <DescBox>
                                <Desc>HRV Rate</Desc>
                                <Desc style={{fontSize:"0.8", fontWeight: "100"}}><a style={{textDecoration:"none", color:`${theme.text}`}} target="__blank" href="https://thingspeak.com/channels/1651844/charts/5?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15">Check Now</a></Desc>
                            </DescBox>
                        </Blocks>


                        <Blocks>
                            <Icon color="#FEF30A">
                                <BoltIcon style={{color: "#fff"}}/>
                            </Icon>
                            <DescBox>
                                <Desc>ECG Value</Desc>
                                <Desc style={{fontSize:"0.8", fontWeight: "100"}}><a style={{textDecoration:"none", color:`${theme.text}`}} target="__blank" href="">Check Now</a></Desc>
                            </DescBox>
                        </Blocks>


                    </ContentContainer>
                    {/* Chart and Appointment */}
                    <Wrapper>
                        {/* Chart */}
                        <ChartContainer>
                            <Chart />
                        </ChartContainer>

                        {/* Appointments */}
                        <AppointmentContianer>
                            <Title>Appointments</Title>
                            {
                                appointmentLists.map((item) => (
                                    <DoctorList>
                                        <NameContainer>
                                            <DocAvatar src= {item.img} />
                                            <div style={{padding: "0 1rem"}} >
                                                <Desc style={{padding: "0"}}>{item.doctorName}</Desc>
                                                <Status style={{fontSize: "0.6rem", padding: "0", fontWeight: "100"}}>{item.speciality}</Status>
                                            </div>
                                        </NameContainer>

                                        <DataContainer>
                                            <Status>{item.date}</Status>
                                            <Status>{item.time}</Status>
                                            <Status color={item.status}>{item.status}</Status>
                                        </DataContainer>
                                    </DoctorList>    
                                ))
                            }
                        </AppointmentContianer>

                    </Wrapper>
        
                </SecondContainer>
            
            </Container>
  );
}

export default CenterContent;
