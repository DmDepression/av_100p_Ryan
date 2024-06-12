import { useState } from "react";
import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import ContactForm from "../../../../components/ContactForm/ContactForm";
import "./styles.css";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "0",
    },
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }));

  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactButtonClick = () => {
    setShowContactForm(true);
  };

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box position="relative">
              <Box position="absolute" width={"150%"} top={-100} right={0}>
                <AnimatedBackground />
              </Box>
              <Box position="relative" textAlign="center">
                <StyledImg src={Avatar} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>
              Ryan Martins
            </Typography>
            <Typography color="primary.contrastText" variant="h2" textAlign="center">
              I am a full-stack programmer
            </Typography>
            {showContactForm && <ContactForm />}
            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <a
                  className="downloadButton"
                  href="/home/dmdepression/Documentos/vscode/front/av_100p_Ryan/src/assets/arquivos/curriculo.pdf"
                  download="curriculo.pdf"
                >
                  <DownloadIcon style={{ marginRight: '5px' }} />
                  <Typography>
                    Download CV
                  </Typography>
                </a>
              </Grid>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <a
                  className="contactButton"
                  onClick={handleContactButtonClick}
                >
                  <MailOutlineIcon style={{ marginRight: '5px' }} />
                  <Typography>
                    Contact me
                  </Typography>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
