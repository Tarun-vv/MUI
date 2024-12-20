import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  Paper,
  Typography,
} from '@mui/material';
import ImageList from './ImageList';
import Accordian from './Accordian';
import Modal from './Modal';

function Tour() {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: 'flex' }}>
        <img
          src="https://images.unsplash.com/photo-1587223043646-fa771d9e0c8b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="list image"
          height={325}
        />
        <ImageList />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          vitae fugiat doloribus fuga, beatae architecto cumque mollitia sunt
          perspiciatis neque maiores reprehenderit sapiente ducimus officia
          assumenda vero nostrum provident commodi animi, at inventore,
          aspernatur esse nesciunt. Culpa ullam nemo vitae.
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently Asked Questions
        </Typography>
        <Accordian />
      </Box>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <Modal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
}

export default Tour;
