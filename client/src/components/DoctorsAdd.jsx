import { clinicList } from '../data';
import React, { useState,useEffect } from 'react';
import dr from '../assets/Images/doctor.svg'; 
import { 
    Container,
    Title,
    Wrapper,
    Illustration,
    Img,
    FormWrapper,
    InputWrapper,
    Label,
    Input,
    Select,
    Option,
    Button
} from "./Styled";
import { useSelector } from "react-redux";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DoctorsAdd = () => {
    const theme = useSelector((state) => state.theme);
    const [clinic, SetClinic] = useState([]);
    const[firstname,SetFirstname] = useState("");
    const[lastname,SetLastname] = useState("");
    const [phone,SetPhone] = useState("");
    let navigate = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:5003/api/clinics/')
        .then(res=>{
        //   console.log(res)
          SetClinic(res.data)
        })
        .catch(err =>{
          console.log(err)
        })
      })

    const submitDoctor = async () => {
        axios.post(`http://localhost:5003/api/doctors/`, {
            firstname,
            lastname,
            phone
        });
        alert("Data Saved");
        navigate('/');
    }

    return (
        <Container bgColor={theme.background}>
            <Title color={theme.text}>Add Doctor</Title>

            <Wrapper bgColor={theme.shade}>
                <Illustration>
                    <Img src={dr} alt='appointment'/>
                </Illustration>
                <FormWrapper>
                    <InputWrapper>
                        <Label color = {theme.disabled}>First Name *</Label>
                        <Input bgColor={theme.background} color={theme.text}
                         placeholder = "First Name"
                        name="firstname"
                            type="text"
                            value={firstname}
                            onChange={e => SetFirstname(e.target.value)} />
                            
                    </InputWrapper>
                    
                    <InputWrapper>
                        <Label color = {theme.disabled}>Last Name *</Label>
                        <Input bgColor={theme.background} color={theme.text}
                         placeholder = "Last Name"
                            name="lastname"
                            type="text"
                            value={lastname}
                            onChange={e => SetLastname(e.target.value)} />
                            
                    </InputWrapper>
                    
                    <InputWrapper>
                            <Label color = {theme.disabled}>Clinic *</Label>
                            <div style={
                                {
                                    display: "flex", 
                                    justifyContent: "space-between",
                                    alignItems: "start",
                                }
                            }>
                                <Select style={{ height: "3rem", width: "88%"}}  bgColor={theme.background} color={theme.text}>
                                    <Option selected disabled>Select your clinic</Option>
                                    {
                                        clinic.map((clinics) => (
                                            <Option>{clinics.clinicname} ({clinics.address})</Option>
                                        ))
                                    }
                                </Select>
                                <Button
                                    style={
                                        {
                                            backgroundColor: "transparent", 
                                            border: "0.5px solid #a7ffeb", 
                                            width: "10%",
                                            marginTop: "0",
                                            marginBottom: "0.5rem",
                                            color: "#a7ffeb",
                                        }
                                    }
                                    action="add"
                                    secondBg={theme.disabled}
                                    color={theme.text}
                                >
                                    +
                                </Button>
                            </div>
                    </InputWrapper>

                    <InputWrapper>
                        <Label color = {theme.disabled}>Phone *</Label>
                        <Input bgColor={theme.background} color={theme.text}
                        placeholder = "Phone Number"
                            name="phone"
                            type="phone"
                            value={phone}
                            onChange={e => SetPhone(e.target.value)} />
                      
                    </InputWrapper>


                    <Button onClick={submitDoctor} bgColor={theme.primary}  hover={theme.secondary}>ADD</Button>
                </FormWrapper>
            </Wrapper>
        </Container>
    );
};

export default DoctorsAdd;
