import React, { useState,useEffect } from 'react';
import clinic from '../assets/Images/clinic.svg'; 
import "./customScroll.scss"
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
import {useNavigate} from 'react-router-dom';

const ClinicAdd = () => {    
    const theme = useSelector((state) => state.theme);
    const [districts, setDistricts] = useState([]);
    let navigate = useNavigate();
    const [clinicname,SetClinicname] = useState('');
    const [city,SetCity] = useState('');
    const [address,SetAddress] = useState('');
    const [phone,SetPhone] = useState('');

    fetch('https://data.askbhunte.com/api/v1/districts/')
    .then(res => {
        return res.json();
    }).then(data => {
        setDistricts(data);
    }).catch(err => {
        console.log(err);
    })

    const submitClinic = async () => {
        axios.post(`http://localhost:5003/api/clinics/`, {
            clinicname,
            city,
            address,
            phone
        });
        alert("Data Saved");
        navigate('/');
    }


    return (
        <Container bgColor={theme.background}>
            <Title color={theme.text}>Add Clinic</Title>

            <Wrapper bgColor={theme.shade}>
                <Illustration>
                    <Img src={clinic} alt='appointment'/>
                </Illustration>
                <FormWrapper>
                    <InputWrapper>
                        <Label color = {theme.disabled}>Name *</Label>
                        <Input bgColor={theme.background} color={theme.text}
                         placeholder = "Clinic Name"
                        name="clinicname"
                            type="text"
                            value={clinicname}
                            onChange={e => SetClinicname(e.target.value)} />
                            
                    </InputWrapper>
                    
                    <InputWrapper>
                        <Label color = {theme.disabled}>Country *</Label>
                        <Input readOnly value="Nepal" bgColor={theme.background} color={theme.text}/>
                    </InputWrapper>

                    <InputWrapper>
                            <Label color = {theme.disabled}>Province *</Label>
                            <Select style={{ height: "3rem"}} bgColor={theme.background} color={theme.text}>
                                <Option selected disabled>----- Select your Province here -----</Option>
                                {
                                    districts.map((items) => (
                                        <Option>{items.province}</Option>
                                    ))
                                }
                            </Select>
                    </InputWrapper>

                    <InputWrapper>
                            <Label color = {theme.disabled}>District *</Label>
                            <Select bgColor={theme.background} color={theme.text} style={{ height: "3rem"}}>
                                <Option selected disabled>----- Select your District here -----</Option>
                                {
                                    districts.map((items) => (
                                        <Option>{items.title}</Option>
                                    ))
                                }
                            </Select>
                    </InputWrapper>

                    <InputWrapper>
                            <Label color = {theme.disabled}>City *</Label>
                            <Input bgColor={theme.background} color={theme.text}
                            placeholder = "City"
                            name="city"
                            type="text"
                            value={city}
                            onChange={e => SetCity(e.target.value)} />
                    </InputWrapper>

                    <InputWrapper>
                        <Label color = {theme.disabled}>Address *</Label>
                        <Input bgColor={theme.background} color={theme.text}
                        placeholder = "Clinic Address"
                            name="address"
                            type="text"
                            value={address}
                            onChange={e => SetAddress(e.target.value)} />
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


                    <Button onClick={submitClinic} bgColor={theme.primary} hover={theme.secondary}>ADD</Button>
                </FormWrapper>

            </Wrapper>
        </Container>
    );
};

export default ClinicAdd;
