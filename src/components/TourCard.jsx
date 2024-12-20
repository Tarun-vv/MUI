import {
  Box,
  createTheme,
  Paper,
  Rating,
  Typography,
  ThemeProvider,
} from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: 'body3',
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

function TourCard({ tour }) {
  return (
    <Grid size={3}>
      <ThemeProvider theme={theme}>
        <Paper square elevation={3}>
          <img src={tour.image} alt="image" className="img" />
          <Box paddingX={1}>
            <Typography component="h2" variant="subtitle1">
              {tour.name}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <AccessTime
                sx={{
                  width: 12.5,
                }}
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.duration} hours
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
              marginTop={3}
            >
              <Rating
                name="read-only"
                value={4.5}
                readOnly
                precision={0.5}
                size="small"
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.rating}
              </Typography>
              <Typography variant="body3" component="p" marginLeft={1.5}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h3" marginTop={0}>
                From C ${tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
}

export default TourCard;
