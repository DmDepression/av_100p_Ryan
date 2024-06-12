import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box id="about-section" textAlign="center" mt={10}>
      <Typography variant="h2" gutterBottom>
        About me
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
        Olá! Sou um desenvolvedor apaixonado por tecnologia, especializado tanto em front-end quanto em back-end. Tenho habilidades em frameworks como React, Vue.js e Angular para o desenvolvimento de interfaces de usuário responsivas e dinâmicas. Além disso, sou proficiente em Node.js, Express e Django para criar aplicativos robustos e escaláveis no lado do servidor.
      </Typography>
      <Typography variant="h6" mt={6}>
        Me encontro em:
      </Typography>
      <Box mt={2} style={{ width: '80%', height: '400px', margin: '0 auto' }}>
        <iframe
          title="Localização"
          width="100%"
          height="100%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58805.56696399348!2d-43.219294515425624!3d-22.90053409017975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5e151c7217%3A0x7ffdf9c2fc30b97d!2sCentro%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1718020620387!5m2!1spt-BR!2sbr"
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
};

export default About;
