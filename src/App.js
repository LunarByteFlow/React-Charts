
import './App.css';
import { Container, Typography } from '@mui/material';
import PieChart from './components/PieChart_1';




function App() {
  return (
    <Container maxWidth="md">
    <Typography variant="h3" component="h1" align="center" marginY={4}>
      Charts Example
    </Typography>
    <PieChart/>
  </Container>
  );
}

export default App;
