import styled from "@emotion/styled";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Heading = styled.h1`
    font-weight: bold;
    margin-top:0px;
    margin-bottom:0px;
`;
export const P =styled.p`
    margin: 0%;
`
export const IconStyle = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid #1976d2; 
    width: 40px;
    height: 40px; 
    text-decoration: none; 
    color: inherit; 
    color:#1976d2;
    &:hover {
        background-color: #1976d2;
        color: white; 
    }
`;

export const IconDisplay = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
`;

export const IconStyledList = () => {
    return (
        <IconDisplay>
            
            <IconStyle href="#"><GoogleIcon /></IconStyle>
            <IconStyle href="#"><LinkedInIcon /></IconStyle>
            <IconStyle href="#"><FacebookIcon /></IconStyle>
        </IconDisplay>
    );
};

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
`;
