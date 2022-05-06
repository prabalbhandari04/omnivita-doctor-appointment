import * as React from 'react';
import styled from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LocalPharmacyOutlinedIcon from '@mui/icons-material/LocalPharmacyOutlined';
import SnippetFolderOutlinedIcon from '@mui/icons-material/SnippetFolderOutlined';

import { tablet } from "../responsive";

const Container = styled.div`
    bottom: 0;
    position: fixed;
    display: none;
    width: 100%;

    ${tablet ({
        display: "initial",
    })}

`

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
      <Container>
        <Box sx={{ minWidth: 390, bgcolor: '#fff'}}>
          <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              textColor="primary"
              indicatorColor="primary"
              scrollButtons={false}
          >
              <Tab label="Overview" icon={<HomeOutlinedIcon />} sx={{fontSize: "0.6rem"}}/>
              <Tab label="Health Log" icon={<AssessmentOutlinedIcon />} sx={{fontSize: "0.6rem"}}/>
              <Tab label="Symptoms" icon={<CoronavirusOutlinedIcon />} sx={{fontSize: "0.6rem"}}/>
              <Tab label="Prescriptions" icon={<MedicationOutlinedIcon />} sx={{fontSize: "0.6rem"}}/>
              <Tab label="Appointment" icon={<EventAvailableOutlinedIcon />} sx={{fontSize: "0.6rem"}}/>
              <Tab label="Doctors" icon={<SupervisedUserCircleOutlinedIcon />} sx={{fontSize: "0.6rem"}}/>
              <Tab label="Clinic" icon={<LocalPharmacyOutlinedIcon />} sx={{fontSize: "0.6rem"}}/>
              <Tab label="Records" icon={<SnippetFolderOutlinedIcon />} sx={{fontSize: "0.6rem"}}/>
              <Tab label="Setting" icon={<SettingsOutlinedIcon />} sx={{fontSize: "0.6rem"}}/>
          </Tabs>
        </Box>
      </Container>
    
  );
}
