import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { doctorLists } from '../data';
import log from '../assets/Images/log.svg'; 
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


const Log = () => {
    const theme = useSelector((state) => state.theme);
    const [doctor, SetDoctor] = useState([]);
    const [date, SetDate] = useState("");
    const [notes, SetNotes] = useState("");
    const [visitPurpose, SetVisitPurpose] = useState("");
    const [height, SetHeight] = useState("");
    const [ weight,SetWeight] = useState("");
    let navigate = useNavigate();
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
          axios.post(`http://localhost:5003/api/logs/`, {
              date,
              visitPurpose,
              notes,
              height,
              weight

      });
      alert("Data Saved");
      navigate('/');
      }
  
  
    return (
        <Container bgColor = {theme.background}>
        <Title color = {theme.text}>Health Log</Title>

        <Wrapper bgColor = {theme.shade}>
            <Illustration>
                <Img src={log} alt='appointment'/>
            </Illustration>
            <FormWrapper>
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
                    <Label color = {theme.disabled}>Date of Visit *</Label>
                    <Input bgColor={theme.background} color={theme.text}
                         placeholder = "Date of Visit"
                        name="date"
                            type="date"
                            value={date}
                            onChange={e => SetDate(e.target.value)} />
                </InputWrapper>

                <InputWrapper>
                    <Label color = {theme.disabled}>Reason for visit *</Label>
                    <Input bgColor={theme.background} color={theme.text}
                         placeholder = "Reason for visit"
                        name="visitPurpose"
                            type="text"
                            value={visitPurpose}
                            onChange={e => SetVisitPurpose(e.target.value)} />
                </InputWrapper>

                <InputWrapper>
                    <Label color = {theme.disabled}>Height *</Label>
                    <Input bgColor={theme.background} color={theme.text}
                         placeholder = "Inches"
                        name="height"
                            type="number"
                            value={height}
                            onChange={e => SetHeight(e.target.value)} />
                
                </InputWrapper>

                <InputWrapper>
                    <Label color = {theme.disabled}>Weight *</Label>
                    <Input bgColor={theme.background} color={theme.text}
                         placeholder = "Kgs"
                        name="weight"
                            type="text"
                            value={weight}
                            onChange={e => SetWeight(e.target.value)} />
                </InputWrapper>
                
                <InputWrapper>
                    <Label color = {theme.disabled}>Notes *</Label>
                    <Input bgColor={theme.background} color={theme.text}
                         placeholder = "notes"
                        name="notes"
                            type="text"
                            value={notes}
                            onChange={e => SetNotes(e.target.value)} />
                </InputWrapper>


                <Button onClick={submit} bgColor = {theme.primary}  hover ={theme.secondary}>SUBMIT LOG</Button>
            </FormWrapper>
        </Wrapper>
    </Container>
    );
  };
  
  export default Log;
