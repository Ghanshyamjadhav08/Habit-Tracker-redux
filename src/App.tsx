import { Provider } from 'react-redux'
import './App.css'
import store from "./store/store";
import { Container, Typography } from '@mui/material';
import AddHabitForm from './components/add-habit-form';
import HabitList from './components/habit-list';
import Habitstats from './components/habit-task';
function App() {

  return (
  
   <Provider store={store}>
   <Container maxWidth="md">
    <Typography component="h1" variant="h2" gutterBottom align="center">
      Habit Tracker
      </Typography>
      <AddHabitForm/>
      <HabitList/>
      <Habitstats/>
   </Container>
   </Provider>
        
    
  )
}

export default App;
