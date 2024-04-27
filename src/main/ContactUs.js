import React from 'react'
import { Container, Grid } from '@mui/material';
import styled from 'styled-components';
import photo from './image.jpg'

export default function ContactUs() {
  return (
  
  <StyledContainer>
      <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <br></br>
            <br></br>
            <br></br>
              <img src={photo} alt="image" style={{ width: '90%' }} />
          </Grid>
          <Grid item xs={12} md={6}>
              <StyledPaper elevation={3}>
                  <StyledTitle>
                  <div>
         <h6>We're always there to help you out in case of any issues with our website.
   <br></br>
   <br></br>
Contact Us at LeaveLireport@gmail.com or you can always call our representatives at +91 8520741963.
<br></br>
<br></br>
 We'd be happy to assist you!
 <br></br>
 </h6>
    </div>
  
                  </StyledTitle>
               </StyledPaper>
          </Grid>
      </Grid>
  </StyledContainer>
);
};
const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;