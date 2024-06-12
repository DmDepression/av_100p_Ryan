import { useParams } from 'react-router-dom';
import { Box, Typography, CardMedia, Paper } from '@mui/material';
import bradescoImage from "../../../../assets/images/bradesco.png";
import nubankImage from "../../../../assets/images/nubank.png";
import pharmaHelpImage from "../../../../assets/images/PharmaHelp.png";

const projectDetails: { [key: string]: { title: string; description: string; image: string } } = {
  '1': { 
    title: 'PharmaHelp', 
    description: `
      PharmaHelp é um aplicativo de gestão de farmácias que permite a administração de estoque, controle de vendas e geração de relatórios detalhados para otimizar o desempenho e a eficiência da farmácia.
      \n\nMinha participação no projeto incluiu:
      \n- Desenvolvimento da interface do usuário usando React e Material-UI.
      \n- Implementação de funcionalidades de backend utilizando Node.js e Express.
      \n- Integração com sistemas de gerenciamento de farmácias existentes.
      \n- Testes e garantia de qualidade do software para assegurar um desempenho confiável.
    `, 
    image: pharmaHelpImage 
  },
  '2': { 
    title: 'App Bradesco', 
    description: `
      O App Bradesco é um aplicativo bancário que oferece serviços de transferência, pagamento de contas e consulta de saldo, proporcionando uma experiência bancária digital completa para os clientes do Bradesco.
      \n\nMinha participação no projeto incluiu:
      \n- Colaboração com designers para criar uma interface intuitiva e amigável.
      \n- Desenvolvimento de funcionalidades bancárias seguras utilizando Java e Spring Boot.
      \n- Implementação de autenticação e autorização robustas para garantir a segurança dos usuários.
      \n- Realização de testes de desempenho e otimização de consultas ao banco de dados.
    `, 
    image: bradescoImage 
  },
  '3': { 
    title: 'App NuBank', 
    description: `
      O App NuBank é um aplicativo bancário que inclui funcionalidades de controle de gastos, investimentos e atendimento ao cliente, oferecendo uma plataforma digital eficiente e intuitiva para os clientes do NuBank.
      \n\nMinha participação no projeto incluiu:
      \n- Desenvolvimento de componentes reutilizáveis em React Native para a interface do usuário.
      \n- Integração com APIs de terceiros para fornecer serviços financeiros adicionais.
      \n- Implementação de notificações push e serviços em tempo real usando Firebase.
      \n- Condução de testes automatizados para garantir a estabilidade e a usabilidade da aplicação.
    `, 
    image: nubankImage 
  },
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectDetails[id] : undefined;

  return (
    <Box textAlign="center" mt={10} sx={{ minHeight: '70vh', paddingBottom: '20vh' }}>
      {project ? (
        <>
          <Typography variant="h2" gutterBottom>
            {project.title}
          </Typography>
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              flexDirection: 'column', 
              width: '100%',
              maxWidth: '600px',
              margin: '0 auto',
              gap: 4 
            }}
          >
            <Paper elevation={3} sx={{ padding: 2, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="75"
                image={project.image}
                alt={`Imagem do projeto ${project.title}`}
                style={{ maxWidth: '75px', height: 'auto', margin: 'auto' }}
              />
            </Paper>
            <Paper elevation={3} sx={{ padding: 2, boxShadow: 3 }}>
              <Typography variant="body1" style={{ whiteSpace: 'pre-line', textAlign: 'center' }}>
                {project.description}
              </Typography>
            </Paper>
          </Box>
        </>
      ) : (
        <Typography variant="h5" color="error">
          Projeto não encontrado.
        </Typography>
      )}
    </Box>
  );
};

export default ProjectDetail;
