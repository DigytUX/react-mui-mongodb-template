import {
  Container,
  Box, 
  Paper, 
  Typography,
  Grid
} from '@mui/material';
import {Form} from './components/Form'

function App() {
  const styles = {
    Paper:{
      padding:5
    },
    FlexBox:{
      display:'flex',
      flexDirection:'column',
      gap:'10px',
      padding:5,
      alignItems:'start'
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
          <Typography 
              variant="h6"
              component="p"
            >
          I also added extra comments and 
          </Typography>
        </Box>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Paper>
              <Box sx={styles.FlexBox}>
                <Typography variant="h5">Distractling-Free foundation to start building</Typography>
                <Typography variant="body1">Powered by MUI, you can immedialty start building a usuable React UI</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper>
              <Box sx={styles.FlexBox}>
                <Typography variant="h5">Understand what your building</Typography>
                <Typography variant="body1">No more code without explaination of why it's written the way it is. Learn while you code</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper>
              <Box sx={styles.FlexBox}>
                <Typography variant="h5">Easy Database integration with MongoDB</Typography>
                <Typography variant="body1">All the code is there and explained to you. Simply build your project and add your connection string and you're connected!</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper>
              <Box sx={styles.FlexBox}>
                <Typography variant="h5">No bloat backend</Typography>
                {/* <Typography variant="body1">
                  The problem with services like Amplify and Firebase 
                  is that you dont have much control on the backend. 
                  Without decent documentation and root access you can run into issues
                  that are quite time expensive.
                </Typography> */}
                <Typography variant="body1">
                  This backend is built using express, a Node.js framework that will get your CRUD app 
                  up as quickly as possible with clean code that is easy to digest scale on without crap that is not needed.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>
              <Box sx={styles.FlexBox}>
               <Form />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;