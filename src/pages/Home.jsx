import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import TourCard from '../components/TourCard';
import cities from '../data.json';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Container
        sx={{
          marginY: 5,
        }}
      >
        {cities.map((city) => (
          <>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
              key={city.name}
            >
              Top {city.name} tours
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour) => (
                <TourCard tour={tour} key={tour.id} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </div>
  );
}

export default Home;
