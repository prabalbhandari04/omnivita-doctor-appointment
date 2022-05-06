
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { doctorLists } from '../data';
import med from '../assets/Images/medicine.svg'; 
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

const MedicineForm = () => {
    let navigate = useNavigate();
  const theme = useSelector((state) => state.theme);
  const [doctor, SetDoctor] = useState([]);
  const [prescriptionName , SetPrescriptionName] = useState("");
  const [amount,SetAmount] = useState("");
  const [dateprescribed,SetDateprescribed] = useState("");
  const [medName,SetMedName] = useState("");
  const [generalinstructions,SetGeneralinstructions] = useState("");
    useEffect(()=>{
        axios.get('http://localhost:5003/api/doctors/')
        .then(res=>{
        //   console.log(res)
          SetDoctor(res.data)
        })
        .catch(err =>{
          console.log(err)
        })
      })

      const submit = async () => {
        axios.post(`http://localhost:5003/api/prescriptions/`, {
            prescriptionName,
	        amount,
	        dateprescribed,
            medName,
            generalinstructions
    });
    alert("Data Saved");
    navigate('/');
    }


  return (
    <Container bgColor = {theme.background}>
        <Title color = {theme.text}>Add Prescription</Title>

        <Wrapper bgColor = {theme.shade}>
            <Illustration>
                <Img src={med} alt='appointment'/>
            </Illustration>
            <FormWrapper>
                <InputWrapper>
                    <Label color = {theme.disabled}>Patient Name *</Label>
                        <Input bgColor={theme.background} color={theme.text}
                         placeholder = "Patient Name"
                        name="prescriptionName"
                            type="text"
                            value={prescriptionName}
                            onChange={e => SetPrescriptionName(e.target.value)} />
                </InputWrapper>

                <InputWrapper>
                        <Label color = {theme.disabled}>Doctor *</Label>
                        <Select bgColor = {theme.background} color={theme.text}>
                            {
                                doctor.map((doctors) => (
                                    <Option>{doctors.firstname} {doctors.lastname} ({doctors.phone})</Option>
                                ))
                            }
                        </Select>
                </InputWrapper>
                
                <InputWrapper>
                        <Label color = {theme.disabled}>Date *</Label>
                        <Input bgColor={theme.background} color={theme.text}
                         placeholder = "Date"
                        name="dateprescribed"
                            type="date"
                            value={dateprescribed}
                            onChange={e => SetDateprescribed(e.target.value)} />
                    </InputWrapper>
                
                <InputWrapper>
                    <Label color = {theme.disabled}>Medicine Name *</Label>
                    <Input bgColor={theme.background} color={theme.text}
                         placeholder = "Medicine Name"
                        name="medName"
                            type="text"
                            value={medName}
                            onChange={e => SetMedName(e.target.value)} />
                </InputWrapper>

                <InputWrapper>
                        <Label color = {theme.disabled}>Varient *</Label>
                        <Select bgColor = {theme.background} color={theme.text}>
                            <Option>Tablet</Option>
                            <Option>Injection</Option>
                        </Select>
                </InputWrapper>

                <InputWrapper>
                    <Label color = {theme.disabled}>Dose Strength *</Label>
                    <Input bgColor={theme.background} color={theme.text}
                         placeholder = "Dose Strength"
                        name="amount"
                            type="text"
 Amount                    value={amount}
                            onChange={e => SetAmount(e.target.value)} />
                </InputWrapper>

                <InputWrapper>
                    <Label color = {theme.disabled}>Timing *</Label>
                    <Input type='time' bgColor = {theme.background} color={theme.text} />
                </InputWrapper>

                <InputWrapper>
                    <Label color = {theme.disabled}>Directions *</Label>
                    <Input bgColor={theme.background} color={theme.text}
                         placeholder = "Directions"
                        name="generalinstructions"
                            type="text"
                            value={generalinstructions}
                            onChange={e => SetGeneralinstructions(e.target.value)} />
                </InputWrapper>

                <Button onClick={submit} bgColor = {theme.primary} hover = {theme.secondary} >SUBMIT</Button>
            </FormWrapper>

        </Wrapper>
    </Container>
  );
};

export default MedicineForm;
