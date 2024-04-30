import React from 'react';
import { Container, Grid } from '@mui/material';
import styled from 'styled-components';
import image1 from "./image1.png";

const Home = () => {  
    return (
        <StyledContainer>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <img src={image1} alt="ima" style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledPaper elevation={3}>
                        <StyledTitle>
                            <br></br>
                            <br></br>
                           <i>Welcome to</i>
                            <br />
                            <i>Employee Leave </i> 
                            <br />
                            <i> Management System</i>
                        </StyledTitle>
                     </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Home;

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