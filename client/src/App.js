import {
  Container,
  Box, 
  Paper, 
  Typography
} from '@mui/material';

function App() {
  const styles = {
    Paper:{
      padding:5
    },
    FlexBox:{
      display:'flex',
      flexDirection:'column',
      gap:'10px',
      padding:5
    }
  }
  return (
    <Container>
      <Box sx={styles.FlexBox}>
        <Paper sx={styles.Paper}>
          <Typography 
            variant="h2"
            component="h1"
          >
          React Mern Mui
          </Typography>
          <Typography 
            variant="h5"
            component="p"
          >
          Build React without the crap
          </Typography>
        </Paper>
        <Box sx={styles.FlexBox}> 
          <Typography 
              variant="h4"
              component="h2"
            >
            Why was this created?
          </Typography>
          <Typography 
              variant="h6"
              component="p"
            >
            Sometimes you want to go from your brain to the code 
            editor without being sidetracked by the confusion of bad 
            documentation outdated materials and other 3rd resources
            that tends to piss us off. 
          </Typography>
          <Typography 
              variant="h6"
              component="p"
            >
            I just simply wanted a full stack application 
            that works seamlessly and confidently with the  
            <code> client </code>, <code> server </code>
            and my <code> database </code>
          </Typography>
          <Typography 
              variant="h6"
              component="p"
            >
            I just wanted the code and not the extra crap. Another issue with online resources is that not everyone will code the same and sometimes they leave out
            very important details that prevents you from completing my damn project 
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default App;