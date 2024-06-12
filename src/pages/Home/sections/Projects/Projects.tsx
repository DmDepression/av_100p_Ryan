import { Box, Typography, Grid, Card, CardContent, CardMedia, styled } from "@mui/material";
import { Link } from 'react-router-dom';

import bradescoImage from "../../../../assets/images/bradesco.png";
import nubankImage from "../../../../assets/images/nubank.png";
import pharmaHelpImage from "../../../../assets/images/PharmaHelp.png";

const projects = [
  { id: 1, title: "PharmaHelp", description: "Aplicativo de gestão de farmácias", image: pharmaHelpImage },
  { id: 2, title: "App Bradesco", description: "Aplicativo bancário Bradesco", image: bradescoImage },
  { id: 3, title: "App NuBank", description: "Aplicativo bancário NuBank", image: nubankImage },
];

const StyledCard = styled(Card)({
  maxWidth: 345,
  margin: "auto",
  marginBottom: 20,
});

const Projects = () => {
  return (
    <Box id="projects-section" textAlign="center" mt={12}>
      <Typography variant="h2" gutterBottom>
        My Projects
      </Typography>
      <Grid container justifyContent="center" spacing={4}>
        {projects.map((project) => (
          <Grid item key={project.id}>
            <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none' }}>
              <StyledCard>
                <CardMedia component="img" height="140" image={project.image} alt="Imagem do Projeto" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
