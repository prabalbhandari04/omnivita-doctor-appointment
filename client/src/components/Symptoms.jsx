import React, { useState,useEffect } from 'react';
import axios from 'axios';
import symptom from '../assets/Images/symptoms.svg'; 
import { TextareaAutosize } from '@mui/material';
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
import {useNavigate} from 'react-router-dom';

const Symptoms = () => {
    const theme = useSelector((state) => state.theme);
    let navigate = useNavigate();
    const [symptomTime, SetSymptomTime] = useState("");
    const [symptomDate, SetSymptomDate] = useState("");
    const [symptomInfo, SetSymptomInfo] = useState("");

    const submit = async () => {
        axios.post(`http://localhost:5003/api/symptoms/`, {
            symptomDate,
            symptomTime,
            symptomInfo    });
            alert("Data Saved");
            navigate('/');
    }
    


    return (
        <Container bgColor = {theme.background}>
        <Title color = {theme.text}>Add Symptoms</Title>

        <Wrapper bgColor = {theme.shade}>
            <Illustration>
                <Img src={symptom} alt='appointment'/>
            </Illustration>
            <FormWrapper>
                    
                <InputWrapper>
                    <Label color = {theme.disabled}>Symptom's Type</Label>
                    <Select bgColor = {theme.background} color={theme.text}>
                        <Option>Dizzy</Option>
                        <Option>Shortness of Breath</Option>
                        <Option>Fainted</Option>
                        <Option>Swelling</Option>
                        <Option>Heart Fluttering</Option>
                        <Option>Fatigue</Option>
                        <Option>Other</Option>
                    </Select>
                </InputWrapper>
                    
                    <InputWrapper>
                        <Label color = {theme.disabled}>Date *</Label>
                        <Input bgColor={theme.background} color={theme.text}
                         placeholder = "Date"
                            name="symptomDate"
                            type="date"
                            value={symptomDate}
                            onChange={e => SetSymptomDate(e.target.value)} />
                            
                    </InputWrapper>
                    

                    <InputWrapper>
                        <Label color = {theme.disabled}>Time *</Label>
                        <Input bgColor={theme.background} color={theme.text}
                        placeholder = "Time"
                            name="symptomTime"
                            type="time"
                            value={symptomTime}
                            onChange={e => SetSymptomTime(e.target.value)} />
                      
                    </InputWrapper>


                    <InputWrapper>
                        <Label color = {theme.disabled}>Information *</Label>
                        <Input bgColor={theme.background} color={theme.text}
                         placeholder = "Symptom Info"
                            name="symptomInfo"
                            type="textarea"
                            value={symptomInfo}
                            onChange={e => SetSymptomInfo(e.target.value)} />
                            
                    </InputWrapper>

                    <Button onClick={submit} bgColor={theme.primary} hover={theme.secondary}>ADD</Button>
                </FormWrapper>

        </Wrapper>
    </Container>
    );
};

export default Symptoms;